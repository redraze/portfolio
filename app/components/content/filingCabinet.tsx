import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { type ThreeEvent } from '@react-three/fiber';
import { AnimationAction, type Object3D, type Object3DEventMap } from 'three';
import { useFolderStore } from '~/lib/folderStore';
import { useEventStore } from '~/lib/eventStore';
import { fileSystemMap } from '~/lib/fileStructure';
import { useContentStore } from '~/lib/contentStore';

export default function FilingCabinet({ setHover }: { setHover: Dispatch<SetStateAction<boolean>> }) {
  const gltf: any = useGLTF('/filingCabinet.gltf');
  const group = useRef(null);
  const { nodes, materials, animations } = gltf;
  const { actions } = useAnimations(animations, group);


  // ==================================================================================================
  //                                        HOVER EVENTS
  // ==================================================================================================

  const hoverTarget = useEventStore((state) => state.hoverTarget);
  const setHoverTarget = useEventStore((state) => state.setHoverTarget);
    
  const body = useRef<Object3D<Object3DEventMap> | null>(null);
  const topDrawer = useRef<Object3D<Object3DEventMap> | null>(null);
  const topDrawerBody = useRef<Object3D<Object3DEventMap> | null>(null);
  const topDrawerHandle = useRef<Object3D<Object3DEventMap> | null>(null);
  const bottomDrawer = useRef<Object3D<Object3DEventMap> | null>(null);
  const bottomDrawerBody = useRef<Object3D<Object3DEventMap> | null>(null);
  const bottomDrawerHandle = useRef<Object3D<Object3DEventMap> | null>(null);
  const lamp = useRef<Object3D<Object3DEventMap> | null>(null);
  const lampBody = useRef<Object3D<Object3DEventMap> | null>(null);
  const bulb = useRef<Object3D<Object3DEventMap> | null>(null);
  const folder01 = useRef<Object3D<Object3DEventMap> | null>(null);
  const folder02 = useRef<Object3D<Object3DEventMap> | null>(null);
  const folder03 = useRef<Object3D<Object3DEventMap> | null>(null);
  const folder04 = useRef<Object3D<Object3DEventMap> | null>(null);
  const folder05 = useRef<Object3D<Object3DEventMap> | null>(null);
  const folder06 = useRef<Object3D<Object3DEventMap> | null>(null);

  const [outlineRef, setOutlineRef] = useState<any>(null);
  const [refMatrix, setRefMatrix] = useState<any>({});
  const [targetMap, setTargetMap] = useState<any>({});

  useEffect(() => {
    setRefMatrix({
      [body!.current!.uuid]: [body],
      [topDrawer!.current!.uuid]: [
        topDrawerBody,
        topDrawerHandle,
      ],
      [bottomDrawer!.current!.uuid]: [
        bottomDrawerBody,
        bottomDrawerHandle,
      ],
      [lamp!.current!.uuid]: [
        lampBody,
        bulb,
      ],
      [folder01!.current!.uuid]: [folder01],
      [folder02!.current!.uuid]: [folder02],
      [folder03!.current!.uuid]: [folder03],
      [folder04!.current!.uuid]: [folder04],
      [folder05!.current!.uuid]: [folder05],
      [folder06!.current!.uuid]: [folder06],
    });

    setTargetMap({
      [body!.current!.uuid]: "body",
      [topDrawer!.current!.uuid]: "projects",
      [bottomDrawer!.current!.uuid]: "experience",
      [lamp!.current!.uuid]: "lamp",
      [folder01!.current!.uuid]: "technologies.json",
      [folder02!.current!.uuid]: "ABOUTME.md",
      [folder03!.current!.uuid]: "project_1.tsx",
      [folder04!.current!.uuid]: "project_2.tsx",
      [folder05!.current!.uuid]: "experience_1.tsx",
      [folder06!.current!.uuid]: "experience_2.tsx",
      "body": body!.current!.uuid,
      "projects": topDrawer!.current!.uuid,
      "experience": bottomDrawer!.current!.uuid,
      "lamp": lamp!.current!.uuid,
      "technologies.json": folder01!.current!.uuid,
      "ABOUTME.md": folder02!.current!.uuid,
      "project_1.tsx": folder03!.current!.uuid,
      "project_2.tsx": folder04!.current!.uuid,
      "experience_1.tsx": folder05!.current!.uuid,
      "experience_2.tsx": folder06!.current!.uuid,
    });
  }, []);

  const onPointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHover(true);
    const objectId = e.eventObject.uuid;

    setOutlineRef(refMatrix[objectId]);
    setHoverTarget(targetMap[objectId]);
  };

  const onPointerLeave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHover(false);
    setOutlineRef(null);
    setHoverTarget(null);
  };

  // sync hover state from file system to outline state in scene
  useEffect(() => {
    if (!hoverTarget) {
      setOutlineRef(null);
      return;
    };
    const targetUuid = targetMap[hoverTarget];
    const targetRef = refMatrix[targetUuid];
    setOutlineRef(targetRef);
  }, [hoverTarget]);


  // ==================================================================================================
  //                                        CLICK EVENTS
  // ==================================================================================================

  const folderState = useFolderStore((state) => state.folderState);
  const toggleFolder = useFolderStore((state) => state.toggleFolder);
  const closeAllFolders = useFolderStore((state) => state.closeAllFolders);
  const setContent = useContentStore((state) => state.setContent);

  const [topDrawerOpen, setTopDrawerOpen] = useState(false);
  const [botDrawerOpen, setBotDrawerOpen] = useState(false);
  const [lampOn, setLampOn] = useState(true);

  const stateMap: { [x: string]: [boolean, Dispatch<SetStateAction<boolean>>] } = {
    "projects": [topDrawerOpen, setTopDrawerOpen],
    "experience": [botDrawerOpen, setBotDrawerOpen],
  };

  const actionsMap: { [x: string]: AnimationAction | null } = {
    "projects": actions["drawer topAction"],
    "experience": actions["drawer botAction"],
  };

  const closeAll = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    Object
      .values(actionsMap)
      .forEach((action: AnimationAction | null) => {
        closeDrawer(action);
      });
    setTopDrawerOpen(false);
    setBotDrawerOpen(false);
    closeAllFolders();
  };

  const animationDuration = 0.4;
  const clickDrawer = (e: ThreeEvent<MouseEvent>, foldername: string) => {
    e.stopPropagation();

    const action = actionsMap[foldername];
    const open = folderState[foldername];
    const [_, setState] = stateMap[foldername];

    setState(!open);
    open ? closeDrawer(action) : openDrawer(action);
    toggleFolder(foldername);
  };

  const openDrawer = (action: AnimationAction | null) => {
    action?.setDuration(animationDuration);
    action?.setLoop(2200, animationDuration);
    action?.reset().play().fadeIn(animationDuration);
    if (action) action.clampWhenFinished = true;
  }

  const closeDrawer = (action: AnimationAction | null) => {
      action?.fadeOut(animationDuration / 2);
  };

  const clickFile = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();

    const targetUuid = e.object.uuid;
    const filename = targetMap[targetUuid];
    const content = fileSystemMap[filename];

    setContent(content);
  }

  // sync folder state from file system to drawer state in scene
  useEffect(() => {
    Object.entries(folderState).forEach(([foldername, isOpen]) => {
      const action = actionsMap[foldername];
      const [state, setState] = stateMap[foldername];

      if (isOpen === state) return;

      isOpen ? openDrawer(action) : closeDrawer(action);
      setState(isOpen);
    });
  }, [folderState]);

  const toggleLamp = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setLampOn((prev) => !prev);
  };


  // ==================================================================================================
  //                                        SCENE OBJECTS
  // ==================================================================================================

  return (<>
    <EffectComposer autoClear={false}>
      <Outline
          selection={outlineRef}
          visibleEdgeColor={0xffffff}
          hiddenEdgeColor={0x000000}
          edgeStrength={5}
      />
    </EffectComposer>

    {/* filing cabinet group */}
    <group dispose={null} ref={group} name={"Scene"}>

      {/* body */}
      <mesh
        name="body"
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.shell}
        scale={[1.3, 2, 1]}
        ref={body}
        onClick={(e) => closeAll(e)}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      />

      {/* top drawer */}
      <group
        name="drawer_top"
        position={[1.342, 1.23, -0.003]}
        scale={[1.307, 0.857, 1]}
        ref={topDrawer}
        onClick={(e) => clickDrawer(e, "projects")}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      >
        <mesh
          name="drawer_top008"
          castShadow
          receiveShadow
          geometry={nodes.drawer_top008.geometry}
          material={materials.shell}
          ref={topDrawerBody}
        />
        <mesh
          name="drawer_top008_1"
          castShadow
          receiveShadow
          geometry={nodes.drawer_top008_1.geometry}
          material={materials.metal}
          ref={topDrawerHandle}
        />
        <mesh
          ref={folder03}
          name="folder03"
          castShadow
          receiveShadow
          geometry={nodes.folder03.geometry}
          material={materials.folder}
          position={[-1.86, -0.379, -0.365]}
          rotation={[1.836, -0.039, -1.541]}
          scale={[1.316, 1.53, 1.156]}
          onClick={(e) => clickFile(e)}
          onPointerEnter={(e) => onPointerEnter(e)}
          onPointerLeave={(e) => onPointerLeave(e)}
        />
        <mesh
          ref={folder04}
          name="folder04"
          castShadow
          receiveShadow
          geometry={nodes.folder04.geometry}
          material={materials.folder}
          position={[-2.304, -0.379, -0.365]}
          rotation={[1.836, -0.039, -1.541]}
          scale={[1.316, 1.53, 1.156]}
          onClick={(e) => clickFile(e)}
          onPointerEnter={(e) => onPointerEnter(e)}
          onPointerLeave={(e) => onPointerLeave(e)}
        />
      </group>
      
      {/* bottom drawer */}
      <group
        name="drawer_bot"
        ref={bottomDrawer}
        position={[1.342, -0.729, -0.003]}
        scale={[1.307, 0.857, 1]}
        onClick={(e) => clickDrawer(e, "experience")}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      >
        <mesh
          name="drawer_top010"
          castShadow
          receiveShadow
          geometry={nodes.drawer_top010.geometry}
          material={materials.shell}
          ref={bottomDrawerBody}
        />
        <mesh
          name="drawer_top010_1"
          castShadow
          receiveShadow
          geometry={nodes.drawer_top010_1.geometry}
          material={materials.metal}
          ref={bottomDrawerHandle}
        />
        <mesh
          ref={folder05}
          name="folder05"
          castShadow
          receiveShadow
          geometry={nodes.folder05.geometry}
          material={materials.folder}
          position={[-1.86, -0.354, -0.365]}
          rotation={[1.836, -0.039, -1.541]}
          scale={[1.316, 1.53, 1.156]}
          onClick={(e) => clickFile(e)}
          onPointerEnter={(e) => onPointerEnter(e)}
          onPointerLeave={(e) => onPointerLeave(e)}
        />
        <mesh
          ref={folder06}
          name="folder06"
          castShadow
          receiveShadow
          geometry={nodes.folder06.geometry}
          material={materials.folder}
          position={[-2.304, -0.354, -0.365]}
          rotation={[1.836, -0.039, -1.541]}
          scale={[1.316, 1.53, 1.156]}
          onClick={(e) => clickFile(e)}
          onPointerEnter={(e) => onPointerEnter(e)}
          onPointerLeave={(e) => onPointerLeave(e)}
        />
      </group>

      {/* table lamp */}
      <group
        ref={lamp}
        name="lamp"
        position={[-0.902, 2.07, 0.622]}
        rotation={[0, -0.889, 0]}
        scale={[0.51, 2, 0.4]}
        onClick={(e) => toggleLamp(e)}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      >
        <mesh
          ref={lampBody}
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.lamp}
        />
        <mesh
          ref={bulb}
          name="Cube002_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={lampOn ? materials.bulb : materials.shell}
        />
      </group>

      {/* lamp light */}
      <spotLight
        name="Spot"
        intensity={lampOn ? 5 : 0}
        angle={0.973}
        penumbra={0.1}
        decay={2}
        color="#ffeeac"
        position={[-0.753, 2.76, 0.501]}
        rotation={[-1.336, -0.499, 0.064]}
      >
        <group position={[0, 0, -1]} />
      </spotLight>

      {/* top folders */}
      <mesh
        ref={folder01}
        name="folder01"
        castShadow
        receiveShadow
        geometry={nodes.folder01.geometry}
        material={materials.folder}
        position={[0.146, -0.015, -0.213]}
        rotation={[0, 0.367, 0]}
        scale={[1.3, 2, 1]}
        onClick={(e) => clickFile(e)}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      />
      <mesh
        ref={folder02}
        name="folder02"
        castShadow
        receiveShadow
        geometry={nodes.folder02.geometry}
        material={materials.folder}
        position={[0.691, 0.013, 0.062]}
        rotation={[0, 0.608, 0]}
        scale={[1.3, 2, 1]}
        onClick={(e) => clickFile(e)}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      />

    </group>
  </>);
};

useGLTF.preload('/filingCabinet.gltf');
