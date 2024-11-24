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
                'flex w-fit flex-row items-center gap-1 rounded-3xl bg-gradient-to-tr from-blue-600 to-blue-500 px-4 py-2 text-lg font-normal transition-all duration-300 hover:rounded-lg md:px-5 md:py-3 md:text-xl',
                className,
            )}
            href='#inspiration'
        >
            Learn more <FiChevronRight size={22} />
        </a>
    );
};
