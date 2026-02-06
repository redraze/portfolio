import FileExplorerTopBar from "./fileExplorerTopbar";
import Folder from "./folder";
import File from "./file";
import { files, folders } from "~/lib/fileStructure";

export default function FileExplorer() {
    return (
        <nav aria-label="file-explorer" className="bg-[#252526] w-[350px]">
            <FileExplorerTopBar />

            <div>
                {
                    folders.map(({ foldername, files }, idx) => (
                        <Folder 
                            key={idx}
                            foldername={foldername}
                            files={files}
                        />
                    ))
                }

                {
                    files.map((content, idx) => (
                        <File 
                            key={idx}
                            content={content}
                            level={0}
                        />
                    ))
                }
            </div>
        </nav>
    );
};
