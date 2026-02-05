import FileExplorerTopBar from "./fileExplorerTopbar";

export default function FileExplorer() {
    return <nav aria-label="file-explorer" className='bg-[#252526]'>
        <FileExplorerTopBar />

        <div>
            {
                folders.map(({name, files}, idx) => (
                    <div key={idx}>
                        <div>
                            {/* toggleable dropdown icon */}
                            <span>{name}</span>
                        </div>

                        <div>
                            {
                                files.map(({icon, name, component}, idx) => (
                                    <div key={idx}>
                                        {icon}
                                        <span>{name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

            {
                files.map(({icon, name, component}, idx) => (
                    <div key={idx}>
                        {icon}
                        <span>{name}</span>
                    </div>
                ))
            }
        </div>
    </nav>
}

const folders = [
    // {        
    //     name: '.games',
    //     files: [
    //         {
    //             name: 'tetris',
    //             icon: '',
    //             component: <></>,
    //         },
    //         {
    //             name: 'snake',
    //             icon: '',
    //             component: <></>,
    //         },
    //         {
    //             name: 'doom',
    //             icon: '',
    //             component: <></>,
    //         },
    //     ],
    // },
    {
        name: 'projects',
        files: [
            {
                name: 'project_1',
                icon: '',
                component: <></>,
            },
            {
                name: 'project_2',
                icon: '',
                component: <></>,
            },
        ],
    },
    {
        name: 'experience',
        files: [
            {
                name: 'experience_1',
                icon: '',
                component: <></>,
            },
            {
                name: 'experience_2',
                icon: '',
                component: <></>,
            },
        ],
    },
];

const files = [
    {
        icon: '',
        name: 'ABOUTME.md',
        component: <></>,
    },
];
