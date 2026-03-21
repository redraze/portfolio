export default function TopDrawer({ refs, nodes, materials, events }: any) {
    const { topDrawer, topDrawerBody, topDrawerHandle, folder03, folder04 } = refs;
    const { clickDrawer, onPointerEnter, onPointerLeave, clickFile } = events;

    return (
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
    );
};
