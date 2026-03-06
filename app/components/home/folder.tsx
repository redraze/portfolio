import { useFolderStore } from "~/lib/folderStore";
import File from "./file";
import type { FolderType } from "~/lib/fileStructure";
import { useEventStore } from "~/lib/eventStore";

export default function Folder({ foldername, files }: FolderType) {
    const folderState = useFolderStore((state) => state.folderState);
    const toggleFolder = useFolderStore((state) => state.toggleFolder);

    const hoverTarget = useEventStore((state) => state.hoverTarget);
    const setHoverTarget = useEventStore((state) => state.setHoverTarget);
    
    const isHidden = foldername[0] === ".";

    return (
        <div className="flex flex-col">
            <div
                className={`flex items-center py-[1.5px] pl-3 hover:bg-[#2a2d2e] hover:cursor-pointer ${hoverTarget === foldername && 'bg-[#2a2d2e]'}`}
                onClick={() => toggleFolder(foldername)}
                onMouseEnter={() => setHoverTarget(foldername)}
                onMouseLeave={() => setHoverTarget(null)}
            >
                {
                    folderState[foldername]
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffffd0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffffd0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                }
                <span className={isHidden ? "hiddenText pl-1": "normalText pl-1"}>{foldername}</span>
            </div>

            <div className={folderState[foldername] ? "" : "hidden"}>
                {
                    files.map((content, idx) => (
                        <File 
                            key={idx}
                            content={content}
                            level={1}
                            isHidden={isHidden}
                        />
                    ))
                }
            </div>
        </div>
    );
};
