import { WorldSkillsCardDataType } from "@/components/utils/WorldSkillsCardData"


export default function CarsForSkills({ WorldSkillsCardData }: any) {

    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 p-4 gap-6 cursor-pointer ">
            {
                WorldSkillsCardData.map((item: WorldSkillsCardDataType, index: number) => {
                    return (
                        <div key={index + 1} className="flex w-auto items-center justify-start gap-2 px-4 py-4 rounded-xl border-2 border-heading hover:scale-105 duration-300 hover:shadow-lg">
                            <div>
                                <item.icon fill="#dd58dd" size={60} />
                            </div>
                            <p className="text-3xl font-semibold text-subHeading">{item.label}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
