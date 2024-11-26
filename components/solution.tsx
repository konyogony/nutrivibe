import FootprintTrail from '@/components/footprints';
import { headings, longGoals, shortGoals } from '@/config';
import { FiPercent } from '@vertisanpro/react-icons/fi';
import { GiChemicalBolt } from '@vertisanpro/react-icons/gi';
import { LuBug, LuCarrot, LuGoal } from '@vertisanpro/react-icons/lu';
import { TbBlender, TbBowlSpoon } from '@vertisanpro/react-icons/tb';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SolutionProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}
const steps: React.ReactNode[] = [
    <div key='step-1' className='flex h-fit w-full flex-shrink-0 flex-col items-center'>
        <motion.div
            className='mb-4 text-primary/80'
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 45 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.5 }}
        >
            <LuBug size={64} />
        </motion.div>
        <span className='text-lg font-medium'>1. Buy insects, like crickets, and dry them</span>
    </div>,
    <div key='step-2' className='flex h-fit w-full flex-shrink-0 flex-col items-center'>
        <motion.div
            className='mb-4 text-primary/80'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.5 }}
        >
            <TbBlender size={64} />
        </motion.div>
        <span className='text-lg font-medium'>2. Mash them to get fine powder</span>
    </div>,
    <div key='step-3' className='flex h-fit w-full flex-shrink-0 flex-col items-center'>
        <motion.div
            className='mb-4 text-primary/80'
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                duration: 0.5,
                delay: 0.3,
            }}
        >
            <GiChemicalBolt size={64} />
        </motion.div>
        <span className='text-lg font-medium'>3. Add sucrose and maltit</span>
    </div>,
    <div key='step-4' className='flex h-fit w-full flex-shrink-0 flex-col items-center'>
        <motion.div
            className='mb-4 text-primary/80'
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.5 }}
        >
            <TbBowlSpoon size={64} />
        </motion.div>
        <span className='text-lg font-medium'>4. Add oatmeal mixed with peanut butter, honey or milk</span>
    </div>,
];

export const Solution = ({ sectionRefs }: SolutionProps) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const variants = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 },
    };

    return (
        <div className='flex w-full flex-col items-center space-y-20 px-2 pb-[5vh] pt-[15vh] md:!py-[15vh] md:px-[25vw]'>
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
                className='grid w-[95vw] gap-4 backdrop-blur-xl md:w-[75vw] md:grid-cols-2 md:grid-rows-10 lg:w-[50vw] 3xl:w-3/4'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
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

                    <div className='flex flex-col gap-8'>
                        <div className='flex w-full flex-col gap-2'>
                            <strong className='underline decoration-double'>Short-term goals:</strong>
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

                        <div className='flex w-full flex-col gap-2'>
                            <strong className='underline decoration-double'>Long-term goals:</strong>
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
                                            delay: 2.4 + index * 0.4,
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
                        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 1.5, delay: 4 }}
                    >
                        <LuCarrot size={128} className='rotate-[-10deg] text-primary/15' />
                    </motion.div>
                    <span className='z-20 mt-auto'>
                        Nutritious plant-based protein for vegetarians. Our products provide essential nutrients for a
                        balanced diet.
                    </span>
                </motion.div>

                <motion.div
                    className='relative col-span-2 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-7 py-5 text-right text-primary/85 shadow-sm md:col-span-1 md:row-span-3 md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>Benefits</span>
                    <motion.div
                        className='absolute left-8 top-8'
                        animate={{ rotate: [0, 720] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: 'easeInOut',
                            repeatDelay: Math.floor(Math.random() * 5) + 4,
                        }}
                    >
                        <FiPercent size={128} className='text-primary/15' />
                    </motion.div>
                    <ol className='ml-auto mt-auto list-inside list-decimal'>
                        <li className='ml-auto w-[80%]'>Insects contain more protein than cattle in percentage</li>
                        <li className='ml-auto'>Insects could be raised on food waste</li>
                        <li className='ml-auto'> Insect farming requires 90% less land</li>
                    </ol>
                </motion.div>

                <motion.div
                    className='relative col-span-2 flex h-fit flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-7 py-5 text-center text-primary/85 shadow-sm md:col-span-1 md:row-span-3 md:h-auto md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>Production pipeline*</span>
                    <div className='flex h-full w-full items-center justify-center'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentStep}
                                className='flex h-fit w-full flex-shrink-0 flex-col text-center'
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                variants={variants}
                                transition={{ type: 'spring', stiffness: 50, duration: 0.4 }}
                            >
                                {steps[currentStep]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.div
                    className='relative col-span-2 flex h-fit flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-7 py-5 text-center text-primary/85 shadow-sm md:col-span-1 md:row-span-2 md:h-auto md:px-14 md:py-10'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1 }}
                >
                    <span className='z-20 text-2xl font-semibold text-primary'>Target audience</span>
                    <div className='flex w-full flex-row items-center justify-center gap-4'>
                        <span>14</span>
                        <motion.div
                            className='h-[2px] w-1/2 rounded-full bg-primary/45'
                            animate={{ scaleX: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        />
                        <span>35</span>
                    </div>
                    <span className='text-sm font-normal text-primary/80'>Young adults and middle aged kids</span>
                </motion.div>
            </motion.div>
        </div>
    );
};
