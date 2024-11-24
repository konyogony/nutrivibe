import { headings } from '@/config';
import NumberFlow from '@number-flow/react';
import { FiArrowDown, FiArrowUpRight } from '@vertisanpro/react-icons/fi';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ProblemProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Problem = ({ sectionRefs }: ProblemProps) => {
    const co2rate = 0.9;
    const start2024 = 1704067200;
    const now = Math.floor(new Date().getTime() / 1000);

    const [value, setValue] = useState(co2rate * (now - start2024));

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => prev + Math.random() * (1.1 - 0.6) + 0.6);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={(el) => {
                sectionRefs.current[2] = el;
            }}
            id={headings[2].name.toLowerCase()}
            className='flex w-full flex-col items-center space-y-20 px-[10vw] py-[15vh] md:px-[25vw]'
        >
            <motion.span
                className='text-right text-7xl'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.9 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
                }}
            >
                The Problem
            </motion.span>

            <motion.span
                className='text-right text-3xl text-primary/90 md:w-[80%] md:text-center md:text-2xl'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.9 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5 } },
                }}
            >
                Did you know that animal agriculture is responsible for
                <span className='text-destructive'>&nbsp;14.5%&nbsp;</span>
                of global greenhouse gas emissions?
            </motion.span>

            <motion.div
                className='flex w-[95vw] flex-col items-center overflow-clip rounded-xl border border-primary/5 bg-neutral-200/50 shadow-sm md:w-full md:flex-row'
                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                <div className='flex w-full flex-col bg-muted-foreground/20 p-6 text-lg text-primary/90 backdrop-blur-sm md:w-1/3 md:px-6 md:py-16'>
                    <Link
                        className='mb-4 flex w-fit flex-row items-center gap-1 rounded-full border border-black/5 bg-brand/40 px-3 py-0.5 text-sm shadow-sm'
                        href='/sources#section-1'
                    >
                        <FiArrowUpRight size={16} />
                        True fact
                    </Link>
                    <span>
                        Every second, animal farming releases
                        <strong>
                            &nbsp;82 kg of methane and 900 kg of CO<sub className='text-[0.5rem]'>2</sub>
                        </strong>
                        , significantly contributing to climate change. Methane traps much more heat than CO
                        <sub className='text-[0.5rem]'>2</sub>, highlighting the severe environmental impact of
                        livestock farming.
                    </span>
                </div>
                <div className='flex w-full flex-col items-center justify-center p-8 md:w-2/3'>
                    <NumberFlow
                        value={Math.round(value * 1e1) / 1e1}
                        format={{ minimumFractionDigits: 1 }}
                        continuous
                        className='text-5xl'
                    />
                    <span className='text-center text-primary/70'>
                        <strong>
                            Tons of CO<sub>2</sub>
                        </strong>
                        released this year <br className='hidden md:block' /> through animal farming
                    </span>
                </div>
            </motion.div>

            <motion.span
                className='py-[20vh] text-center text-3xl text-primary/90 md:w-[80%] md:text-center md:text-2xl'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.9 }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.5 } },
                }}
            >
                Plus, what about all the animals <strong className='text-destructive'>killed</strong>? Do they not
                deserve to <strong className='text-brand'>live</strong>? <br /> <br />
                <strong>
                    Well, here comes Nutrivibe, a sustainable solution to the environmental and ethical issues of animal
                    slaughter.
                </strong>
            </motion.span>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <motion.a
                    className='mx-auto flex'
                    href='#product'
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <FiArrowDown size={36} className='text-primary' />
                </motion.a>
            </motion.div>
        </div>
    );
};
