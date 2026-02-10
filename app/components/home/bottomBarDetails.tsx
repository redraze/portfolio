export default function BottomBarDetails({ filename }: { filename: string }) {
    const strings = filename.split('.');
    const extension = strings[strings.length - 1];
    const language = languageMatrix.get(extension);
   
    return language && (
        <>
            {
                elements.map(({ text, tooltip }, idx) => (
                    <div key={idx} className={styles.group}>
                        <span className="text-[13px]">{text}</span>
                        <div className={styles.tooltip}>{tooltip}</div>
                    </div>
                ))
            }
            <div className={styles.group}>
                <span className="text-[13px] items-center flex">{language}</span>
                <div className={styles.tooltip}>Set Language Mode</div>
            </div>
        </>
    );
};

const styles = {
    group: "group cursor-pointer flex grow relative justify-center hover:bg-[#3e87dc] px-[7px] h-full items-center ml-[7.5px]",
    tooltip: "hidden cursor-default group-hover:flex absolute bottom-[25px] bg-[#252526] w-min whitespace-nowrap px-[9px] py-[3px] border-1 border-[#ffffff30] rounded-sm text-[14.5px] normalText",
};

const elements = [
    {
        text: "Ln 1, Col 1",
        tooltip: "Go to Line/Column",
    },
    {
        text: "Spaces: 4",
        tooltip: "Select Indentation",
    },
    {
        text: "UTF-8",
        tooltip: "Select Encoding",
    },
    {
        text: "CRLF",
        tooltip: "Select End of Line Sequence",
    },
];

function BracketsIcon() {
    return (
        <div>
            <span className="text-[16px] mr-2">
                <span className="mr-1">{"{"}</span>
                <span>{"}"}</span>
            </span>
        </div>
    );
};

const languageMatrix = new Map();
languageMatrix.set("tsx", <><BracketsIcon /><span>TypeScript JSX</span></>);
languageMatrix.set("json", <><BracketsIcon /><span>JSON</span></>);
