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
    { name: 'Andrian Shatalin', position: 'Some role' },
    { name: 'Vlad Chernov', position: 'Some role' },
    { name: 'Taisiia Avkhadeeva', position: 'Some role' },
    { name: 'Antonina Lazareva', position: 'Some role' },
];

export const headings: Heading[] = [
    { name: 'Home', description: 'Welcome to Nutrivibe', icon: FiHome },
    { name: 'Team', description: 'Meet our team', icon: FiUsers },
    { name: 'Inspiration', description: 'Our inspiration', icon: LuLightbulb },
    { name: 'Product', description: 'Our product', icon: FiPackage },
    { name: 'Perception', description: 'Customer perception', icon: FiEye },
    { name: 'Finance', description: 'Financial overview', icon: FiDollarSign },
    { name: 'Growth', description: 'Growth metrics', icon: FiTrendingUp },
    { name: 'Technology', description: 'Our technology', icon: FiCpu },
    { name: 'Contact', description: 'Get in touch', icon: FiMail },
];

export const carouselItems = ['Sustainable', 'Healthy', 'Delicious', 'Nutritious', 'Eco-friendly'];
