'use client';

import InfiniteCarousel from '@/components/infinite-carousel';
import { LearnMoreButton } from '@/components/learn-more-button';
import { ProteinBar } from '@/components/protein-bar';
import { Sidebar } from '@/components/sidebar';
import { Team } from '@/components/team';
import { headings } from '@/config';
import { motion } from 'motion/react';
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
            <div
                className='flex h-[75vh] w-full flex-row items-center justify-start space-y-4 overflow-clip bg-gradient-to-bl from-brand to-brand-foreground pt-16 leading-10 text-white md:h-[90vh]'
                ref={(el) => {
                    sectionRefs.current[0] = el;
                }}
                id={headings[0].name}
            >
                <span className='absolute left-1/2 z-20 flex w-[90vw] -translate-x-1/2 flex-col text-6xl font-bold md:w-[80vw] md:text-8xl lg:w-[50vw] lg:-translate-x-3/4 2xl:w-[30vw]'>
                    Possibility of a better future starts with food
                    <LearnMoreButton className='mt-6' />
                </span>
                <div className='h-full w-[200rem] lg:translate-x-[15vw]'>
                    <ProteinBar />
                </div>
            </div>
            <Team sectionRefs={sectionRefs} />
            <div
                ref={(el) => {
                    sectionRefs.current[2] = el;
                }}
                id={headings[2].name}
                className='flex flex-col bg-muted'
            >
                <motion.span
                    className='text-7xl'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                    }}
                >
                    The Idea
                </motion.span>

                <motion.span
                    className='text-left text-3xl font-light text-primary/80 md:w-[80%] md:text-center md:text-2xl'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                    }}
                >
                    This is the team behind this project. We are a group of
                    <span className='mx-1 text-brand'>passionate individuals</span> who are dedicated to making a
                    difference in the world.
                </motion.span>
            </div>
            <InfiniteCarousel />
            <div className='h-[2000rem] w-full bg-muted' />
        </div>
    );
};
// Take action. Stay in flow

export default Home;
