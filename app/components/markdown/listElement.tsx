import type { ReactNode } from "react";

type PropsType = {
    children?: ReactNode,
    onClick?: () => void,
};

export default function ListElement({ children, onClick }: PropsType) {
    const style = onClick
        ? "ml-6 mb-3 text-l text-[#308DE8] w-min-content hover:cursor-pointer hover:underline"
        : "ml-6 mb-3 text-l text-[#d0d0d0] w-min-content";

    return (
        <li className="ml-6 text-l text-[#d0d0d0] mb-3">
            <div
                className={style}
                onClick={onClick}
            >
                { children }
            </div>
        </li>
    );
};
