import { RecentProjectsCardsType } from "@/components/utils/RecentProjectsCardsTypes"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRightShort } from "react-icons/bs"
import { RiExternalLinkFill } from "react-icons/ri"
import { GoMarkGithub } from "react-icons/go"
import { useEffect } from "react"

export default function RecentProjectCard({ RecentProjectsCards }: { RecentProjectsCards: Array<RecentProjectsCardsType> }) {
  useEffect(() => {
    let isBrowser = () => typeof window !== "undefined";
    if (isBrowser()) {
      let element = document.querySelectorAll(".scaling_animation");
      const observer = new IntersectionObserver((item: any) => {
        item.map((subitem: any) => {
          if (subitem.isIntersecting) {
            subitem.target.classList.add("scaleout_view");
            subitem.target.classList.remove("scalein_view");
          } else {
            subitem.target.classList.add("scalein_view");
            subitem.target.classList.remove("scaleout_view");
          };
        })
      })
      element.forEach((item: any) => {
        observer.observe(item);
      });
    }
  });
  return (
    <div className="flex-wrap flex justify-start sm:justify-center items-center space-x-8 space-y-8">
      {RecentProjectsCards.map((item: RecentProjectsCardsType, index: number) => (
        <div key={index + 5} className="flex flex-col items-start h-[27rem] rounded-2xl bg-gray-200 dark:bg-[#151030] p-4 space-y-3 hover:scale-105 duration-500 hover:shadow-xl cursor-pointer">
          <div className="group h-60 min-w-[10rem] w-full sm:w-[26rem] relative overflow-hidden">
            <Image className="absolute inset-0 rounded-t-2xl scaling_animation" src={item.images} alt={item.alt} />
            <div className="space-x-6 flex justify-center items-center absolute inset-0 rounded-t-2xl invisible group-hover:visible bg-black opacity-40 duration-300">
              <Link href={item.github} target="_blank">
                <GoMarkGithub fill="blue" size={30} />
              </Link>
              <Link href={item.link} target="_blank">
                <RiExternalLinkFill fill="red" size={30} />
              </Link>
            </div>
          </div>
          <div className="text-start p-2 space-y-2">
            <p className="text-base text-gray-600 dark:text-gray-100">{item.subHeading}</p>
            <h2 className=" text-2xl text-subHeading dark:text-gray-400  font-semibold">{item.heading}</h2>
            <p className="max-w-[24rem]">{item.content}</p>
            <Link href={item.link} target="_blank" className="mt-2 flex group underline">{item.btn}<div className="translate-x-0 group-hover:translate-x-1 duration-300"><BsArrowRightShort size={25} /></div></Link>
          </div>
        </div>
      ))}
    </div>
  )
}