'use client';

import { cn } from '@/lib/utils';
import { FiChevronRight } from '@vertisanpro/react-icons/fi';
import Link from 'next/link';

interface LearnMoreButtonProps {
    className?: string;
}

export const LearnMoreButton = ({ className }: LearnMoreButtonProps) => {
    return (
        <Link
            className={cn(
                'flex w-fit flex-row items-center gap-1 rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-500 px-4 py-1.5 text-lg font-normal shadow-xl',
                className,
            )}
            href='/about'
        >
            Learn more <FiChevronRight size={22} />
        </Link>
    );
};
