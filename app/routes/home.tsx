import type { Route } from "./+types/home";
import { useContentStore } from "~/lib/contentStore";
import TopBar from "~/components/home/topbar";
import LeftBar from "~/components/home/leftbar";
import FileExplorer from "~/components/home/fileExplorer";
import MainPaneTopBar from "~/components/home/mainPaneTopBar";
import BottomBar from "~/components/home/bottomBar";
import DefaultContent from "~/content/defaultContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connor Ross" },
    { name: "description", content: "Portfolio for Connor Ross" },
  ];
};

export default function Home() {
  const content = useContentStore((state) => state.content);
  
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex grow">
          <LeftBar />
          <FileExplorer />
          { content && <MainPaneTopBar content={content} /> }
          { content ? content.component : <DefaultContent /> }
      </div>
      <BottomBar />
    </main>
  );
};
