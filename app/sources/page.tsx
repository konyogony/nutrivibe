'use client';

import { Button } from '@/components/ui/button';
import { FiArrowRight } from '@vertisanpro/react-icons/fi';
import { useRouter } from 'next/navigation';

const Sources = () => {
    const router = useRouter();
    return (
        <div className='flex min-h-screen flex-col items-center justify-center gap-4 px-4'>
            <span className='text-4xl'>Sources list</span>
            <Button variant='outline' size='lg' onClick={() => router.push('/')}>
                Go Back <FiArrowRight size={18} />
            </Button>
            <div
                id='section-1'
                className='mt-8 flex flex-col items-center gap-2 rounded-lg border border-black/5 px-8 py-4'
            >
                <span className='text-lg'>Section 1: CO2 and Methane release</span>
                <a
                    href='https://www.theworldcounts.com/challenges/climate-change/global-warming/global-co2-emissions'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600'
                >
                    TheWorldCounts.com
                </a>
                <a
                    href='https://ourworldindata.org/emissions-by-sector'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600'
                >
                    OurWorldInData.org
                </a>
            </div>
        </div>
    );
};

export default Sources;
