import { useEffect } from "react";
import { useContentStore } from "~/lib/contentStore";
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
  const clearContent = useContentStore((state) => state.clearContent);

  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key;
    if (key === 'Escape') clearContent();
  };

  useEffect(() => {
    if (!document) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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
