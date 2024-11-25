interface PerceptionProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Perception = ({ sectionRefs }: PerceptionProps) => {
    console.log(sectionRefs);
};
