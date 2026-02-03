export default function FileExplorerTopBar() {
    return <nav aria-label="file-explorer-top-bar">
        <div>
            <div>
                <span>PORTFOLIO</span>
            </div>
            <div>
                {
                    elements.map(({tooltip, icon}) => (
                        <div>
                            <span>{tooltip}</span>
                            {icon}
                        </div>
                    ))
                }
            </div>
        </div>
    </nav>
}

const elements = [
    {
        tooltip: 'New File...',
        icon: ''
    },
    {
        tooltip: 'New Folder...',
        icon: ''
    },
    {
        tooltip: 'Refresh Explorer',
        icon: ''
    },
    {
        tooltip: 'Collapse Folders in Explorer',
        icon: ''
    },
    {
        tooltip: 'Views and More Actions...',
        icon: ''
    },
];
