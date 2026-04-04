import type { ReactNode } from "react";

type PropsType = {
    children?: ReactNode,
    onClick?: () => void,
};

export default function ListElement({ children, onClick }: PropsType) {
    const spanStyle = onClick
        ? "text-l text-[#308DE8] hover:cursor-pointer hover:underline"
        : "text-l text-[#d0d0d0]";

    return (
        <div className="ml-6 border-l-[3.5px] border-[#1e1e1e] hover:border-[#b5b5b5]">
            <li className="ml-6">
                <span
                    className={spanStyle}
                    onClick={onClick}
                    >
                    { children }
                </span>
            </li>
        </div>
    );
};
