import type { ReactNode } from "react";

type PropsType = {
    children?: ReactNode,
    size: 'small' | 'medium' | 'large',
    styles?: string,
};

const textSizeMap = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl',
};

export default function Header({ children, size, styles }: PropsType) {
    const textSize = textSizeMap[size];
    const bottomBorder = size !== 'small' && 'border-b-1 border-b-[#414141]';
    const bottomMargin = size !== 'small' && 'my-8';
    const borderLeft = children && 'hover:border-l-[#b5b5b5]';

    return (
        <div className={`${bottomMargin} border-l-[3.5px] border-l-[#1e1e1e] ${borderLeft} ${styles}`}>
            <div className={`mx-3 pb-2 pt-1 ${textSize} font-semibold text-[#d0d0d0] ${bottomBorder}`}>
                { children }
            </div>
        </div>
    );
};
