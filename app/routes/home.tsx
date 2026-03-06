import type { Route } from "./+types/home";
import TopBar from "~/components/home/topbar";
import LeftBar from "~/components/home/leftbar";
import FileExplorer from "~/components/home/fileExplorer";
import BottomBar from "~/components/home/bottomBar";
import DefaultContent from "~/content/defaultContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connor Ross" },
    { name: "description", content: "Portfolio for Connor Ross" },
  ];
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex grow">
          <LeftBar />
          <FileExplorer />
          <DefaultContent />
      </div>
      <BottomBar />
    </main>
  );
};
