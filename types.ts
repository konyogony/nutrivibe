import { IconType } from '@vertisanpro/react-icons/lib';

export interface TeamMember {
    name: string;
    position: string;
    img?: string;
    link?: string;
}

export interface Heading {
    name: string;
    description: string;
    icon: IconType;
}
