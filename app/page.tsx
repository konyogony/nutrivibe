import InfiniteCarousel from '@/components/infinite-carousel';
import { LearnMoreButton } from '@/components/learn-more-button';

const Home = () => {
    return (
        <div className='min-h-screen w-full'>
            <div className='from-brand to-brand-foreground flex h-[50vh] w-full flex-row items-center justify-start space-y-4 bg-gradient-to-bl px-[10vw] pt-16 leading-10 text-white md:h-[60vh] md:px-[20vw]'>
                <span className='text-7xl font-bold md:text-8xl lg:w-[30vw]'>
                    Possibility of a better future starts with food
                    <LearnMoreButton />
                </span>
            </div>
            <div className='flex w-full flex-col items-end space-y-4 bg-muted px-[10vw] py-[5vh] md:px-[20vw]'>
                <span className='text-right text-5xl font-semibold'>Our product</span>
                <span className='text-right text-xl font-normal'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maxime eius tenetur amet tempora
                    quos deserunt odio animi a assumenda, eaque autem? Soluta suscipit unde sint non quod veritatis
                    fugit?
                </span>
            </div>
            <InfiniteCarousel />
            <div className='h-[2000rem] w-full bg-muted' />
        </div>
    );
};

export default Home;
