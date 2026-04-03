import type { ReactNode } from "react";
import Divider from "./divider";

export default function SmallHeader({ children }: { children?: ReactNode }) {
    return (
        <>
            <div className="text-2xl font-semibold text-[#d0d0d0] mb-3 mt-8">{ children }</div>
            <Divider />
        </>
    );
};
