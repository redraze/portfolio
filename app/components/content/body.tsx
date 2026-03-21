export default function Body({ refs, nodes, materials, events }: any) {
    const { body } = refs;
    const { closeAll, onPointerEnter, onPointerLeave } = events;
    return (
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
    )
}