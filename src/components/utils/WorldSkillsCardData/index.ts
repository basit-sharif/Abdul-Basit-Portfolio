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


export interface WorldSkillsCardDataType {
    icon: any,
    label: string,
}

export const WorldSkillsCardData: Array<WorldSkillsCardDataType> = [
    {
        icon: TfiHtml5,
        label: "Html",
    },
    {
        icon: SiCss3,
        label: "Css",
    },
    {
        icon: SiJavascript,
        label: "Javascript",
    },
    {
        icon: SiTypescript,
        label: "TypeScript",
    },
    {
        icon: RiReactjsLine,
        label: "React",
    },
    {
        icon: SiNextdotjs,
        label: "Next js",
    },
    {
        icon: SiTailwindcss,
        label: "Tailwind css",
    },
    {
        icon: SiChakraui,
        label: "Chakra UI",
    },
    {
        icon: SiFigma,
        label: "Figma UI",
    },
    {
        icon: SiAdobeillustrator,
        label: "Adobe Illustrator",
    },
]