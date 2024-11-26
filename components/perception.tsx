import { headings } from '@/config';
import { useMediaQuery } from '@/lib/use-media-query';
import { FiHome, FiMessageSquare, FiPlay, FiSkipForward, FiUser, FiUsers } from '@vertisanpro/react-icons/fi';
import { RxEnterFullScreen } from '@vertisanpro/react-icons/rx';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface PerceptionProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Perception = ({ sectionRefs }: PerceptionProps) => {
    const [scrolled, setScrolled] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const mobile = !useMediaQuery('(min-width: 1280px)');

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const scrollPosition = window.scrollY + window.innerHeight;
                const elementPosition = scrollRef.current.offsetTop + scrollRef.current.offsetHeight / 3;
                if (scrollPosition > elementPosition) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex flex-col items-center border-b border-primary/15 py-[10vh] md:py-[20vh]'>
            <motion.span
                className='relative mb-32 text-6xl font-semibold md:mb-64'
                ref={(el) => {
                    sectionRefs.current[4] = el;
                }}
                id={headings[4].name.toLowerCase()}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.5 }}
            >
                Perception
                <motion.svg
                    className='absolute -top-[100%] left-1/2'
                    width='200'
                    height='200'
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                    initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-150%' }}
                    whileInView={{ opacity: 0.35, scale: 1.5, x: '-50%', y: '0' }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 12,
                        duration: 0.5,
                        delay: 0.8,
                    }}
                >
                    {/* Eye Outline (Almond shape) */}
                    <motion.ellipse
                        cx='100'
                        cy='100'
                        rx='80'
                        ry='50'
                        fill='none'
                        stroke='black'
                        strokeWidth='10'
                        style={{ opacity: 0.35 }}
                    />

                    {/* Moving Pupil */}
                    <motion.circle
                        cx='100'
                        cy='100'
                        r='30'
                        fill='black'
                        animate={{
                            x: ['-20px', '20px', '-20px'], // Movement range for the pupil (left to right)
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 6, // Adjust speed of movement
                            ease: 'easeInOut',
                        }}
                        style={{ opacity: 0.35 }} // Set opacity to 0.15
                    />
                </motion.svg>
            </motion.span>

            <motion.span
                className='mb-4 text-center text-2xl font-medium'
                ref={(el) => {
                    sectionRefs.current[2] = el;
                }}
                id={headings[4].name.toLowerCase()}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 1.1, delay: 0.5 }}
            >
                It&apos;s important to change the perception of consumers
            </motion.span>

            <motion.span
                className='text-center text-2xl font-medium md:w-1/2'
                ref={(el) => {
                    sectionRefs.current[2] = el;
                }}
                id={headings[4].name.toLowerCase()}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 1.1, delay: 0.5 }}
            >
                That&apos;s why we will use various advertisement techniques to prove that insect protein is just as
                good
            </motion.span>

            <motion.span
                className='my-32 text-3xl font-medium md:my-64'
                ref={(el) => {
                    sectionRefs.current[2] = el;
                }}
                id={headings[4].name.toLowerCase()}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 1.1, delay: 0.5 }}
            >
                For example...
            </motion.span>

            <div className='min-h-[250vh] w-full' ref={scrollRef}>
                <div className='sticky left-1/2 top-1/2 h-fit w-full -translate-y-1/2'>
                    <motion.div
                        className='relative w-full px-4 md:px-[25vw]'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 1.1, delay: 0.5 }}
                    >
                        <motion.div
                            className='flex overflow-clip rounded-3xl bg-primary p-2 md:p-6'
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                aspectRatio: scrolled ? 9 / 16 : 16 / 9,
                                width: !scrolled ? '100%' : mobile ? '75%' : '50%',
                                x: !scrolled ? 0 : mobile ? '15%' : '50%',
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 16, duration: 0.5, delay: 0.5 }}
                        >
                            <div className='mt-auto h-12 w-full overflow-clip'>
                                <motion.div
                                    className='flex flex-col gap-8'
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: scrolled ? 20 : -60 }}
                                    transition={{
                                        ease: 'easeInOut',
                                        duration: 0.5,
                                        delay: 0.5,
                                    }}
                                >
                                    <div className='flex w-full flex-row justify-evenly'>
                                        <FiHome
                                            size={24}
                                            className='cursor-pointer text-background transition-all duration-75 hover:scale-110'
                                        />
                                        <FiUsers
                                            size={24}
                                            className='cursor-pointer text-background transition-all duration-75 hover:scale-110'
                                        />
                                        <div className='relative flex cursor-pointer text-primary transition-all duration-150 hover:scale-110'>
                                            <div className='absolute -left-[20%] top-0 z-10 h-full w-full rounded-md bg-red-600/60' />
                                            <div className='absolute left-[20%] top-0 z-10 h-full w-full rounded-md bg-blue-600/60' />
                                            <div className='z-40 rounded-md bg-background px-3.5 py-0.5'>+</div>
                                        </div>
                                        <FiMessageSquare
                                            size={24}
                                            className='cursor-pointer text-background transition-all duration-75 hover:scale-110'
                                        />
                                        <FiUser
                                            size={24}
                                            className='cursor-pointer text-background transition-all duration-75 hover:scale-110'
                                        />
                                    </div>

                                    <div className='flex w-full flex-col gap-2 py-2'>
                                        <div className='h-1 w-full bg-neutral-200/50'>
                                            <div className='relative h-1 w-1/4 bg-red-600'>
                                                <div className='absolute -right-4 -top-[150%] size-4 cursor-pointer rounded-full bg-red-600 transition-all duration-75 hover:scale-110' />
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-4'>
                                            <FiPlay
                                                size={28}
                                                className='cursor-pointer text-background transition-all duration-75 hover:scale-110'
                                            />
                                            <FiSkipForward
                                                size={24}
                                                className='cursor-pointer text-background transition-all duration-75 hover:scale-110'
                                            />
                                            <RxEnterFullScreen
                                                size={26}
                                                className='ml-auto cursor-pointer text-background transition-all duration-75 hover:scale-110'
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.span
                            className='absolute left-1/2 top-1/2 flex h-10 w-full flex-row items-end gap-1 overflow-clip text-3xl font-medium text-background md:w-fit'
                            initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
                            whileInView={{ opacity: 1, scale: 1, x: mobile ? '-35%' : '-50%', y: '-50%' }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.5 }}
                        >
                            <motion.span
                                className='flex flex-col gap-4'
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, x: scrolled ? '25%' : 0, y: scrolled ? 50 : -2 }}
                                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.5 }}
                            >
                                <span className='flex-shrink-0'>A tiktok </span>
                                <span className='flex-shrink-0'>A youtube video</span>
                            </motion.span>
                        </motion.span>
                    </motion.div>
                </div>
            </div>
            <motion.span
                className='mb-32 text-center text-3xl font-medium'
                ref={(el) => {
                    sectionRefs.current[2] = el;
                }}
                id={headings[4].name.toLowerCase()}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 1.1, delay: 0.5 }}
            >
                ...or just through giving out free samples.
            </motion.span>
        </div>
    );
};
