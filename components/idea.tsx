import { headings } from '@/config';
import NumberFlow from '@number-flow/react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface IdeaProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Idea = ({ sectionRefs }: IdeaProps) => {
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
            id={headings[2].name}
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
                Our Idea
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
                <span className='mx-1 text-destructive'>14.5%</span>
                of global greenhouse gas emissions?
            </motion.span>

            <motion.div
                className='flex w-full flex-row items-center overflow-clip rounded-xl border border-primary/5 bg-neutral-200/50'
                initial={{ opacity: 0, y: 100, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                <span className='w-1/3 bg-muted-foreground/20 px-6 py-16 text-lg text-primary/90 backdrop-blur-sm'>
                    Every second, animal farming releases 82 kg of methane and 900 kg of CO₂, significantly contributing
                    to climate change. Methane traps much more heat than CO₂, highlighting the severe environmental
                    impact of livestock farming.
                </span>
                <div className='flex w-2/3 flex-col items-center justify-center'>
                    <NumberFlow value={parseFloat(value.toFixed(1))} continuous={true} className='text-5xl' suffix='' />
                    <span className='text-center text-primary/70'>
                        <strong>Tons of CO₂</strong> released this year <br /> through animal farming
                    </span>
                </div>
            </motion.div>
        </div>
    );
};
