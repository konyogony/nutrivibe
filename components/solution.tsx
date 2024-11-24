import { headings } from '@/config';
import { motion } from 'motion/react';
import FootprintTrail from './footprints';

interface SolutionProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Solution = ({ sectionRefs }: SolutionProps) => {
    return (
        <div
            ref={(el) => {
                sectionRefs.current[3] = el;
            }}
            id={headings[3].name}
            className='flex w-full flex-col items-center space-y-20 px-[10vw] py-[15vh] md:px-[25vw]'
        >
            <motion.span
                className='relative text-8xl font-extrabold'
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
                viewport={{ once: true, amount: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.2, delay: 0.8 }}
            >
                Nutrivibe
                <motion.span
                    className='absolute -right-4 -top-2 rotate-[10deg] text-lg text-blue-600'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.9 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.2 }}
                >
                    New!
                </motion.span>
            </motion.span>
            <motion.div
                className='grid w-3/4 grid-cols-2 grid-rows-10 gap-4 backdrop-blur-xl'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5 }}
            >
                <motion.div
                    className='relative col-span-2 row-span-2 flex flex-col gap-8 overflow-clip rounded-lg border border-neutral-300/35 px-14 py-10 text-primary/80 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.2 }}
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
                    className='row-span-4 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.4 }}
                >
                    b
                </motion.div>
                <motion.div
                    className='row-span-2 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.6 }}
                >
                    c
                </motion.div>
                <motion.div
                    className='row-span-3 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.8 }}
                >
                    d
                </motion.div>
                <motion.div
                    className='row-span-3 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1 }}
                >
                    e
                </motion.div>
                <motion.div
                    className='row-span-2 rounded-lg border border-neutral-300/35 px-6 py-3 shadow-sm'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.2 }}
                >
                    f
                </motion.div>
            </motion.div>
        </div>
    );
};
