import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Connor Ross" },
    { name: "description", content: "Portfolio for Connor Ross" },
  ];
}

export default function Home() {
  return <Welcome />;
}
