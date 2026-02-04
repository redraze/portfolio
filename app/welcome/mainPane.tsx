import Content from "./content";
import FileExplorer from "./fileexplorer";
import LeftBar from "./leftbar";

export default function MainPane() {
    return <div className="flex grow">
        <LeftBar />
        <FileExplorer />
        <Content content={{ icon: <></>, filename: '' }} />
    </div>
};
