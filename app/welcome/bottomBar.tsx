export default function BottomBar() {
    return (
        <nav aria-label="bottom-bar" className="flex justify-between bg-[#2b74c9] h-[26px] items-center ">
            {/* left-hand icons */}
            <div className="flex">
                <div className="flex items-center mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor}  strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6v6M3 21l6.1-6.1M20 10h-6V4M21 3l-6.1 6.1"/></svg>
                </div>
                <div className="flex items-center mx-3">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    </div>
                    <span className={`mx-[5px] text-[${styles.fontSize}]`}>main*</span>
                    <div className="flex items-center mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"/><path d="M16 16l-4-4-4 4"/></svg>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </div>
                    <span className={`ml-1 text-[${styles.fontSize}]`}>0</span>
                    <div className="flex items-center ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <span className={`ml-1 text-[${styles.fontSize}]`}>0</span>
                </div>
            </div>

            {/* right-hand icons */}
            <div className={`flex *:text-[${styles.fontSize}] *:mx-[7.5px]`}>
                <span>Ln 11, Col 40</span>
                <span>Spaces: 4</span>
                <span>UTF-8</span>
                <span>CRLF</span>
                <span><b>{"{ }"}</b> TypeScript JSX</span>
                <div className="flex">
                    <div className="flex items-center mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
                    </div>
                    <span>Go Live</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={styles.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                </div>
            </div>
        </nav>
    )
}

const styles = {
    iconColor: "#ffffff",
    fontSize: "14px",
};
