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
import { SiBlender, SiNextdotjs, SiShadcnui, SiTailwindcss, SiTypescript, SiVercel } from '@vertisanpro/react-icons/si';
import { TbOutlineBrandFramerMotion } from '@vertisanpro/react-icons/tb';

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

export const cricketsPrice = 0.82;
export const oatmealPrice = 0.25;
export const sweetenersPrice = 0.1;
export const otherIngredientsPrice = 0.25;
export const sellingPrice = 2.3;
export const profitPerBar = 1.23;
export const profitMargin = parseFloat(((profitPerBar / sellingPrice) * 100).toFixed(2));

export const contactEmail = 'email reducted';

export const typeSpeed = 150;
export const deleteSpeed = 80;
export const delaySpeed = 3000;

export const githubRepo = 'https://github.com/konyogony/nutrivibe';

export const co2rate = 0.9;
export const start2024 = 1704067200;

export const technologies = [
    { name: 'Next.js', url: 'https://nextjs.org/', icon: SiNextdotjs },
    { name: 'Typescript', url: 'https://www.typescriptlang.org/', icon: SiTypescript },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon: SiTailwindcss },
    { name: 'Shadcn', url: 'https://shadcn.com/', icon: SiShadcnui },
    { name: 'Aceternity UI', url: 'https://ui.aceternity.com/', icon: SiVercel },
    { name: 'Motion', url: 'https://motion.dev/', icon: TbOutlineBrandFramerMotion },
    { name: 'Blender', url: 'https://www.blender.org/', icon: SiBlender },
];
