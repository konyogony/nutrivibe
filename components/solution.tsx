import { headings, longGoals, shortGoals } from '@/config';
import { LuCarrot, LuGoal } from '@vertisanpro/react-icons/lu';
import { motion } from 'motion/react';
import FootprintTrail from './footprints';

interface SolutionProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Solution = ({ sectionRefs }: SolutionProps) => {
    return (
        <div className='flex w-full flex-col items-center space-y-20 px-[10vw] py-[15vh] md:px-[25vw]'>
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
                className='grid w-3/4 grid-cols-2 grid-rows-10 gap-4 backdrop-blur-xl'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5 }}
            >
                <motion.div
                    className='relative col-span-2 row-span-2 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-14 py-10 text-primary/80 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.4 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>
                        Alternative to animal-based protein
                    </span>

                    <span className='z-20'>
                        Our project is the idea of creating products made from organic protein—in simple terms, insects.
                        We plan to use insects as an alternative to existing animal-based protein sources.
                    </span>

                    <FootprintTrail />
                </motion.div>

                <motion.div
                    className='relative row-span-4 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-14 py-10 text-primary/85 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.8 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>Our goals</span>
                    <LuGoal size={512} className='absolute -bottom-1/2 -left-1/2 text-primary/5' />

                    <span className='z-20 mt-auto'>
                        <strong className='underline decoration-double'>Short-term goals:</strong>

                        <br />
                        <ul className='disc list-outside list-disc'>
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

                        <br />
                        <strong className='underline decoration-double'>Long-term goals:</strong>

                        <ul className='disc list-outside list-disc'>
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
                    </span>
                </motion.div>

                <motion.div
                    className='relative row-span-2 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-14 py-10 text-right text-primary/85 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>Vegeterian alternative</span>
                    <div className='absolute left-0'>
                        <LuCarrot size={128} className='rotate-[-10deg] text-primary/15' />
                    </div>
                    <span className='z-20 mt-auto'>
                        Nutritious plant-based protein for vegetarians. Our products provide essential nutrients for a
                        balanced diet.
                    </span>
                </motion.div>

                <motion.div
                    className='row-span-3 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2.4 }}
                >
                    d
                </motion.div>

                <motion.div
                    className='row-span-3 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2.8 }}
                >
                    e
                </motion.div>

                <motion.div
                    className='row-span-2 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 3.2 }}
                >
                    f
                </motion.div>
            </motion.div>
        </div>
    );
};
