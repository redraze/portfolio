import { useContentStore } from "~/lib/contentStore";
import { useEventStore } from "~/lib/eventStore";
import type { FileType } from "~/lib/fileStructure";

type PropsType = {
    content: FileType,
    level: number,
    isHidden?: boolean,
};

export default function File({ content, level, isHidden }: PropsType) {
    const currentContent = useContentStore((state) => state.content);
    const setContent = useContentStore((state) => state.setContent);

    const hoverTarget = useEventStore((state) => state.hoverTarget);
    const setHoverTarget = useEventStore((state) => state.setHoverTarget);

    const { icon, filename } = content;
    const selected = currentContent?.filename === filename;
    const styles = level === 0 ? levelZeroStyles : levelOneStyles;

    return (
        <div
            className={ selected ? styles.active : `${styles.inactive} ${hoverTarget === filename && 'bg-[#2a2d2e]'}` }
            onClick={() => setContent(content)}
            onMouseEnter={() => setHoverTarget(filename)}
            onMouseLeave={() => setHoverTarget(null)}
        >
            {icon}
            <span className={ isHidden ? "hiddenText pl-[7px]" : "normalText pl-[7px]"}>{filename}</span>
        </div>
    );
};

const levelZeroStyles = {
    active: "flex items-center pl-[12px] py-[1.5px] bg-[#37373d] cursor-pointer",
    inactive: "flex items-center pl-[12px] py-[1.5px] hover:bg-[#2a2d2e] cursor-pointer",
};

const levelOneStyles = {
    active: "flex items-center pl-[24px] py-[1.5px] bg-[#37373d] cursor-pointer",
    inactive: "flex items-center pl-[24px] py-[1.5px] hover:bg-[#2a2d2e] cursor-pointer",
};
