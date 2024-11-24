'use client';

import { headings } from '@/config';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SidebarProps {
    currentIndex: number;
}

export const Sidebar = ({ currentIndex }: SidebarProps) => {
    return (
        <motion.div
            className='fixed left-2 top-1/2 z-30 hidden w-fit flex-col items-center gap-2 rounded-full border border-primary/5 bg-neutral-200/50 p-1.5 shadow-sm backdrop-blur-lg md:flex lg:left-16'
            initial={{ x: '-200%', y: '-50%' }}
            animate={{ x: '0%', y: '-50%' }}
            transition={{
                type: 'spring',
                stiffness: 50,
                damping: 10,
                duration: 0.5,
            }}
        >
            <motion.div
                className='absolute top-1.5 z-10 rounded-full bg-brand/60 p-6'
                initial={false}
                animate={{
                    y: `calc(${currentIndex} * 56px)`,
                    scaleY: [1, 1.4, 1],
                }}
                transition={{
                    y: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                    },
                    scaleY: {
                        duration: 0.2,
                        ease: 'easeInOut',
                    },
                }}
            />
            {headings.map((v, i) => {
                return (
                    <a
                        href={`#${v.name.toLowerCase()}`}
                        key={i}
                        className={cn(
                            'group relative z-30 rounded-full p-3 transition-all duration-300',
                            i === currentIndex ? 'text-primary' : 'text-primary/75 hover:bg-muted-foreground/15',
                        )}
                    >
                        <v.icon size={24} />
                        <span className='pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-left text-sm font-semibold opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:left-16 group-hover:opacity-100'>
                            {v.name.split('')[0].toUpperCase() + v.name.slice(1)}
                        </span>
                    </a>
                );
            })}
        </motion.div>
    );
};
