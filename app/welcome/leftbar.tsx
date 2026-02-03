export default function LeftBar() {
    return (
        <nav aria-label="left-bar">
            {
                elements.map(({ tooltip, icon }) => (
                    <div>
                        <span>{tooltip}</span>
                        {icon}
                    </div>
                ))
            }
        </nav>
    );
};

const elements = [
    {
        tooltip: 'Explorer',
        icon: '',
    },
    {
        tooltip: 'Search',
        icon: '',
    },
    {
        tooltip: 'Run and Debug',
        icon: '',
    },
    {
        tooltip: 'Github Actions',
        icon: '',
    },
    {
        tooltip: 'Containers',
        icon: '',
    },
];
