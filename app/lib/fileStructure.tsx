export const folders = [
    // {        
    //     foldername: '.games',
    //     files: [
    //         {
    //             filename: 'tetris',
    //             icon: <></>,
    //             component: <></>,
    //         },
    //         {
    //             filename: 'snake',
    //             icon: <></>,
    //             component: <></>,
    //         },
    //         {
    //             filename: 'doom',
    //             icon: <></>,
    //             component: <></>,
    //         },
    //     ],
    // },
    {
        foldername: 'projects',
        files: [
            {
                filename: 'project_1',
                icon: <></>,
                component: <></>,
            },
            {
                filename: 'project_2',
                icon: <></>,
                component: <></>,
            },
        ],
    },
    {
        foldername: 'experience',
        files: [
            {
                filename: 'experience_1',
                icon: <></>,
                component: <></>,
            },
            {
                filename: 'experience_2',
                icon: <></>,
                component: <></>,
            },
        ],
    },
];

export const files = [
    {
        icon: <></>,
        filename: 'ABOUTME.md',
        component: <></>,
    },
];

export type FileType = typeof files[0];
export type FolderType = typeof folders[0];
