'use client';

import { IconType } from '@vertisanpro/react-icons';
import {
    FiCpu,
    FiDollarSign,
    FiEye,
    FiGithub,
    FiMail,
    FiPackage,
    FiTrendingUp,
    FiUsers,
} from '@vertisanpro/react-icons/fi';
import { LuLightbulb } from '@vertisanpro/react-icons/lu';
import Link from 'next/link';
import { useState } from 'react';

export interface Heading {
    name: string;
    description: string;
    icon: IconType;
}

export const Navbar = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(4);

    const headings: Heading[] = [
        { name: 'Team', description: 'Meet our team', icon: FiUsers },
        { name: 'Inspiration', description: 'Our inspiration', icon: LuLightbulb },
        { name: 'Product', description: 'Our product', icon: FiPackage },
        { name: 'Perception', description: 'Customer perception', icon: FiEye },
        { name: 'Finance', description: 'Financial overview', icon: FiDollarSign },
        { name: 'Growth', description: 'Growth metrics', icon: FiTrendingUp },
        { name: 'Technology', description: 'Our technology', icon: FiCpu },
        { name: 'Contact', description: 'Get in touch', icon: FiMail },
    ];

    return (
        <>
            <div className='fixed inset-0 z-50 flex h-fit w-full flex-row items-center justify-start p-4 md:top-6 md:justify-around md:p-0'>
                <Link className='hidden text-3xl font-medium text-primary md:block' href='/'>
                    Nutrivibe
                </Link>
                <a
                    className='hidden h-fit rounded-lg bg-background/50 p-2.5 backdrop-blur-md md:block'
                    href='https://github.com/konyogony/nutrivibe'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <FiGithub size={18} />
                </a>
            </div>
            <div className='fixed left-8 top-1/2 hidden w-fit -translate-y-1/2 flex-col items-center space-y-6 rounded-xl border border-black/5 bg-gradient-to-tr from-background/40 to-background/60 px-4 py-6 backdrop-blur-md md:flex'>
                <div
                    className='absolute top-9 z-10 rounded-full bg-brand/90 p-6 transition-all duration-500'
                    style={{ transform: `translateY(calc(${currentIndex}*(36px + 12px)))` }}
                />
                {headings.map((v, i) => {
                    return (
                        <a href={`#${v.name}`} key={i} className='z-30 rounded-md'>
                            <v.icon size={24} />
                        </a>
                    );
                })}
            </div>
        </>
    );
};
