import type { ReactNode } from "react";

export default function Link({ children, href }: { children?: ReactNode, href?: string }) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            { children }
        </a>
    );
};
