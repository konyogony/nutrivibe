'use client';

import { githubRepo } from '@/config';
import { cn } from '@/lib/utils';
import { FiGithub } from '@vertisanpro/react-icons/fi';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Navbar = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            initial={{ y: '-200%' }}
            animate={{ y: '0%' }}
            transition={{
                type: 'spring',
                stiffness: 50,
                damping: 10,
                duration: 0.5,
            }}
            className={cn(
                'fixed inset-0 z-50 flex h-fit w-full flex-row items-center justify-between p-4 transition-all duration-500 md:top-0 md:bg-transparent md:px-4 lg:px-[10vw]',
                scrollHeight > 0 && 'bg-background/10 backdrop-blur-md',
            )}
        >
            <Link className='block text-3xl font-medium text-primary' href='/'>
                Nutrivibe
            </Link>
            <a
                className='h-fit rounded-lg bg-neutral-300/50 p-2.5 transition-all duration-150 hover:bg-neutral-300/70'
                href={githubRepo}
                rel='noopener noreferrer'
                target='_blank'
            >
                <FiGithub size={18} />
            </a>
        </motion.div>
    );
};
