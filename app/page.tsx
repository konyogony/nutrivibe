'use client';

import { Hero } from '@/components/hero';
import InfiniteCarousel from '@/components/infinite-carousel';
import { Problem } from '@/components/problem';
import { Sidebar } from '@/components/sidebar';
import { Solution } from '@/components/solution';
import { Team } from '@/components/team';
import { headings } from '@/config';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(() => {
        const index = headings.findIndex(
            (s) => s.name === (typeof window !== 'undefined' && window.location.hash.split('#')[1]),
        );
        console.log('Initial currentIndex:', index !== -1 ? index : 0);
        return index !== -1 ? index : 0;
    });

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const index = headings.findIndex((s) => s.name === id);
                        if (index !== -1) {
                            console.log('currentIndex changed to:', index);
                            setCurrentIndex(index);
                        }
                    }
                });
            },
            { rootMargin: '0px 0px -20% 0px', threshold: 0.5 },
        );

        const currentRefs = sectionRefs.current;
        currentRefs.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            currentRefs.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div className='min-h-screen w-full overflow-clip'>
            <Sidebar currentIndex={currentIndex} />
            <Hero sectionRefs={sectionRefs} />
            <div className='flex flex-col bg-gradient-to-br from-muted to-muted-foreground/20'>
                <Team sectionRefs={sectionRefs} />
                <Problem sectionRefs={sectionRefs} />
            </div>
            <Solution sectionRefs={sectionRefs} />
            <InfiniteCarousel />
            <span className='mx-auto text-blue-600 text-4xl'>
            Page under construction
            </span>
        </div>
    );
};
// Take action. Stay in flow

export default Home;
