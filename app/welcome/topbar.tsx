export default function TopBar() {
    return (
        <nav aria-label="top-bar">
            {/* IDE icon */}

            <div>
                {
                    elements.map(e => (
                        <div>{e}</div>
                    ))
                }    
            </div>

            {/* back and forward button */}

            <div>
                {/* search icon */}
                Connor Ross
            </div>

            <div>
                {/* various layout icons */}
            </div>

            <div>
                {/* minimize, restore, and close icons */}
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
