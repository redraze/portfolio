export default function BottomDrawer({ refs, nodes, materials, events }: any) {
    const { bottomDrawer, bottomDrawerBody, bottomDrawerHandle, folder05, folder06 } = refs;
    const { clickDrawer, onPointerEnter, onPointerLeave, clickFile } = events;

    return (
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
    )
}