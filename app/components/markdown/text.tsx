import type { ReactNode } from "react";

export default function Text({ children }: { children?: ReactNode }) {
    return (
        <div className="text-l text-[#d0d0d0] mb-3" >{ children }</div>
    );
};
