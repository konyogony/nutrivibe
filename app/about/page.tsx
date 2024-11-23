import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { nutrivibeTeam } from '@/config';

const About = () => {
    return (
        <div className='flex min-h-screen w-full flex-col items-center'>
            <div className='flex w-full flex-col items-center space-y-6 bg-foreground py-4 pt-16 md:space-y-0'>
                <span className='text-2xl font-bold'>Our idea</span>
            </div>
            <div className='flex w-full flex-col items-center space-y-6 bg-muted py-4 md:space-y-0'>
                <span className='text-2xl font-bold'>Our idea</span>
            </div>
            <div className='flex w-full flex-col items-center space-y-6 bg-muted py-4 md:space-y-0'>
                <span className='text-2xl font-bold'>The team</span>
                <span className='!mt-2 text-center text-sm font-normal text-muted-foreground/80 lg:!mb-6'>
                    The people responsible for the creation of this idea and its development
                </span>
                <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                    {nutrivibeTeam.map((v, i) => {
                        return (
                            <div key={i} className='flex flex-row items-center space-x-4'>
                                <Avatar>
                                    {v.img && <AvatarImage src={v.img} />}
                                    <AvatarFallback className='bg-muted-foreground/25'>
                                        {v.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')
                                            .toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col items-start'>
                                    {v.link ? (
                                        <a
                                            className='text-lg font-normal transition-all duration-150 hover:text-brand'
                                            href={v.link}
                                            rel='noopener noreferrer'
                                            target='_blank'
                                        >
                                            {v.name}
                                        </a>
                                    ) : (
                                        <span className='text-lg font-normal'>{v.name}</span>
                                    )}
                                    <span className='text-sm font-light text-muted-foreground'>{v.position}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;
