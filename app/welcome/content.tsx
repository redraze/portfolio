export default function Content({ icon, filename }: any) {
    return (
        <nav aria-label="top-bar" className="flex justify-between bg-[#252526] w-[100%] h-[3.5vh]">
            <div className="flex bg-[#1e1e1e] justify-center items-center pl-4 pr-[6px] *:mx-1 relative">
                {icon}
                <span className="text-[15px] relative top-[1px]"><i>{filename}</i></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="1vw" viewBox="0 0 24 24" fill="none" stroke="#ffffffd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>

            <div className="flex *:mx-[6px] mr-[16px] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffffd2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffffd2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffffd2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </div>
        </nav>
    );
};
