interface GrowthProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Growth = ({ sectionRefs }: GrowthProps) => {
    console.log(sectionRefs);
};
