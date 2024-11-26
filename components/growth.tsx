import Globe from '@/components/ui/globe';
import { Timeline } from '@/components/ui/timeline';
import { headings } from '@/config';
import { motion } from 'motion/react';

interface GrowthProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

const data = [
    {
        title: 'Short term',
        content: (
            <div className='mt-2 flex flex-col text-left text-xl text-primary/80'>
                Product development & Market research to determine trends and consumer behavior.
                <ul className='list-disc pl-5'>
                    <li>Identify key market segments</li>
                    <li>Develop a minimum viable product (MVP)</li>
                    <li>Conduct user testing and gather feedback</li>
                    <li>Refine product features based on research</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Website Launch',
        content: (
            <div className='mt-2 flex flex-col text-left text-xl text-primary/80'>
                Information people about us and gives a platform to work on.
                <ul className='list-disc pl-5'>
                    <li>✅ Build the website</li>
                    <li>⏳ Promote our website and the idea behind it </li>
                    <li>⏳ Collect feedback and improve the website</li>
                    <li>⏳ Make a marketplace on it</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Medium Term',
        content: (
            <div className='mt-2 flex flex-col text-left text-xl text-primary/80'>
                Launch the product in Thailand. Focus on building a strong local presence and establishing partnerships
                with key stakeholders. Engage with the community through events and social media to build brand
                awareness and loyalty.
            </div>
        ),
    },
    {
        title: 'Long Term',
        content: (
            <div className='mb-32 mt-2 flex flex-col text-left text-xl text-primary/80'>
                <span className='z-30 drop-shadow-2xl'>
                    Expansion to different Asian markets like China, Singapore, Korea, etc.
                </span>
                <Globe className='-top-10 w-1/2 brightness-90 md:-top-8 md:w-auto' />
            </div>
        ),
    },
];

export const Growth = ({ sectionRefs }: GrowthProps) => {
    return (
        <div className='relative flex w-full flex-col items-center py-[5vh] md:py-[15vh]'>
            <motion.span
                className='mb-16 text-6xl font-semibold md:mb-32'
                ref={(el) => {
                    sectionRefs.current[6] = el;
                }}
                id={headings[6].name.toLowerCase()}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.5 }}
            >
                Growth
            </motion.span>
            <Timeline data={data} />
        </div>
    );
};

// https://ui.aceternity.com/components/timeline
// https://magicui.design/docs/components/globe
