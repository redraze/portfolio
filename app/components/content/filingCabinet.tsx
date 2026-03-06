import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { useGLTF, useAnimations, useCursor } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { type ThreeEvent } from '@react-three/fiber';
import { AnimationAction, type Object3D, type Object3DEventMap } from 'three';
import { useFolderStore } from '~/lib/folderStore';

export default function FilingCabinet() {
  const gltf: any = useGLTF('/filingCabinet.gltf');
  const group = useRef(null);
  const { nodes, materials, animations } = gltf;
  const { actions, names } = useAnimations(animations, group);


  // ==================================================================================================
  //                                        HOVER EVENTS
  // ==================================================================================================

  const body = useRef<Object3D<Object3DEventMap> | null>(null);
  const topDrawer = useRef<Object3D<Object3DEventMap> | null>(null);
  const topDrawerBody = useRef<Object3D<Object3DEventMap> | null>(null);
  const topDrawerHandle = useRef<Object3D<Object3DEventMap> | null>(null);
  const bottomDrawer = useRef<Object3D<Object3DEventMap> | null>(null);
  const bottomDrawerBody = useRef<Object3D<Object3DEventMap> | null>(null);
  const bottomDrawerHandle = useRef<Object3D<Object3DEventMap> | null>(null);

  const [ref, setRef] = useState<any>(null);
  const [refMatrix, setRefMatrix] = useState<any>({});

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
    });
  }, []);

  const onPointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHover(true);
    const object = e.eventObject;
    setRef(refMatrix[object.uuid]);
  };

  const onPointerLeave = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHover(false);
    setRef(null);
  };

  const [hovered, setHover] = useState(false);
  useCursor(hovered, 'pointer', 'grab');


  // ==================================================================================================
  //                                        CLICK EVENTS
  // ==================================================================================================

  const folderState = useFolderStore((state) => state.folderState);
  const toggleFolder = useFolderStore((state) => state.toggleFolder);
  const closeAllFolders = useFolderStore((state) => state.closeAllFolders);

  const [topDrawerOpen, setTopDrawerOpen] = useState(false);
  const [botDrawerOpen, setBotDrawerOpen] = useState(false);

  const stateMap: { [x: string]: [boolean, Dispatch<SetStateAction<boolean>>] } = {
    "projects": [topDrawerOpen, setTopDrawerOpen],
    "experience": [botDrawerOpen, setBotDrawerOpen],
  };

  const actionsMap: { [x: string]: AnimationAction | null } = {
    "projects": actions[names[0]],
    "experience": actions[names[1]],
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

  useEffect(() => {
    Object.entries(folderState).forEach(([foldername, isOpen]) => {
      const action = actionsMap[foldername];
      const [state, setState] = stateMap[foldername];

      if (isOpen === state) return;

      isOpen ? openDrawer(action) : closeDrawer(action);
      setState(isOpen);
    });
  }, [folderState]);


  return (<>
    <EffectComposer autoClear={false}>
      <Outline
          selection={ref}
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
      </group>
    </group>
  </>);
};

useGLTF.preload('/filingCabinet.gltf');
