'use client';

import { pageRoutes } from '@/config';
import { cn } from '@/lib/utils';
import { FiGithub } from '@vertisanpro/react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavbarDrawer } from './navbar-drawer';

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='fixed inset-0 z-50 flex h-fit w-full flex-row items-center justify-start p-4 md:top-6 md:justify-around md:p-0'>
            <NavbarDrawer routes={pageRoutes} />

            <Link className='hidden text-3xl font-medium text-primary md:block' href='/'>
                Nutrivibe
            </Link>
            <div className='hidden w-fit flex-row space-x-8 rounded-xl border border-black/5 bg-gradient-to-tr from-background/40 to-background/60 px-8 py-3 backdrop-blur-md md:flex'>
                {pageRoutes.map((v, i) => (
                    <Link
                        key={i}
                        href={v.name === 'Home' ? '/' : `/${v.name.toLowerCase()}`}
                        className={cn(
                            'text-sm font-extralight transition-all duration-150 hover:text-primary',
                            (pathname === '/' && v.name === 'Home') || pathname.split('/')[1] === v.name.toLowerCase()
                                ? 'text-primary'
                                : 'text-muted-foreground',
                        )}
                    >
                        {v.name}
                    </Link>
                ))}
            </div>
            <a
                className='hidden h-fit rounded-lg bg-background/50 p-2.5 backdrop-blur-md md:block'
                href='https://github.com/konyogony/nutrivibe'
                rel='noopener noreferrer'
                target='_blank'
            >
                <FiGithub size={18} />
            </a>
        </div>
    );
};
