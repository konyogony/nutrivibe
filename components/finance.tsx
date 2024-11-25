interface FinanceProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Finance = ({ sectionRefs }: FinanceProps) => {
    console.log(sectionRefs);
};
