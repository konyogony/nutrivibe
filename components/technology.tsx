interface TechnologyProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Technology = ({ sectionRefs }: TechnologyProps) => {
    console.log(sectionRefs);
};
