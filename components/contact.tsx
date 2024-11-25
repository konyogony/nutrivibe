import { headings } from '@/config';

interface ContactProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Contact = ({ sectionRefs }: ContactProps) => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 py-[15vh]'>
            <span
                className='text-6xl font-semibold text-primary'
                ref={(el) => {
                    sectionRefs.current[8] = el;
                }}
                id={headings[8].name.toLowerCase()}
            >
                Contact
            </span>
            <span className='flex flex-row gap-1 text-lg text-secondary-foreground'>
                Feel free to reach out to us at
                <a href='mailto:contact@nutrivibe.bar' className='text-blue-600'>
                    contact@nutrivibe.bar
                </a>
            </span>
            <span>Thanks for visiting!</span>
        </div>
    );
};
