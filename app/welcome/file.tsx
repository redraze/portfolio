import type { FileType } from "~/lib/fileStructure";

type PropsType = FileType & { hidden?: boolean};

export default function File({ icon, filename, component, hidden }: PropsType) {
    return (
        <div className="flex items-center pl-1 pb-[4px]">
            {icon}
            <span className={ hidden ? "hiddenText pl-2" : "normalText pl-2"}>{filename}</span>
        </div>
    );
};
