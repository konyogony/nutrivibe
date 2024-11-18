'use client';

import { FiChevronRight } from '@vertisanpro/react-icons/fi';
import Link from 'next/link';

export const LearnMoreButton = () => {
    return (
        <Link
            className='flex w-fit flex-row items-center gap-1 rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-500 px-4 py-1.5 text-lg font-normal shadow-xl'
            href='/about'
        >
            Learn more <FiChevronRight size={22} />
        </Link>
    );
};
