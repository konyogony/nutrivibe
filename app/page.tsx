import InfiniteCarousel from '@/components/infinite-carousel';
import { LearnMoreButton } from '@/components/learn-more-button';
import { ProteinBar } from '@/components/protein-bar';

const Home = () => {
    return (
        <div className='min-h-screen w-full'>
            <div className='flex h-[75vh] w-full flex-row items-center justify-start space-y-4 overflow-clip bg-gradient-to-bl from-brand to-brand-foreground pt-16 leading-10 text-white md:h-[90vh] lg:px-[20vw]'>
                <span className='absolute left-1/2 z-20 flex w-[90vw] -translate-x-1/2 flex-col text-6xl font-bold md:w-[80vw] md:text-8xl lg:w-[30vw] lg:-translate-x-3/4'>
                    Possibility of a better future starts with food
                    <LearnMoreButton className='mt-6' />
                </span>
                <ProteinBar />
            </div>
            <div className='flex w-full flex-col items-center space-y-4 bg-muted px-[10vw] py-[5vh] md:px-[20vw]'>
                <div className='flex w-fit flex-col space-y-2 rounded-md border border-black/5 bg-muted-foreground/[.01] px-6 py-3 shadow-inner'>
                    <span className='text-5xl font-semibold'>Idea</span>
                    <span className='text-xl font-normal'>
                        Our project is the idea of creating products made from organic protein—in simple terms, insects.
                        We plan to use insects as an alternative to existing animal-based protein sources.
                    </span>
                </div>
            </div>
            <InfiniteCarousel />
            <div className='h-[2000rem] w-full bg-muted' />
        </div>
    );
};

export default Home;
