'use client';

import { Button } from '@/components/ui/button';
import { FiArrowRight } from '@vertisanpro/react-icons/fi';
import { useRouter } from 'next/navigation';

const Sources = () => {
    const router = useRouter();
    return (
        <div className='flex min-h-screen flex-col items-center justify-center gap-4 px-4'>
            <span className='text-4xl'>Sources list</span>
            <span className='text-light text-xl text-primary/70'>
                Here you can find proofs and the sources we got our information from
            </span>
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
            <div
                id='section-2'
                className='mt-8 flex flex-col items-center gap-2 rounded-lg border border-black/5 px-8 py-4'
            >
                <span className='text-lg'>Section 2: Cost of ingredients</span>
                <a
                    href='https://www.thecritterdepot.com/collections/bulk-crickets-for-sale/products/live-crickets-for-sale-1'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600'
                >
                    TheCritterDepot.com
                </a>
                <a
                    href='https://exoticnutrition.com/products/dried-crickets-2-2-lb?srsltid=AfmBOoq7aUYV5Sr6Ebr4rH6QN46Hrz90lOmLNquXKbamfAIoaAsqhfg4'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600'
                >
                    ExoticNutrition.com
                </a>
                <a
                    href='https://cdn.padow.ru/AwG4E'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600'
                >
                    Screenshot
                </a>
            </div>
        </div>
    );
};

export default Sources;
