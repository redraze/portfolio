import TopBar from "./topbar";
import MainPane from "./mainPane";
import BottomBar from "./bottomBar";

export function Welcome() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <MainPane />
      <BottomBar />
    </main>
  );
}
