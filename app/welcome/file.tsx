import { useContentStore } from "~/lib/contentStore";
import type { FileType } from "~/lib/fileStructure";

type PropsType = {
    content: FileType,
    level: number,
    isHidden?: boolean,
};

export default function File({ content, level, isHidden }: PropsType) {
    const currentContent = useContentStore((state) => state.content);
    const setContent = useContentStore((state) => state.setContent);

    const { icon, filename } = content;
    const selected = currentContent?.filename === filename;
    const styles = level === 0 ? levelZeroStyles : levelOneStyles;

    return (
        <div
            className={ selected ? styles.active : styles.inactive }
            onClick={() => setContent(content)}
        >
            {icon}
            <span className={ isHidden ? "hiddenText pl-[7px]" : "normalText pl-[7px]"}>{filename}</span>
        </div>
    );
};

const levelZeroStyles = {
    active: "flex items-center pl-[12px] py-[2px] bg-[#37373d]",
    inactive: "flex items-center pl-[12px] py-[2px]",
};

const levelOneStyles = {
    active: "flex items-center pl-[24px] py-[2px] bg-[#37373d]",
    inactive: "flex items-center pl-[24px] py-[2px]",
};
