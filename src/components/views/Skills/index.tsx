import { worldSkills } from "@/components/assets/Images";
import CarsForSkills from "@/components/viewComponents/CardsForSkill";
import Image from "next/image";
import { WorldSkillsCardData } from "@/components/utils/WorldSkillsCardData"
import { useEffect } from "react";


export default function Skills() {
    useEffect(() => {
        let isBrowser = () => typeof window !== "undefined";
        if (isBrowser()) {
            let element = document.querySelectorAll(".fade_right_rotate");
            const observer = new IntersectionObserver((item: any) => {
                item.map((subitem: any) => {
                    if (subitem.isIntersecting) {
                        subitem.target.classList.remove("fade_right_rotate_notView");
                        subitem.target.classList.add("fade_right_rotate_view");
                    } else {
                        subitem.target.classList.add("fade_right_rotate_notView");
                        subitem.target.classList.remove("fade_right_rotate_view");
                    };
                })
            })
            element.forEach((item: any) => {
                observer.observe(item);
            })
            let element2 = document.querySelectorAll(".fade_left");
            const observer2 = new IntersectionObserver((item: any) => {
                item.map((subitem: any) => {
                    if (subitem.isIntersecting) {
                        subitem.target.classList.remove("fade_left_notView");
                        subitem.target.classList.add("fade_left_view");
                    } else {
                        subitem.target.classList.add("fade_left_notView");
                        subitem.target.classList.remove("fade_left_view");
                    };
                })
            })
            element2.forEach((item: any) => {
                observer2.observe(item);
            })
        }
    }, [])
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
