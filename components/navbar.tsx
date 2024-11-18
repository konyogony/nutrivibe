'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FiGithub } from '@vertisanpro/react-icons/fi';
import { LuMenu } from '@vertisanpro/react-icons/lu';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './ui/drawer';

const routes = [
    { name: 'Home', description: 'Homepage of the project' },
    { name: 'About', description: 'Learn more about us and our team' },
    { name: 'Impact', description: 'See our impact and goals' },
    { name: 'Market', description: 'Checkout our market research' },
    { name: 'Production', description: 'Understand the proccess of making one' },
];

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
    }, [scrollHeight]);

    return (
        <div
            className={cn(
                'fixed inset-0 z-50 flex h-fit w-full flex-row items-center gap-4 border-b px-4 py-3 backdrop-blur-sm transition-all duration-300 md:py-2.5 lg:px-[20vw]',
                scrollHeight > 0
                    ? 'border-black/5 bg-foreground/[.15] lg:bg-foreground/[.15] lg:backdrop-blur-sm'
                    : 'border-black/5 bg-foreground/[.15] lg:border-transparent lg:bg-transparent',
            )}
        >
            <Drawer>
                <DrawerTrigger className='text-white hover:text-black md:hidden'>
                    <LuMenu size={24} />
                </DrawerTrigger>
                <DrawerContent>
                    <div className='mx-auto min-h-[30vh] w-full max-w-sm'>
                        <DrawerHeader>
                            <DrawerTitle>Contents</DrawerTitle>
                            <DrawerDescription>Useful links and contents of the webpage</DrawerDescription>
                        </DrawerHeader>
                        <div className='flex flex-col space-y-4 p-4'>
                            {routes.map((v, i) => (
                                <DrawerClose asChild>
                                    <Link
                                        key={i}
                                        href={v.name === 'Home' ? '/' : `/${v.name.toLowerCase()}`}
                                        className='flex flex-col space-y-1 rounded-md border border-black/10 bg-muted-foreground/5 px-4 py-2 text-base font-medium text-black'
                                    >
                                        {v.name}
                                        <span className='text-sm font-normal text-foreground/50'>{v.description}</span>
                                    </Link>
                                </DrawerClose>
                            ))}
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
            <Link className='mr-4 text-2xl font-semibold text-white hover:text-primary' href='/'>
                Nutrivibe
            </Link>
            <div className='mr-auto hidden flex-row items-center gap-6 md:flex'>
                {routes.map((v, i) => (
                    <Link
                        key={i}
                        href={v.name === 'Home' ? '/' : `/${v.name.toLowerCase()}`}
                        className='text-sm font-medium text-white transition-all duration-150 hover:text-primary'
                    >
                        {v.name}
                    </Link>
                ))}
            </div>
            <div className='hidden md:block'>
                <Button asChild variant='outline' size='icon'>
                    <a href='https://github.com/konyogony/nutrivibe' rel='noopener noreferrer' target='_blank'>
                        <FiGithub size={18} />
                    </a>
                </Button>
            </div>
        </div>
    );
};
