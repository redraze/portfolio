import type { FileType } from "~/lib/fileStructure";

export default function File({ icon, filename, component }: FileType) {
    return (
        <div>
            {icon}
            <span>{filename}</span>
        </div>
    );
};
