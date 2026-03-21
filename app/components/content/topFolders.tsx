export default function TopFolders({ refs, nodes, materials, events }: any) {
    const { folder01, folder02 } = refs;
    const { clickFile, onPointerEnter, onPointerLeave } = events;
    return (
        <>
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
        </>
    );
};
