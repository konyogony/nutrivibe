'use client';

import { cn } from '@/lib/utils';
import { FiGithub } from '@vertisanpro/react-icons/fi';
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
        <div
            className={cn(
                'fixed inset-0 z-50 flex h-fit w-full flex-row items-center justify-start p-4 transition-all duration-500 md:top-6 md:justify-between md:bg-transparent md:p-0 md:px-[10vw] md:backdrop-blur-none',
                scrollHeight > 0 && 'bg-background/10 backdrop-blur-md',
            )}
        >
            <Link className='block text-3xl font-medium text-primary' href='/'>
                Nutrivibe
            </Link>
            <a
                className='hidden h-fit rounded-lg bg-neutral-300/50 p-2.5 transition-all duration-150 hover:bg-neutral-300/70 md:block md:backdrop-blur-md'
                href='https://github.com/konyogony/nutrivibe'
                rel='noopener noreferrer'
                target='_blank'
            >
                <FiGithub size={18} />
            </a>
        </div>
    );
};
