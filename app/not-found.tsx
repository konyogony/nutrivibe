'use client';

import { Button } from '@/components/ui/button';
import { FiArrowRight } from '@vertisanpro/react-icons/fi';
import { useRouter } from 'next/navigation';

const NotFound = () => {
    const router = useRouter();

    return (
        <div className='flex min-h-screen w-full flex-col items-center justify-center gap-4'>
            <span className='text-[12rem] text-primary'>404</span>
            <span className='-mt-12 text-lg text-secondary-foreground'>Oops! Seems like this page doesnt exist</span>
            <Button variant='outline' size='lg' onClick={() => router.back()}>
                Go Back <FiArrowRight size={18} />
            </Button>
        </div>
    );
};

export default NotFound;
