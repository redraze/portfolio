import type { ReactNode } from "react";

type PropsType = {
    children?: ReactNode,
    size: 'small' | 'medium' | 'large',
};

const textSizeMap = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl',
};

export default function Header({ children, size }: PropsType) {
    const textSize = textSizeMap[size];

    return (
        <div className="mt-8 border-l-[3.5px] border-l-[#1e1e1e] hover:border-l-[#b5b5b5]">
            <div className={`mx-3 pb-2 pt-1 ${textSize} font-semibold text-[#d0d0d0] border-b-1 border-b-[#414141]`}>
                { children }
            </div>
        </div>
    );
};
