import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const InsectFootprintTrail: React.FC = () => {
    const [delayed, setDelayed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayed(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!delayed) {
        return null;
    }

    const footprints = Array.from(
        { length: Math.floor(Math.random() * (50 - 20 + 1)) + 20 },
        () => Math.floor(Math.random() * (50 - 20 + 1)) + 20,
    );

    const getWavePosition = (i: number) => {
        const x = -i * 20;
        const y = -Math.sin(i * 0.6) * 40 + Math.cos(i * 0.3) * 20 + Math.random() * 20;
        const angle =
            Math.atan2(
                y - (i > 0 ? -Math.sin((i - 1) * 0.6) * 40 + Math.cos((i - 1) * 0.3) * 20 : 0),
                x - (i > 0 ? -(i - 1) * 20 : 0),
            ) *
            (180 / Math.PI);
        return { x, y, angle };
    };

    return (
        <div className='absolute right-0 top-[45%] z-10 h-[300px] w-[20px] rotate-[20deg]'>
            {footprints.map((_, i) => {
                const { x, y, angle } = getWavePosition(i);
                const totalFootprints = footprints.length;
                const fadeStartIndex = totalFootprints - 10;
                const opacity = i >= fadeStartIndex ? 1 - (i - fadeStartIndex) * 0.1 : 1;

                return (
                    <motion.div
                        key={`footprint-${i}`}
                        className='absolute'
                        style={{
                            transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity }}
                        transition={{
                            delay: i * 0.5,
                            duration: 1,
                            ease: 'easeInOut',
                        }}
                    >
                        <div className='h-2 w-4 rounded-full bg-gray-500/50' />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default InsectFootprintTrail;
