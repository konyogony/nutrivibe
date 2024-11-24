import { headings, nutrivibeTeam } from '@/config';
import { motion } from 'motion/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TeamProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Team = ({ sectionRefs }: TeamProps) => {
    return (
        <div
            ref={(el) => {
                sectionRefs.current[1] = el;
            }}
            id={headings[1].name.toLowerCase()}
            className='flex w-full flex-col items-center space-y-20 px-[10vw] py-[15vh] md:px-[25vw]'
        >
            <motion.span
                className='text-7xl'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
            >
                The Team
            </motion.span>

            <motion.span
                className='text-left text-3xl font-light text-primary/80 md:w-[80%] md:text-center md:text-2xl'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
            >
                This is the team behind this project. We are a group of
                <span className='text-brand'>&nbsp;passionate individuals&nbsp;</span>
                who are dedicated to making a difference in the world.
            </motion.span>

            <div className='flex w-full flex-col justify-evenly gap-4 text-right md:flex-row'>
                {nutrivibeTeam.map((v, i) => (
                    <motion.div
                        key={i}
                        className='flex flex-row items-center justify-between gap-4 md:justify-normal'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 * i }}
                    >
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
                        <div className='flex w-fit flex-col items-end'>
                            {v.link ? (
                                <a
                                    className='w-fit text-lg font-normal transition-all duration-150 hover:text-brand'
                                    href={v.link}
                                    rel='noopener noreferrer'
                                    target='_blank'
                                >
                                    {v.name}
                                </a>
                            ) : (
                                <span className='w-fit text-lg font-normal'>{v.name}</span>
                            )}
                            <span className='text-sm font-light text-muted-foreground'>{v.position}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
