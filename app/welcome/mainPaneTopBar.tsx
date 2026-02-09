import { useContentStore } from "~/lib/contentStore";
import type { FileType } from "~/lib/fileStructure";
 
export default function MainPaneTopBar({ content }: { content: FileType }) {
    const clearContent = useContentStore((state) => state.clearContent);
    const { path, icon, filename } = content;

    return content && (
        <nav aria-label="top-bar" className="flex flex-col grow">
            {/* top half */}
            <div className="flex justify-between bg-[#252526] h-[36px]">
                {/* file tab */}
                <div className="flex bg-[#1e1e1e] justify-center items-center pl-4 pr-[6px] *:mx-1 relative cursor-pointer">
                    {content.icon}
                    <span className="text-[15px] relative top-[1px]"><i>{content.filename}</i></span>
                    <div onClick={clearContent} className="group relative flex justify-center hover:bg-[#ffffff15] p-[2px] rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        <span className="hidden group-hover:flex absolute w-min whitespace-nowrap top-[22.5px] px-2 py-[2px] border-1 border-[#ffffff30] rounded-sm text-[13.5px] normalText">Close (Ctrl + F4)</span>
                    </div>
                </div>

                {/* right-hand icons */}
                <div className="flex pr-[11px] relative">
                    {
                        elements.map(({ icon, tooltips }, idx) => (
                            <div key={idx} className={styles.group}>
                                <div className="group-hover:bg-[#ffffff15] rounded-sm p-[5px]">{icon}</div>
                                <span className={styles.tooltip}>
                                    {
                                        tooltips.map((tooltip, idx) => (
                                            <span key={idx}>{tooltip}</span>
                                        ))
                                    }
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* bottom half */}
            <div className="flex items-center bg-[#1e1e1e] h-[26px] shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)] shadow-black normalText text-[15px]">
                {
                    path?.map((part, idx) => {
                        if (idx == 0) {
                            return <div className="flex group cursor-pointer pl-[24px]">
                                <span className="group-hover:text-white">{part}</span>
                                <svg className=" stroke-[#ffffff84] group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                            </div>
                        };

                        return (
                            <div className="flex group cursor-pointer">
                                <span className="group-hover:text-white">{part}</span>
                                <svg className=" stroke-[#ffffff84] group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                            </div>
                        );
                    })
                }
                <div className="flex items-center pl-1 *:mr-2 group cursor-pointer">
                    {icon}
                    <span className="group-hover:text-white">{filename}</span>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    iconColor: "#ffffffd2",
    group: "flex justify-center items-center hover:cursor-pointer group mx-[1.5px]",
    tooltip: "hidden group-hover:flex flex-col absolute z-10 right-0 top-[30px] bg-[#252526] w-min whitespace-nowrap px-2 py-[2px] border-1 border-[#ffffff30] rounded-sm text-[14px] normalText",
};

const elements = [
    // {
    //     icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg>,
    //     tooltip: "Open Changes",
    // },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>,
        tooltips: ["Split Editor Right (Ctrl + \\)", "[Alt] Split Editor Down"],
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>,
        tooltips: ["More Actions..."],
    },
];
