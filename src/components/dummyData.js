export const multiLevelDummy = [
    {
        id: 1,
        name: 'House',
        img: 'H',
        children: [
            {
                id: 2,
                name: 'Bedroom',
                img: 'B',
                children: [
                    {
                        id: 5,
                        name: 'Bed',
                        img: 'b'
                    },
                    {
                        id: 6,
                        name: 'Desktop',
                        img: 'D',
                        children: [
                            {
                                id: 7,
                                name: 'Lamp',
                                img: 'L'
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'Kitchen',
                img: 'K'
            }
        ],
    },
    {
        id: 4,
        name: 'Street',
        img: 'S'
    }
]

export const workflowStepsDummy = [
    {
        id: 1,
        name: 'Start',
        logo: '',
        disabled: false,
    },
    {
        id: 2,
        name: 'First Step',
        logo: '',
        disabled: false,
    },
    {
        id: 3,
        name: 'Second Step',
        logo: '',
        disabled: false,
    },
    {
        id: 4,
        name: 'Agreement',
        logo: '',
        disabled: false,
    },
    {
        id: 5,
        name: 'Sign',
        logo: '',
        disabled: false,
    },{
        id: 6,
        name: 'Closing',
        logo: '',
        disabled: true,
    },

]