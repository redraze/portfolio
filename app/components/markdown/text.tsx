import type { ReactNode } from "react";

export default function Text({ children, styles }: { children?: ReactNode, styles?: string }) {
    return (
        <div
            className={`pl-3 mb-5 text-l text-[#d0d0d0] border-l-[3.5px] border-[#1e1e1e] hover:border-[#b5b5b5] ${styles}`}
        >
            { children }
        </div>
    );
};
