import { worldSkills } from "@/components/assets/Images";
import CarsForSkills from "@/components/viewComponents/CardsForSkill";
import Image from "next/image";
import { WorldSkillsCardData } from "@/components/utils/WorldSkillsCardData"
import { useEffect } from "react";


export default function Skills() {
    return (
        <div className={`overflow-hidden text-center pt-28 pb-9 w-full bg-[#F3F4F6] dark:bg-gradient-to-tr  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            <h2 className="dark:text-[#D0D5DB] text-heading text-5xl font-semibold underline">Skills</h2>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-around">
                <section className="fade_left">
                    <CarsForSkills WorldSkillsCardData={WorldSkillsCardData} />
                </section>
                <div className="rightFade hidden md:block ">
                    <Image className="fade_right_rotate" width={300} height={300} src={worldSkills} alt="world Skills" />
                </div>
            </div>
        </div>
    )
}
