import { FlipWords } from '@/components/ui/flip-words';
import { headings, wordsHero } from '@/config';
import { LearnMoreButton } from './learn-more-button';
import { ProteinBar } from './protein-bar';

interface HeroProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Hero = ({ sectionRefs }: HeroProps) => {
    return (
        <div
            className='flex h-[75vh] w-full flex-row items-center justify-start space-y-4 overflow-clip bg-gradient-to-bl from-brand to-brand-foreground pt-16 leading-10 text-white md:h-[90vh]'
            ref={(el) => {
                sectionRefs.current[0] = el;
            }}
            id={headings[0].name.toLowerCase()}
        >
            <span className='absolute left-1/2 z-20 flex w-[90vw] -translate-x-1/2 flex-col text-6xl font-bold md:left-1/3 md:w-[80vw] md:text-8xl lg:w-[50vw] 2xl:w-[30vw]'>
                Possibility of a <FlipWords words={wordsHero} className='m-0 p-0 text-white' /> future starts with food
                <LearnMoreButton className='mt-6' />
            </span>
            <div className='h-full w-[200rem] lg:translate-x-[15vw]'>
                <ProteinBar />
            </div>
        </div>
    );
};
