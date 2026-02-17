import { useEffect, useRef, useState } from 'react';
import { useGLTF, useCursor } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing'
import type { ThreeEvent } from '@react-three/fiber';
import type { Object3D, Object3DEventMap } from 'three';

export default function FilingCabinet() {
  const gltf: any = useGLTF('/filingCabinet.gltf');
  const { nodes, materials } = gltf;

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
  }, [])

  const [hovered, setHover] = useState(false);
  useCursor(hovered, 'pointer', 'auto');

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    // TODO: open associated file system locaion
  };

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
    <group dispose={null}>

      {/* body */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.shell}
        scale={[1.3, 2, 1]}
        ref={body}
        onClick={(e) => onClick(e)}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      />

      {/* top drawer */}
      <group
        position={[1.342, 1.23, -0.003]}
        scale={[1.307, 0.857, 1]}
        ref={topDrawer}
        onClick={(e) => onClick(e)}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.drawer_top008.geometry}
          material={materials.shell}
          ref={topDrawerBody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.drawer_top008_1.geometry}
          material={materials.metal}
          ref={topDrawerHandle}
        />
      </group>
      
      {/* bottom drawer */}
      <group
        ref={bottomDrawer}
        position={[1.342, -0.729, -0.003]}
        scale={[1.307, 0.857, 1]}
        onClick={(e) => onClick(e)}
        onPointerEnter={(e) => onPointerEnter(e)}
        onPointerLeave={(e) => onPointerLeave(e)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.drawer_top010.geometry}
          material={materials.shell}
          ref={bottomDrawerBody}
        />
        <mesh
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
