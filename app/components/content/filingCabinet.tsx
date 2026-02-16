import { useGLTF } from '@react-three/drei';

export default function Model(props: any) {
  const gltf: any = useGLTF('/filingCabinet.gltf');
  const { nodes, materials } = gltf;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={nodes.body.material}
        scale={[1.3, 2, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drawer_top.geometry}
        material={nodes.drawer_top.material}
        position={[1.342, 1.23, -0.003]}
        scale={[1.307, 0.857, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.drawer_bot.geometry}
        material={nodes.drawer_bot.material}
        position={[1.342, -0.729, -0.003]}
        scale={[1.307, 0.857, 1]}
      />
    </group>
  );
};

useGLTF.preload('/filingCabinet.gltf');
