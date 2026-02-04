import TopBar from "./topbar";
import MainPane from "./mainpane";
import BottomBar from "./bottombar";

export function Welcome() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <MainPane />
      <BottomBar />
    </main>
  );
}
