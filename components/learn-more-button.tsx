'use client';

import { cn } from '@/lib/utils';
import { FiChevronRight } from '@vertisanpro/react-icons/fi';

interface LearnMoreButtonProps {
    className?: string;
}

export const LearnMoreButton = ({ className }: LearnMoreButtonProps) => {
    return (
        <a
            className={cn(
                'flex w-fit flex-row items-center gap-1 rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-500 px-5 py-3 text-lg font-normal transition-all duration-300 hover:rounded-lg md:text-xl',
                className,
            )}
            href='#Inspiration'
        >
            Learn more <FiChevronRight size={22} />
        </a>
    );
};
