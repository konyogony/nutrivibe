import { RouteItem, TeamMember } from '@/types';

export const nutrivibeTeam: TeamMember[] = [
    {
        name: 'Ilya Rasputin',
        position: 'Leading developer',
        link: 'https://github.com/konyogony',
        img: 'https://avatars.githubusercontent.com/u/45127834?v=4',
    },
    { name: 'Andrian Shatalin', position: 'Some role' },
    { name: 'Vlad Chernov', position: 'Some role' },
    { name: 'Taisiia Avkhadeeva', position: 'Some role' },
    { name: 'Antonina Lazareva', position: 'Some role' },
];

export const pageRoutes: RouteItem[] = [
    { name: 'Home', description: 'Homepage of the project' },
    { name: 'About', description: 'Learn more about us and our team' },
    { name: 'Impact', description: 'See our impact and goals' },
    { name: 'Market', description: 'Checkout our market research' },
    { name: 'Production', description: 'Understand the proccess of making one' },
];

export const carouselItems = ['Sustainable', 'Healthy', 'Delicious', 'Nutritious', 'Eco-friendly'];
