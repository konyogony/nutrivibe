import { headings, longGoals, shortGoals } from '@/config';
import { LuCarrot, LuGoal } from '@vertisanpro/react-icons/lu';
import { motion } from 'motion/react';
import FootprintTrail from './footprints';

interface SolutionProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Solution = ({ sectionRefs }: SolutionProps) => {
    return (
        <div className='flex w-full flex-col items-center space-y-20 px-2 py-[15vh] md:px-[25vw]'>
            <motion.span
                className='text-3xl md:text-4xl'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 18 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.4 }}
            >
                Introducing -
            </motion.span>
            <motion.span
                className='relative text-5xl font-extrabold md:text-8xl'
                initial={{
                    opacity: 0,
                    y: 100,
                    rotateX: 90,
                    rotateZ: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    rotateZ: 0,
                }}
                ref={(el) => {
                    sectionRefs.current[3] = el;
                }}
                id={headings[3].name.toLowerCase()}
                viewport={{ once: true, amount: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.2, delay: 1.2 }}
            >
                Nutrivibe
                <motion.span
                    className='absolute -right-4 -top-2 text-lg text-blue-600'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.6 }}
                >
                    New!
                </motion.span>
            </motion.span>

            <motion.div
                className='3xl:w-3/4 grid w-[95vw] grid-rows-10 gap-4 backdrop-blur-xl md:w-[75vw] md:grid-cols-2 lg:w-[60vw]'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5 }}
            >
                <motion.div
                    className='relative col-span-2 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-7 py-5 text-primary/80 shadow-sm md:row-span-2 md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.4 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>
                        Alternative to animal-based protein
                    </span>

                    <span className='z-20 mt-auto'>
                        Our project is the idea of creating products made from organic protein — in simple terms,
                        insects. We plan to use insects as an alternative to existing animal-based protein sources.
                    </span>

                    <FootprintTrail />
                </motion.div>

                <motion.div
                    className='relative col-span-2 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-7 py-5 text-primary/85 shadow-sm md:col-span-1 md:row-span-4 md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.8 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>Our goals</span>
                    <LuGoal size={512} className='absolute -bottom-1/2 -left-1/2 text-primary/5' />

                    <div className='flex flex-row md:flex-col'>
                        <div className='flex w-1/2 flex-col gap-2 md:w-full'>
                            <strong className='underline decoration-double'>Short-term goals:</strong>
                            <br />
                            <ul className='disc list-inside list-disc md:list-outside'>
                                {shortGoals.map((goal, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 12,
                                            duration: 0.5,
                                            delay: 1.5 + index * 0.4,
                                        }}
                                    >
                                        {goal}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex w-1/2 flex-col gap-2 md:w-full'>
                            <strong className='underline decoration-double'>Long-term goals:</strong>
                            <br />
                            <ul className='disc list-inside list-disc md:list-outside'>
                                {longGoals.map((goal, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 12,
                                            duration: 0.5,
                                            delay: 2.2 + index * 0.4,
                                        }}
                                    >
                                        {goal}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className='relative col-span-2 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-7 py-5 text-right text-primary/85 shadow-sm md:col-span-1 md:row-span-2 md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>Vegeterian alternative</span>
                    <motion.div
                        className='absolute left-0'
                        initial={{ opacity: 0, rotate: -180, x: -100 }}
                        whileInView={{ opacity: 1, rotate: 0, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 1.5, delay: 2 }}
                    >
                        <LuCarrot size={128} className='rotate-[-10deg] text-primary/15' />
                    </motion.div>
                    <span className='z-20 mt-auto'>
                        Nutritious plant-based protein for vegetarians. Our products provide essential nutrients for a
                        balanced diet.
                    </span>
                </motion.div>

                <motion.div
                    className='col-span-2 rounded-lg border border-neutral-300/35 px-7 py-5 shadow-sm md:col-span-1 md:row-span-3 md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2.4 }}
                >
                    d
                </motion.div>

                <motion.div
                    className='col-span-2 rounded-lg border border-neutral-300/35 px-7 py-5 shadow-sm md:col-span-1 md:row-span-3 md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2.8 }}
                >
                    e
                </motion.div>

                <motion.div
                    className='col-span-2 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm md:col-span-1 md:row-span-2'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 3.2 }}
                >
                    f
                </motion.div>
            </motion.div>
        </div>
    );
};
