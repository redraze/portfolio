import type { FileType } from "~/lib/fileStructure";

const languageMatrix = new Map();
languageMatrix.set("tsx", <span><b>{"{ }"}</b> TypeScript JSX</span>);
languageMatrix.set("json", <span><b>{"{ }"}</b> JSON</span>);

export default function BottomBarDeatils({ content }: { content: FileType }) {
    const { filename } = content;
    const extension = filename.split('.')[1];
    const language = languageMatrix.get(extension);
   
    return language && (
        <>
            <span>Ln 1, Col 1</span>
            <span>Spaces: 4</span>
            <span>UTF-8</span>
            <span>CRLF</span>
            {language}
        </>
    );
};
