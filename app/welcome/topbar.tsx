export default function TopBar() {
    return (
        <nav aria-label="top-bar" className="flex bg-[#3c3c3c] justify-between h-[3.6vh] min-h-[40px]">
            {/* left-hand dropdown menus */}
            <div className="w-0 flex items-center">
                <div className="flex items-center">
                    <div className="flex items-center *:mx-[9px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3da4f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    {
                        elements.map((e, idx) => (
                            <div key={idx} className="text-[15px] text-[#ffffffbf] px-2 mx-[.8px]">{e}</div>
                        ))
                    }    
                </div>
            </div>

            {/* center nav icons and search bar */}
            <div className="flex items-center py-[7px] w-[100%] justify-center">
                <div className="flex items-center *:mx-[4px] mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.arrowsColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.arrowsColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                </div>
                <div className="flex items-center h-full *:mx-1 px-[15%] mx-2 bg-[#464646] border-[1.5px] border-solid border-[#ffffff25] rounded-md">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffffbb" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                    <span className="text-[#ffffffbb] text-[14px]">Connor Ross</span>
                </div>
            </div>

            {/* right-hand icons */}
            <div className="w-0 flex relative">
                <div className="flex items-center absolute right-[-100%] h-[3.5vh] min-h-[40px]">
                    <div className="flex mr-[2px] *:mx-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M15 21V9"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15h18"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18"/></svg>
                    </div>

                    <div className="flex items-center *:mx-3.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                </div>
            </div>
        </nav>
    );
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

const styles = {
    iconColor: "#ffffffb1",
    arrowsColor: "#ffffff68",
};
