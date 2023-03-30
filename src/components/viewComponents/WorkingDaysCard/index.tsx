import { IoArrowForwardSharp } from "react-icons/io5"
import { WorkingDaysArrayType } from "@/components/utils/WorkingDaysArray"

export default function WorkingDaysCard({ WorkingDaysArray }: any) {
    return (
        <div className="space-y-3">
            {
                WorkingDaysArray.map((item: WorkingDaysArrayType, index: number) => {
                    return (
                        <div key={index + 3} className="group flex justify-between items-center cursor-pointer px-4 w-full sm:w-96 py-1 rounded-xl border-2 border-heading hover:scale-105 duration-300 hover:shadow-lg ">
                            <div className="flex items-center justify-start gap-3">
                                <div>
                                    <div className="flex items-center justify-center bg-[#DD58DD] rounded-full w-12 h-12">{item.icon}</div>
                                </div>
                                <div className="text-start">
                                    <p className="text-2xl font-semibold text-subHeading">{item.day}</p>
                                    <p className="text-base font-medium text-heading">{item.timing}</p>
                                </div>
                            </div>
                            <div className="ml-4 duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"><IoArrowForwardSharp /></div>
                        </div>
                    )
                })
            }
        </div>
    )
}