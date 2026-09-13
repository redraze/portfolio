import type { ReactNode } from "react";

export default function Link({ children, href, onClick }: { children?: ReactNode, href?: string, onClick?: () => any }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" onClick={onClick}>
            { children }
        </a>
    );
};
