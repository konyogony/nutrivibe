'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FiGithub } from '@vertisanpro/react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const routes = ['Home', 'About', 'Impact', 'Market', 'Production'];

export const Navbar = () => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollHeight]);

    console.log(pathname);

    return (
        <div
            className={cn(
                'fixed inset-0 z-50 flex h-fit w-full flex-row items-center gap-4 border-b px-4 py-2.5 transition-all duration-300 lg:px-[20vw]',
                scrollHeight > 0 ? 'bg-foreground/[.01] backdrop-blur-[2px]' : 'border-transparent',
            )}
        >
            <Link className='text-brand mr-4 text-2xl font-semibold' href='/'>
                Nutrivibe
            </Link>
            <div className='mr-auto flex flex-row items-center gap-6'>
                {routes.map((route) => (
                    <Link
                        key={route}
                        href={route === 'Home' ? '/' : `/${route.toLowerCase()}`}
                        className={cn(
                            'text-sm font-medium text-muted-foreground transition-all duration-150 hover:text-foreground',
                            pathname.includes(route.toLowerCase()) && 'text-foreground',
                            pathname === '/' && route === 'Home' && 'text-foreground',
                        )}
                    >
                        {route}
                    </Link>
                ))}
            </div>
            <Button asChild variant='outline' size='icon'>
                <a href='https://github.com/konyogony/nutrivibe' rel='noopener noreferrer' target='_blank'>
                    <FiGithub size={18} />
                </a>
            </Button>
        </div>
    );
};
