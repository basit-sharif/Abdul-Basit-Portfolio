import { IoArrowForwardSharp } from "react-icons/io5"
import { WorkingDaysArrayType, daysInformationArray } from "@/components/utils/WorkingDaysArray"

export default function WorkingDaysCard({ WorkingDaysArray, daysInformation, setDaysInformation, setdetailedDescription }: { WorkingDaysArray: Array<WorkingDaysArrayType>, daysInformation: string, setDaysInformation: any, setdetailedDescription: any }) {

    const informationSetterFunc = (day: string) => {
        setDaysInformation(day);
        let sorterDataToDisplay = daysInformationArray.find((item) => item.day === day);
        setdetailedDescription(sorterDataToDisplay);
    }
    return (
        <div className="space-y-3">
            {
                WorkingDaysArray.map((item: WorkingDaysArrayType, index: number) => {
                    return (
                        <div onClick={() => informationSetterFunc(item.day)} key={index + 3} className={`group flex justify-between items-center cursor-pointer px-4 w-full sm:w-96 py-1 rounded-xl border-2 border-heading ${daysInformation === item.day ? "lg:scale-105" : "scale-100"} lg:hover:scale-105 duration-300 hover:shadow-lg `} >
                            <div className="flex items-center justify-start gap-3">
                                <div>
                                    <div className="flex items-center justify-center bg-[#DD58DD] rounded-full w-12 h-12">{item.icon}</div>
                                </div>
                                <div className="text-start">
                                    <p className="text-2xl font-semibold text-subHeading dark:text-gray-400">{item.day}</p>
                                    <p className="text-base font-medium text-subHeading dark:text-gray-300">{item.timing}</p>
                                </div>
                            </div>
                            <div className="ml-4 duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"><IoArrowForwardSharp /></div>
                        </div>
                    )
                })
            }
        </div >
    )
}