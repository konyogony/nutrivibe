import { motion } from 'framer-motion';
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
        const y = -Math.sin(i * 0.6) * 40 + Math.random() * 10;
        const angle =
            Math.atan2(y - (i > 0 ? -Math.sin((i - 1) * 0.6) * 40 : 0), x - (i > 0 ? -(i - 1) * 20 : 0)) *
            (180 / Math.PI);
        return { x, y, angle };
    };

    return (
        <div className='absolute right-0 top-[20%] z-0 h-[300px] w-[20px] rotate-[5deg]'>
            {footprints.map((_, i) => {
                const { x, y, angle } = getWavePosition(i);
                const totalFootprints = footprints.length;
                const opacity = i >= totalFootprints - 5 ? 1 - (i - (totalFootprints - 5)) * 0.2 : 1;

                return (
                    <motion.div
                        key={`footprint-${i}`}
                        className='absolute'
                        style={{
                            transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`, // Align the footprint with the path
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity }}
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
