import { useEffect, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from 'react';
import { type Object3D, type Object3DEventMap } from 'three';
import { type GLTF } from 'three-stdlib';
import { type ThreeEvent } from '@react-three/fiber';
import { type ObjectMap } from '@react-three/fiber';
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { useGLTF, useAnimations } from '@react-three/drei';
import { useClickEvents, useHoverEvents } from '~/lib/customHooks';
import Body from './body';
import TopDrawer from './topDrawer';
import BottomDrawer from './bottomDrawer';
import TableLamp from './tableLamp';
import TopFolders from './topFolders';

// props type to be used in imported objects
export interface BaseObjectProps extends GLTF, ObjectMap {
  refs: { [x: string]: RefObject<Object3D<Object3DEventMap> | null> },
  events: { [x: string]: (e: ThreeEvent<MouseEvent>, foldername?: string) => void },
};

export default function FilingCabinet({ setHover }: { setHover: Dispatch<SetStateAction<boolean>> }) {
  const gltf = useGLTF('/filingCabinet.gltf');
  const group = useRef(null);
  const { nodes, materials, animations } = gltf;
  const { actions } = useAnimations(animations, group);

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

  const { onPointerEnter, onPointerLeave } = useHoverEvents(setHover, setOutlineRef, refMatrix, targetMap);
  const { closeAll, clickDrawer, clickFile } = useClickEvents(actions, targetMap);

  const [lampOn, setLampOn] = useState(true);
  const toggleLamp = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setLampOn((prev) => !prev);
  };

  return (<>
    <EffectComposer autoClear={false}>
      <Outline
          selection={outlineRef}
          visibleEdgeColor={0xffffff}
          hiddenEdgeColor={0x000000}
          edgeStrength={5}
      />
    </EffectComposer>

    <group dispose={null} ref={group} name={"Scene"}>
      <Body
        refs={{ body }}
        nodes={nodes}
        materials={materials}
        events={{ closeAll, onPointerEnter, onPointerLeave }}
      />
      <TableLamp
        refs={{ lamp, lampBody, bulb }}
        nodes={nodes}
        materials={materials}
        events={{ toggleLamp, onPointerEnter, onPointerLeave }}
        lampOn={lampOn}
      />
      <TopFolders
        refs={{ folder01, folder02 }}
        nodes={nodes}
        materials={materials}
        events={{ clickFile, onPointerEnter, onPointerLeave }}
      />
      <TopDrawer
        refs={{ topDrawer, topDrawerBody, topDrawerHandle, folder03, folder04 }}
        nodes={nodes}
        materials={materials}
        events={{ clickDrawer, onPointerEnter, onPointerLeave, clickFile }}
      />
      <BottomDrawer
        refs={{ bottomDrawer, bottomDrawerBody, bottomDrawerHandle, folder05, folder06 }}
        nodes={nodes}
        materials={materials}
        events={{ clickDrawer, onPointerEnter, onPointerLeave, clickFile }}
      />
    </group>
  </>);
};

useGLTF.preload('/filingCabinet.gltf');
