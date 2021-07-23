import SOCIAL from '@salesforce/resourceUrl/SOCIAL';
import IMAGE from '@salesforce/resourceUrl/IMAGE';

export const PROFILE_IMAGE = IMAGE;

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
};

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
                    'Lightning Web Components',
                    'Lightning Design System',
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
};

export const EDUCATION_DATA = {
    ICON: SOCIAL + '/SOCIAL/education.svg',
    HEADING: 'EDUCATION',
    LIST:[
        {
            NAME: 'Computer Science and Econometrics',
            SCHOOL_NAME: 'College Of Economics And Computer Science In Cracow',
            DURATION: 'Sep 2019 - present',
            DEGREE: 'first degree engineering studies',
        },
        {
            SCHOOL_NAME: 'S. Staszic High School No. 1 In Chrzanów',
            DURATION: 'Sep 2016 - May 2019',
        },
    ],
};

export const SKILLS_AND_TOOLS_DATA = {
    HEADING: 'SKILLS & TOOLS',
    SKILLS:[
        {
            HEADING: 'GOOD KNOWLADGE',
            SKILLS_LIST: [
                'Javascript',
                'HTML',
                'CSS',
            ],
        },
        {
            HEADING: 'SOLID BASICS',
            SKILLS_LIST: [
                'React',
                'Typescript',
                'React Redux',
                'React Router',
                'styled-components',
                'Sass',
            ],
        },
        {
            HEADING: 'BASICS',
            SKILLS_LIST: [
                'Git & npm',
                'C#, Entity Framework',
                'Salesforce',
                'Lightning Web Components & Aura Components',
                'Apex',
                'SOQL & SSQL',
            ],
        },
    ]
};

export const LANGUAGES_DATA = {
    HEADING: 'LANGUAGES',
    LIST:[
        {
            NAME: 'Polish',
            LEVEL: 'Native',
        },
        {
            NAME: 'English',
            LEVEL: '(B1/B2)',
        },
    ]
};

export const INTERESTS_DATA = {
    HEADING: 'INTERESTS',
    LIST:[
        'Computer games',
        'Books',
        'Cryptocurrencies',
        'UX',
        'Online marketing',
        'Social media',
    ],
};