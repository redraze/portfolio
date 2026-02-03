import Content from "./content";
import FileExplorer from "./fileexplorer";
import LeftBar from "./leftbar";

export default function MainPane() {
    return <>
        <LeftBar />
        <FileExplorer />
        <Content />
    </>
}
