'use client';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { RouteItem } from '@/types';
import { LuMenu } from '@vertisanpro/react-icons/lu';
import Link from 'next/link';

interface NavbarDrawerProps {
    routes: RouteItem[];
}

export const NavbarDrawer = ({ routes }: NavbarDrawerProps) => {
    return (
        <Drawer>
            <DrawerTrigger className='rounded-lg p-2 text-black backdrop-blur-xl md:hidden'>
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
                            <DrawerClose asChild key={i}>
                                <Link
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
    );
};
