import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { AnimationAction } from "three";
import type { ThreeEvent } from "@react-three/fiber";
import { useFolderStore } from "./folderStore";
import { useContentStore } from "./contentStore";
import { useEventStore } from "./eventStore";
import { fileSystemMap, folderNameKeys } from "./fileStructure";

export const useClickEvents = (
    actions: {[x: string]: AnimationAction | null },
    targetMap: any,
) => {
    const folderState = useFolderStore((state) => state.folderState);
    const toggleFolder = useFolderStore((state) => state.toggleFolder);
    const closeAllFolders = useFolderStore((state) => state.closeAllFolders);
    const setContent = useContentStore((state) => state.setContent);
    
    const [topDrawerOpen, setTopDrawerOpen] = useState(false);
    const [botDrawerOpen, setBotDrawerOpen] = useState(false);

    const stateMap: { [x: string]: [boolean, Dispatch<SetStateAction<boolean>>] } = {
        [folderNameKeys.PROJECTS]: [topDrawerOpen, setTopDrawerOpen],
        [folderNameKeys.EXPERIENCE]: [botDrawerOpen, setBotDrawerOpen],
    };
    
    const actionsMap: { [x: string]: AnimationAction | null } = {
        [folderNameKeys.PROJECTS]: actions["drawer topAction"],
        [folderNameKeys.EXPERIENCE]: actions["drawer botAction"],
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
    
    return { closeAll, clickDrawer, clickFile }
};

export const useHoverEvents = (
    setHover: Dispatch<SetStateAction<boolean>>,
    setOutlineRef: Dispatch<any>,
    refMatrix: any,
    targetMap: any,
) => {
    const hoverTarget = useEventStore((state) => state.hoverTarget);
    const setHoverTarget = useEventStore((state) => state.setHoverTarget);
    
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

    return { onPointerEnter, onPointerLeave }
};
