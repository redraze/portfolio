import type { FolderType } from "~/lib/fileStructure";
import File from "./file";

export default function Folder({ foldername, files }: FolderType) {
    return (
        <div>
            <div>
                {/* toggleable dropdown icon */}
                <span>{foldername}</span>
            </div>

            <div>
                {
                    files.map(({ icon, filename, component }, idx) => (
                        <File key={idx}
                            icon={icon}
                            filename={filename}
                            component={component}
                        />
                    ))
                }
            </div>
        </div>
    );
};
