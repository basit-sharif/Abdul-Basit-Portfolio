import { Home, About, Contact, Projects, Cv, Testimonials } from '@/components/assets/Images';


export interface navbarItemsType {
    icon: any,
    alt: string,
    abbriviation: string,
    link?: string,
}

export const NavbarItems: Array<navbarItemsType> = [
    {
        icon: Home,
        alt: "home icon",
        abbriviation: "Home",
        link: "home",
    },
    {
        icon: Projects,
        alt: "project icon",
        abbriviation: "Projects",
        link: "projects",
    },
    {
        icon: Testimonials,
        alt: "testimonials icon",
        abbriviation: "Testimonials",
        link: "testimonials",
    },
    {
        icon: About,
        alt: "about icon",
        abbriviation: "About",
        link: "about",
    },
    {
        icon: Contact,
        alt: "contact icon",
        abbriviation: "Contact",
        link: "contact"
    },
    {
        icon: Cv,
        alt: "cv icon",
        abbriviation: "Download CV",
    },
]