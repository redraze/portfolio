import { type ReactNode } from "react";
import { useTooltipStore } from "~/lib/tooltipStore";

export default function Tooltip({ children, tooltip }: { children?: ReactNode, tooltip: ReactNode }) {
    const setTooltip = useTooltipStore((state) => state.setTooltip);
    const clearTooltip = useTooltipStore((state) => state.clearTooltip);

    const onMouseEnter = () => setTooltip(tooltip);
    const onMouseLeave = () => clearTooltip();

    return (
        <>
            <span> </span>
            <div
                className="cursor-pointer inline flex flex-row underline *:ml-[1px] py-1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                { children }
                <svg
                    className="inline align-top"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={"#1e1e1e"}
                    stroke={"#c1c1c1"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </>
    );
};
