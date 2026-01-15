import profileImg from "../assets/profile.jpg";
import abProfileImg from "../assets/Ab.jpeg";
import aqProfileImg from "../assets/aqImage.png";
import umProfileImg from "../assets/UmairResumeImage.jpg";

export const services = [
    {
        title: 'Web development',
        description:
            'Product-grade web applications built with modern React, TypeScript, and performant APIs.',
        icon: '⌘',
        points: ['Marketing & landing sites', 'Product dashboards & admin tools', 'Design-to-code delivery']
    },
    {
        title: 'UI & UX design',
        description:
            'Interface design that feels considered, opinionated, and intuitive across every state.',
        icon: '◆',
        points: ['User journeys & flows', 'Design systems & component libraries', 'Interactive prototypes']
    },
    {
        title: 'Brand & visuals',
        description:
            'Identity, art direction, and visuals that give your product a distinct point of view.',
        icon: '◎',
        points: ['Naming & visual identity', 'Marketing campaigns & key visuals', 'Pitch decks & collateral']
    },
    {
        title: 'Product design in Figma',
        description:
            'End-to-end product exploration in Figma, from early concepts to production-ready specs.',
        icon: '✺',
        points: ['Workshop & discovery', 'Wireframes & design sprints', 'Handoff-ready design specs']
    }
];

export const processSteps = [
    {
        title: 'Discovery',
        description:
            'We align on your product vision, success metrics, constraints, and what "excellent" looks like.'
    },
    {
        title: 'Design',
        description:
            'We translate insight into interfaces, flows, and visual systems that are easy to ship and scale.'
    },
    {
        title: 'Development',
        description:
            'Our engineers pair closely with design to build fast, accessible, and robust frontends.'
    },
    {
        title: 'Testing',
        description:
            'We validate flows, states, and edge cases to ensure the experience holds up in real use.'
    },
    {
        title: 'Launch',
        description:
            'We help you ship confidently, monitor performance, and plan the next iteration of the product.'
    }
];

export const team = [
    {
        name: 'Zunair Sarwar',
        role: 'Software Engineer · AI Applications',
        description:
            'Builds scalable backend systems, writes reliable tests, and explores practical AI to improve real-world workflows.',
        avatar: profileImg,
        socials: [
            {type: 'linkedin', href: 'https://www.linkedin.com/in/zunair-sarwar-401323221/'}
        ]
    },
    {
        name: 'Abdullah Rashid',
        role: 'UI/UX Designer · AI Applications',
        description:
            'Designs intuitive user interfaces and creates user-centered experiences that turn complex ideas into clean functional designs that scale across products.',
        avatar: abProfileImg,
        socials: [
            {type: 'linkedin', href: 'https://www.linkedin.com/in/abdullah-rashid-1b4028223/'}
        ]
    },
    {
        name: 'Abdul Qudoos',
        role: 'Creative Designer',
        description:
            'Creates engaging visual experiences through graphic design, UI/UX, motion graphics, 3D modeling, video editing, and product shoots.',
        avatar: aqProfileImg,
        socials: [
            {type: 'linkedin', href: '#'}
        ]
    }, {
        name: 'Umair Sarwar',
        role: 'Graphic Designer',
        description:
            'I transform complex ideas into visually compelling designs that engage audiences and create meaningful connections.',
        avatar: umProfileImg,
        socials: [
            {type: 'linkedin', href: '#'}
        ]
    },
    {
        name: 'Daniel Reyes',
        role: 'Full‑Stack Developer',
        description:
            'Builds resilient backend services and clean APIs that keep the product fast and maintainable.',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        socials: [
            {type: 'github', href: '#'},
            {type: 'linkedin', href: '#'}
        ]
    },
    {
        name: 'Mara Iqbal',
        role: 'Frontend Developer',
        description:
            'Specializes in motion, micro‑interactions, and design‑system driven React interfaces.',
        avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
        socials: [
            {type: 'github', href: '#'},
            {type: 'linkedin', href: '#'}
        ]
    },
    {
        name: 'Jonas Keller',
        role: 'UI/UX Designer',
        description:
            'Crafts product journeys that feel obvious in hindsight and joyful in day‑to‑day use.',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
        socials: [
            {type: 'dribbble', href: '#'},
            {type: 'linkedin', href: '#'}
        ]
    },
    {
        name: 'Amina Duarte',
        role: 'Product Designer · Figma',
        description:
            'From concept boards to production files, she keeps Figma as the single source of truth.',
        avatar: 'https://images.pexels.com/photos/1181595/pexels-photo-1181595.jpeg?auto=compress&cs=tinysrgb&w=400',
        socials: [
            {type: 'dribbble', href: '#'},
            {type: 'linkedin', href: '#'}
        ]
    },
    {
        name: 'Leo Marin',
        role: 'Brand & Graphic Designer',
        description:
            'Owns visual identity, campaigns, and decks across Adobe tools so everything feels on‑brand.',
        avatar: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=400',
        socials: [
            {type: 'dribbble', href: '#'},
            {type: 'linkedin', href: '#'}
        ]
    }
];

export const portfolio = [
    {
        title: 'Latitude OS – Founder analytics dashboard',
        description:
            'A premium SaaS dashboard for early‑stage founders to track product, revenue, and runway in one view.',
        image:
            'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion']
    },
    {
        title: 'Northline – Product marketing site',
        description:
            'Narrative‑driven marketing site for a B2B product, with interactive product storytelling and rich visuals.',
        image:
            'https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Next.js', 'SEO', 'CMS', 'Design system']
    },
    {
        title: 'Brightside – Mobile banking brand system',
        description:
            'Visual identity, app UI, and launch campaign for a new consumer banking startup.',
        image:
            'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Branding', 'UI Kit', 'Design tokens', 'Adobe Suite']
    }
];
