import { WorldSkillsCardDataType } from "@/components/utils/WorldSkillsCardData"
import Link from "next/link"


export default function CarsForSkills({ WorldSkillsCardData }: any) {

    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 p-4 gap-6 cursor-pointer ">
            {
                WorldSkillsCardData.map((item: WorldSkillsCardDataType, index: number) => {
                    return (
                        <Link aria-label={`This will take you to the ${item.label} website... if not available nothing`} href={item.link ? item.link : "/"} key={index + 1} className="flex w-auto items-center justify-start gap-2 py-4 px-6 rounded-xl border-2 border-heading hover:scale-105 duration-300 hover:shadow-lg">
                            <item.icon fill="#dd58dd" size={56} />
                            <p className="text-2xl font-semibold text-subHeading dark:text-gray-400">{item.label}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}
