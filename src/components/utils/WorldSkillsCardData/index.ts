import { TfiHtml5 } from "react-icons/tfi"
import { SiCss3 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import { SiNextdotjs } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import { SiFigma } from "react-icons/si"
import { SiAdobeillustrator } from "react-icons/si"
import { SiAdobephotoshop } from "react-icons/si"
import { SiContentful } from "react-icons/si"


export interface WorldSkillsCardDataType {
    icon: any,
    label: string,
    link:string,
}

export const WorldSkillsCardData: Array<WorldSkillsCardDataType> = [
    {
        icon: TfiHtml5,
        label: "Html",
        link:"https://nextjs.org/",
    },
    {
        icon: SiCss3,
        label: "Css",
        link:"https://nextjs.org/",
    },
    {
        icon: SiJavascript,
        label: "Javascript",
        link:"https://nextjs.org/",
    },
    {
        icon: SiTypescript,
        label: "TypeScript",
        link:"https://nextjs.org/",
    },
    {
        icon: RiReactjsLine,
        label: "React",
        link:"https://react.dev/",
    },
    {
        icon: SiNextdotjs,
        label: "Next js",
        link:"https://nextjs.org/",
    },
    {
        icon: SiTailwindcss,
        label: "Tailwind css",
        link:"https://tailwindcss.com/",
    },
    {
        icon: SiChakraui,
        label: "Chakra UI",
        link:"https://chakra-ui.com/",
    },
    {
        icon: SiFigma,
        label: "Figma UI",
        link:"https://www.figma.com/",
    },
    {
        icon: SiAdobeillustrator,
        label: "Adobe Illustrator",
        link:"https://www.adobe.com/",
    },
    {
        icon: SiAdobephotoshop,
        label: "Adobe Photoshope",
        link:"https://www.adobe.com/",
    },
    {
        icon: SiContentful,
        label: "Contentful",
        link:"https://www.contentful.com/",
    },
]