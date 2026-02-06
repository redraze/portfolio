import { useContentStore } from "~/lib/contentStore";
import type { FileType } from "~/lib/fileStructure";

type PropsType = {
    content: FileType,
    hidden?: boolean,
};

export default function File({ content, hidden }: PropsType) {
    const currentContent = useContentStore((state) => state.content);
    const setContent = useContentStore((state) => state.setContent);

    const { icon, filename } = content;
    const selected = currentContent?.filename === filename;

    return (
        <div
            className={ selected ? styles.active : styles.inactive }
            onClick={() => setContent(content)}
        >
            {icon}
            <span className={ hidden ? "hiddenText pl-2" : "normalText pl-2"}>{filename}</span>
        </div>
    );
};

const styles = {
    active: "flex items-center pl-1 pb-[4px] bg-[#37373d]",
    inactive: "flex items-center pl-1 pb-[4px]",
};
