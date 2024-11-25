import { LearnMoreButton } from '@/components/learn-more-button';
import { ProteinBar } from '@/components/protein-bar';
import { Typewriter } from '@/components/ui/typewriter';
import { headings, wordsHero } from '@/config';

interface HeroProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Hero = ({ sectionRefs }: HeroProps) => {
    return (
        <div
            className='flex h-[85vh] w-full flex-row items-center justify-start space-y-4 overflow-clip bg-gradient-to-bl from-brand to-brand-foreground pt-16 leading-10 text-white md:h-[90vh]'
            ref={(el) => {
                sectionRefs.current[0] = el;
            }}
            id={headings[0].name.toLowerCase()}
        >
            <span className='absolute left-1/2 z-20 flex w-[90vw] -translate-x-1/2 flex-col text-5xl font-bold drop-shadow-2xl md:-translate-x-[45%] md:text-8xl lg:w-[70vw] 2xl:w-[30vw] 2xl:-translate-x-[100%]'>
                <div className='flex flex-col'>
                    Possibility of a
                    <span className='[&>has(.styles-module_blinkingCursor__yugAC)]:text-sm'>
                        <Typewriter
                            words={wordsHero}
                            cursor
                            cursorStyle='|'
                            typeSpeed={150}
                            deleteSpeed={80}
                            delaySpeed={3000}
                        />
                    </span>
                    future starts with food
                </div>
                <LearnMoreButton className='mt-6' />
            </span>
            <div className='h-full w-[200rem] lg:translate-x-[15vw]'>
                <ProteinBar />
            </div>
        </div>
    );
};
