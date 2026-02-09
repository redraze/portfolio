const languageMatrix = new Map();
languageMatrix.set("tsx", <span><b>{"{ }"}</b> TypeScript JSX</span>);
languageMatrix.set("json", <span><b>{"{ }"}</b> JSON</span>);

export default function BottomBarDeatils({ filename }: { filename: string }) {
    const strings = filename.split('.')[1];
    const extension = strings[strings.length - 1];
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
