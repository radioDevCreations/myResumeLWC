import SOCIAL from '@salesforce/resourceUrl/SOCIAL';
import IMAGE from '@salesforce/resourceUrl/IMAGE';

export const SOCIAL_LINKS = [
    {
        type:'instagram',
        label:"instagram/radekrozmus",
        link:"https://www.instagram.com/radek_rozmus/",
        icon:SOCIAL+'/SOCIAL/twitter.svg'
    },
    {
        type: "github",
        label: "github/radioDevCreations",
        link: "https://github.com/radioDevCreations",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin/radek-rozmus",
        link: "https://www.linkedin.com/in/radek-rozmus/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
];

export const USER_DETAILS = {
        NAME: "Radosław Rozmus",
        ROLE: "Junior Frontend Developer",
        EMAIL: "radekrozmus@gmail.com",
        PHONE: "666 666 666",
    };

export const PROFILE_IMAGE = IMAGE;

export const CAREER_SUMMARY = {
    HEADING: 'ABOUT ME',
    DESCRIPTION: `Hello! My name is Radek and I am
    aspiring Front End Developer. Both
    in college and privately, I spend most
    of my time learning programming.
    Currently I'm focusing on React and
    Typescript.`,
    KEY_POINTS: [
        'Programming passion for 4 years',
        'Reach the mastership of React is my main purpose now',
        'Currentrly working as Web Developer Intern',
        'I am also interested in online marketing and cryptocurrencies',
    ],
}

export const EXPERIENCE_DATA = {
    HEADING: 'WORK EXPERIENCE',
    EXPERIENCES: [
        {
            ROLE: 'Web Developer Intern',
            COMPANY_NAME: 'ACE AGENCY FOR CODERS & EMPLOYERS sp. z o. o.',
            DURATION: 'Jul 2021 - current',
            DESCRIPTION: 'Learning and making commercial projects in Salesforce',
            DESCRIPTION_POINTS: [
                
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [
                    'Javascript',
                    'HTML',
                    'CSS',
                    'Lightning Web Components and Lightning Design System',
                    'Apex',
                    'SOQL',
                ]
            },
        },
        {
            ROLE: 'Sales Assistant',
            COMPANY_NAME: 'Euro-net sp. z o. o.',
            DURATION: 'Feb 2020 - Jan 2021',
            DESCRIPTION: 'Complex customer service',
            DESCRIPTION_POINTS: [
                'Help in choosing the right products',
                'Oversale of services and accessories'
            ],
            TECHNOLOGIES_USED: {
                HEADING: 'Technologies used',
                LIST: [

                ]
            },
        },
    ]
}