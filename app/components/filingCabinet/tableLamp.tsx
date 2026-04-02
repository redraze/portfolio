export default function TableLamp({ refs, nodes, materials, events, lampOn }: any) {
    const { lamp, lampBody, bulb } = refs;
    const { toggleLamp, onPointerEnter, onPointerLeave } = events;
    return (
        <>
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
        </>
    );
};
