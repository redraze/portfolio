export default function FileExplorerTopBar() {
    return <nav aria-label="file-explorer-top-bar">
        <div className="flex items-center justify-between h-10">
            <span className="text-[13px] mx-5 text-[#ffffffaa] cursor-default">PORTFOLIO</span>
            <div className="flex mr-3 *:mx-[3px]">
                {
                    elements.map(({ tooltip, icon }, idx) => (
                        <div key={idx} className={styles.group}>
                            <div className="group-hover:bg-[#ffffff20] p-1 rounded-sm">{icon}</div>
                            <span className={styles.tooltip}>{tooltip}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    </nav>
}

const iconStyles = {
    size: 16,
    color: "#ffffffb4",
};

const styles = {
    group: "flex justify-center items-center relative hover:cursor-pointer group",
    tooltip: "hidden group-hover:block absolute top-[27.5px] bg-[#252526] w-min whitespace-nowrap px-2 py-[1px] border-1 border-[#ffffff30] rounded-sm text-[14px] normalText",
};

const elements = [
    {
        tooltip: 'New File...',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={iconStyles.size} height={iconStyles.size} viewBox="0 0 24 24" fill="none" stroke={iconStyles.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M12 18v-6M9 15h6"/></svg>,
    },
    {
        tooltip: 'New Folder...',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={iconStyles.size} height={iconStyles.size} viewBox="0 0 24 24" fill="none" stroke={iconStyles.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>,
    },
    {
        tooltip: 'Refresh Explorer',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={iconStyles.size} height={iconStyles.size} viewBox="0 0 24 24" fill="none" stroke={iconStyles.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>,
    },
    {
        tooltip: 'Collapse Folders in Explorer',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={iconStyles.size} height={iconStyles.size} viewBox="0 0 24 24" fill="none" stroke={iconStyles.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3zM8 12h8"/></svg>,
    },
    {
        tooltip: 'Views and More Actions...',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={iconStyles.size} height={iconStyles.size} viewBox="0 0 24 24" fill="none" stroke={iconStyles.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>,
    },
];
