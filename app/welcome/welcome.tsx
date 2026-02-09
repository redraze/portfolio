import { useContentStore } from "~/lib/contentStore";
import TopBar from "./topbar";
import LeftBar from "./leftbar";
import FileExplorer from "./fileExplorer";
import MainPaneTopBar from "./mainPaneTopBar";
import BottomBar from "./bottomBar";

export function Welcome() {
  const content = useContentStore((state) => state.content);
  
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex grow">
          <LeftBar />
          <FileExplorer />
          { content && <MainPaneTopBar content={content} /> }
          { content && content.component }
      </div>
      <BottomBar />
    </main>
  );
}
