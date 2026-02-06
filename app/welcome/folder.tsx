import { useState } from "react";
import File from "./file";
import type { FolderType } from "~/lib/fileStructure";

export default function Folder({ foldername, files }: FolderType) {
    const isHidden = foldername[0] === ".";

    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);

    return (
        <div className="flex flex-col">
            <div onClick={toggleActive} className="flex items-center py-[2px] pl-3">
                {
                    active
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffffd0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffffd0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                }
                <span className={isHidden ? "hiddenText pl-1": "normalText pl-1"}>{foldername}</span>
            </div>

            <div className={active ? "" : "hidden"}>
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
