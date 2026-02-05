import FileExplorerTopBar from "./fileExplorerTopbar";
import Folder from "./folder";
import File from "./file";
import { files, folders } from "~/lib/fileStructure";

export default function FileExplorer() {
    return (
        <nav aria-label="file-explorer" className="bg-[#252526] w-[15vw]">
            <FileExplorerTopBar />

            <div className="pl-3">
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
                    files.map(({icon, filename, component}, idx) => (
                        <File key={idx}
                            icon={icon}
                            filename={filename}
                            component={component}
                        />
                    ))
                }
            </div>
        </nav>
    );
};
