import { headings, technologies } from '@/config';

interface TechnologyProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Technology = ({ sectionRefs }: TechnologyProps) => {
    return (
        <div className='my-64 flex w-full flex-col items-center gap-16 overflow-clip bg-muted py-[5vh] text-center md:my-32 md:py-[15vh]'>
            <span
                ref={(rel) => {
                    sectionRefs.current[7] = rel;
                }}
                id={headings[7].name.toLowerCase()}
                className='bg-gradient-to-t from-transparent to-primary/80 bg-clip-text text-6xl font-semibold text-transparent'
            >
                The technologies used
            </span>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {technologies.map((v, i) => (
                    <a
                        href={v.url}
                        key={i}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center rounded-lg border border-black/10 bg-neutral-200/40 px-4 py-2 text-sm shadow-sm'
                    >
                        <v.icon size={20} />
                        <span>{v.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};
