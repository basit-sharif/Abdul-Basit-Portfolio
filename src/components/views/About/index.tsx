import { AboutCode } from "@/components/assets/Images";
import Image from "next/image";

export default function About() {
    return (
        <div className={`px-3 py-14 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tl  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            {/* <a id="about"></a> */}
            <div id="about" />
            <p className="text-4xl font-semibold underline">About Me</p>
            <div className="flex flex-col lg:flex-row justify-around items-center">
                <div className="pt-10 sm:pt-8 md:pt-0 fade_left">
                    <Image src={AboutCode} alt="About illutration" />
                </div>
                <div className="text-center sm:text-left space-y-6 max-w-xl py-12">
                    {Data.map((item: Types, index: number) =>
                        <div key={index + 10} className="space-y-3">
                            <h4 className="text-xl font-medium text-subHeading dark:text-gray-400">{item.heading}</h4>
                            <p className="text-lg font-normal text-heading dark:text-slate-300">{item.content}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

interface Types {
    heading: string,
    content: string,
}

let Data: Array<Types> = [
    {
        heading: "About Me",
        content: "My Name is Abdul-Basit.I Live in Bahawalpur, Punjab, Pakistan. My Age is 18 Year's. I am student of PIAIC(President Initiative and Artificial Intelligence).I am enrolled in Web 3.0 and Metaverse Developer(Blockchain)(WMD). ",
    },
    {
        heading: "Education",
        content: "Under I.C.s at Government College",
    },
    {
        heading: "Interested In",
        content: "I am a Frontend developer (Web 1.0).I am interested in building very beautifull web 1.0 applications focused on making clean and good SEO websites using Tailwind Css or Chakra UI.",
    },
]