import { useContentStore } from "~/lib/contentStore";

export default function TopBar() {
    const content = useContentStore((state) => state.content);

    return (
        <nav aria-label="top-bar" className="flex bg-[#3c3c3c] justify-between h-[40px]">
            {/* left-hand dropdown menus */}
            <div className="w-0 flex items-center">
                <div className="flex items-center z-1">
                    <div className="flex items-center *:mx-[9px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3da4f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    {
                        elements.map((e, idx) => (
                            <div key={idx} className="text-[15px] text-[#ffffffbf] hover:bg-[#464646] px-[9px] py-[2px] rounded-md cursor-default">
                                {e}
                            </div>
                        ))
                    }    
                </div>
            </div>

            {/* center nav icons and search bar */}
            <div className="flex items-center py-[6px] w-[100%] justify-center">
                <div className="flex items-center *:mx-[4px] mx-1">
                    <div className="group flex justify-center items-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.arrowsColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                        <span className="hidden group-hover:block absolute z-10 top-[25px] bg-[#252526] w-min whitespace-nowrap px-2 py-[2px] border-1 border-[#ffffff30] rounded-sm text-[14px] normalText">
                            Go Back (Alt + LeftArrow)
                        </span>
                    </div>
                    <div className="group flex justify-center items-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.arrowsColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                        <span className="hidden group-hover:block absolute z-10 top-[25px] bg-[#252526] w-min whitespace-nowrap px-2 py-[2px] border-1 border-[#ffffff30] rounded-sm text-[14px] normalText">
                            Go Forward (Alt + RightArrow)
                        </span>
                    </div>
                </div>
                <div className="flex group justify-center relative items-center h-full *:mx-1 px-[15%] mx-2 bg-[#464646] hover:bg-[#4d4d4d] border-[1.5px] border-solid border-[#ffffff25] hover:border-[#ffffff40] rounded-sm cursor-pointer">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffffbb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                    <span className="text-[#ffffffbb] text-[14px]">Connor Ross</span>
                    <span className="hidden group-hover:block absolute z-10 top-[30px] bg-[#252526] w-min whitespace-nowrap px-2 py-[2px] border-1 border-[#ffffff30] rounded-sm text-[14px] normalText">
                        Search Connor Ross ⸺ {content?.filename && `${content?.filename} - `} Connor Ross - Visual Studio Code
                    </span>
                </div>
            </div>

            {/* right-hand icons */}
            <div className="w-0 flex relative">
                <div className="flex items-center absolute right-[-100%] h-[40px]">
                    <div className="flex mr-[3px] *:hover:cursor-pointer">
                        {
                            rightIcons.map(({ icon, tooltip }, idx) => (
                                <div key={idx} className={styles.group}>
                                    <div className="group-hover:bg-[#ffffff12] rounded-sm p-[2px]">{icon}</div>
                                    <span className={styles.tooltip}>{tooltip}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex *:flex h-full *:h-full *:items-center *:hover:cursor-pointer *:transition-colors">
                        <div className="px-[14px] hover:bg-[#ffffff20]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                        <div className="px-[16.5px] hover:bg-[#ffffff20]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                        </div>
                        <div className="px-[13.5px] hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    iconColor: "#ffffffb1",
    arrowsColor: "#ffffff68",
    group: "flex justify-center items-center relative hover:cursor-pointer group mx-[2.5px]",
    tooltip: "hidden group-hover:block absolute z-10 top-[30px] bg-[#252526] w-min whitespace-nowrap px-2 py-[2px] border-1 border-[#ffffff30] rounded-sm text-[14px] normalText",
};

const elements = [
    'File',
    'Edit',
    'Selection',
    'View',
    'Go',
    'Run',
    'Terminal',
    'Help',
];

const rightIcons = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M15 21V9"/></svg>,
        tooltip: "Customize Layout...",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>,
        tooltip: "Toggle Primary Side Bar (Ctrl + B)",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15h18"/></svg>,
        tooltip: " Toggle Panel (Ctrl + J)",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18"/></svg>,
        tooltip: "Toggle Secondary Side Bar  (Ctrl + Alt + B)",
    },
];
