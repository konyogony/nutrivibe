import { Heading, TeamMember } from '@/types';
import {
    FiCpu,
    FiDollarSign,
    FiEye,
    FiHome,
    FiMail,
    FiPackage,
    FiTrendingUp,
    FiUsers,
} from '@vertisanpro/react-icons/fi';
import { LuLightbulb } from '@vertisanpro/react-icons/lu';

export const nutrivibeTeam: TeamMember[] = [
    {
        name: 'Ilya Rasputin',
        position: 'Lead developer',
        link: 'https://github.com/konyogony',
        img: 'https://avatars.githubusercontent.com/u/45127834?v=4',
    },
    { name: 'Andrian Shatalin', position: 'Marketing director' },
    { name: 'Vlad Chernov', position: 'Production manager' },
    { name: 'Taisiia Avkhadeeva', position: 'Company director' },
    { name: 'Antonina Lazareva', position: 'Slides manager' },
];

export const headings: Heading[] = [
    { name: 'home', description: 'Welcome to Nutrivibe', icon: FiHome },
    { name: 'team', description: 'Meet our team', icon: FiUsers },
    { name: 'inspiration', description: 'Our inspiration', icon: LuLightbulb },
    { name: 'product', description: 'Our product', icon: FiPackage },
    { name: 'perception', description: 'Customer perception', icon: FiEye },
    { name: 'finance', description: 'Financial overview', icon: FiDollarSign },
    { name: 'growth', description: 'Growth metrics', icon: FiTrendingUp },
    { name: 'technology', description: 'Our technology', icon: FiCpu },
    { name: 'contact', description: 'Get in touch', icon: FiMail },
];

export const carouselItems = ['Sustainable', 'Healthy', 'Delicious', 'Nutritious', 'Eco-friendly'];

export const wordsHero = ['better', 'healthier', 'greener', 'ethical', 'sustainable', 'responsible'];

export const shortGoals = [
    'Raise awareness',
    'Introduce an alternative of protein bars',
    'Develop a sustainable production process',
];

export const longGoals = ['Reduce animal farming', 'Promote sustainable living', 'Expand product range'];
