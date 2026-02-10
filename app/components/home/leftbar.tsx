export default function LeftBar() {
    return (
        <nav aria-label="left-bar" className="flex flex-col justify-between bg-[#333333] w-[58px]">
            <div className="*:py-[15px]">
                {
                    elementsTop.map(({ icon, tooltip }, idx) => {
                        if (idx === 0) {
                            return (
                                <div key={idx} className="flex justify-center relative border-l-[3.5px] border-white hover:cursor-pointer group">
                                    <div className="relative right-[3.5px]">
                                        {icon}
                                    </div>
                                    <span className={styles.tooltip}>{tooltip}</span>
                                </div>
                            );
                        };

                        return (
                            <div key={idx} className={styles.group}>
                                {icon}
                                <span className={styles.tooltip}>{tooltip}</span>
                            </div>
                        );
                    })
                }
            </div>

            <div className="*:px-auto *:py-[15px]">
                {
                    elementsBot.map(({ icon, tooltip }, idx) => (
                        <div key={idx} className={styles.group}>
                            {icon}
                            <span className={styles.tooltip}>{tooltip}</span>
                        </div>
                    ))
                }
            </div>
        </nav>
    );
};

const iconColors = {
    active: "#ffffff",
    inactive: "#ffffff6a",
};

const styles = {
    group: `flex justify-center items-center relative hover:cursor-pointer hover:*:stroke-[${iconColors.active}] group`,
    tooltip: "hidden group-hover:block absolute left-[60px] bg-[#252526] w-min whitespace-nowrap px-2 border-1 border-[#ffffff30] rounded-sm text-[15px] normalText",
};

const elementsTop = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke={iconColors.active} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"/><path d="M13 3v6h6"/></svg>,
        tooltip: 'Explorer',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke={iconColors.inactive} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
        tooltip: 'Search',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke={iconColors.inactive} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>,
        tooltip: 'Run and Debug',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke={iconColors.inactive} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>,
        tooltip: 'Github Actions',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke={iconColors.inactive} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>,
        tooltip: 'Containers',
    },
];

const elementsBot = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="27px" height="27px" viewBox="0 0 24 24" fill="none" stroke={iconColors.inactive} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>,
        tooltip: 'Accounts',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" stroke={iconColors.inactive} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        tooltip: 'Manage',
    },
];
