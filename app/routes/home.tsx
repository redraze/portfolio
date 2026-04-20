import { useEffect, type ReactNode } from "react";
import { useContentStore } from "~/lib/contentStore";
import type { Route } from "./+types/home";
import TopBar from "~/components/home/topbar";
import LeftBar from "~/components/home/leftbar";
import FileExplorer from "~/components/home/fileExplorer";
import BottomBar from "~/components/home/bottomBar";
import DefaultContent from "~/content/defaultContent";
import { useTooltipStore } from "~/lib/tooltipStore";
import { useMousePosition } from "~/lib/customHooks";

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
    if (key === "Escape") {
      e.preventDefault();
      clearContent();
    };
  };

  useEffect(() => {
    if (!document) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <TooltipProvider>
      <main className="flex flex-col min-h-screen">
        <TopBar />
        <div className="flex grow">
            <LeftBar />
            <FileExplorer />
            <DefaultContent />
        </div>
        <BottomBar />
      </main>
    </TooltipProvider>
  );
};

function TooltipProvider({ children }: { children: ReactNode }) {
  const { x, y } = useMousePosition();
  const tooltip = useTooltipStore((state) => state.tooltip);

  return (
    <div className="relative overflow-clip">
      { children }
      { tooltip &&
        <div
          style={{ top: y, left: x }}
          className="absolute px-[9px] py-[3px] border-1 border-[#1e1e1e] bg-[#1e1e1e] rounded-sm"
          >
          { tooltip }
        </div>
      }
    </div>
  )
};
