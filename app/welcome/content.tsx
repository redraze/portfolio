import type { FileType } from "~/lib/fileStructure";
import ContentTopBar from "./contentTopBar";

export default function Content({ icon, filename, component }: FileType) {
    return (
        <ContentTopBar icon={icon} filename={filename}/>
        // component
    );
};
