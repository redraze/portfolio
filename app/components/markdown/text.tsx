import type { ReactNode } from "react";

export default function Text({ children }: { children?: ReactNode }) {
    return (
        <div
            className="mb-3 mt-8 pl-3 text-l text-[#d0d0d0] border-l-[3.5px] border-[#1e1e1e] hover:border-[#b5b5b5]"
        >
            { children }
        </div>
    );
};
