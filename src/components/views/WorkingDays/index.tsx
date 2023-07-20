import { workingDays } from "@/components/assets/Images";
import WorkingDaysCard from "@/components/viewComponents/WorkingDaysCard";
import Image from "next/image";
import { WorkingDaysArray, daysInformationArrayType } from "@/components/utils/WorkingDaysArray";
import { useState } from "react";

export default function WorkingDays() {
    const [daysInformation, setDaysInformation] = useState<string>("");
    const [detailedDescription, setdetailedDescription] = useState<daysInformationArrayType | null>(null);

    return (
        <div className={`px-1 pb-4 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tr from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            <h3 className="dark:text-[#D0D5DB] hover:after:w-15 text-heading text-3xl sm:text-4xl font-semibold underline">Working Days</h3>
            <div className="pt-10 flex flex-col-reverse sm:flex-row items-center justify-around">
                <div className="fade_left">
                    <WorkingDaysCard setdetailedDescription={setdetailedDescription} setDaysInformation={setDaysInformation} daysInformation={daysInformation} WorkingDaysArray={WorkingDaysArray} />
                </div>
                <div className="px-7">
                    <div className="fade_right_rotate lg:w-[28rem] hidden md:flex flex-grow">
                        {detailedDescription ?
                            <div>
                                <div className="rounded-xl border-2 border-heading px-4 py-2">
                                    <p className="text-2xl font-semibold text-subHeading dark:text-gray-400">{detailedDescription.day}</p>
                                    <p className="text-base font-medium text-subHeading dark:text-gray-300">{detailedDescription.desc}</p>
                                </div>
                                <button onClick={() => { setDaysInformation(""); setdetailedDescription(null); }} aria-label="will take you to the orignal image" className="text-sm text-blue-700 text-center mt-3">Back To Photo</button>
                            </div>
                            :
                            <Image width={450} height={300} src={workingDays} alt="Working Days" />
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}