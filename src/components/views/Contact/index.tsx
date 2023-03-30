import { Contact2 } from "@/components/assets/Images";
import ButtonFirst from "@/components/shared/ButtonFirst";
import Image from "next/image";

export default function Contact() {
    return (
        <div className={`px-3 py-14 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tr  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            <a id="contact"></a>
            <p className="text-3xl sm:text-4xl font-semibold underline">Contact Us</p>
            <div className="flex flex-col lg:flex-row justify-around items-center">
                <div className="text-subHeading grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg  ">
                    <div className="flex flex-col items-start">
                        <label htmlFor="firstName" >First Name:</label>
                        <input placeholder="John" className="inputField w-full" id="firstName" type="text" />
                    </div>
                    <div className="flex flex-col items-start  ">
                        <label htmlFor="secondName" >Second Name:</label>
                        <input placeholder="Doe" className="inputField w-full" id="secondName" type="text" />
                    </div>
                    <div className="flex flex-col items-start ">
                        <label htmlFor="email" >Your's E-Mail Address:</label>
                        <input placeholder="i.e, Jondoe@gmail.com" className="inputField w-full" id="email" type="text" />
                    </div>
                    <div className="flex flex-col items-start ">
                        <label htmlFor="phone" >Your's Phone Number:</label>
                        <input placeholder="i.e, +9237787615" className="inputField w-full" id="phone" type="text" />
                    </div>
                    <div className="flex flex-col items-start  sm:col-span-2">
                        <label htmlFor="country">Choose Your's Country:</label>
                        <select className="inputField w-full" name="country" id="country">
                            <option selected value="Pakistan">Pakistan</option>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="UAE">UAE(United Arab Emarat)</option>
                            <option value="USA">USA(United State of America)</option>
                            <option value="Russia">Russia</option>
                            <option value="SoudiaArabia">Soudia Arabia</option>
                            <option value="Iran">Iran</option>
                            <option value="Turkey">Turkey</option>
                        </select>
                        <div className="mt-4  w-full sm:col-span-2">
                            <button className="font-semibold text-white hover:text-black dark:hover:text-white bg-[#2B6CB0] w-full cursor-pointer px-8 py-[0.35rem] hover:bg-gray-200 dark:hover:bg-darkBackgroundTop duration-200 rounded-sm">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="pt-10 sm:pt-8 md:pt-0">
                    <Image width={400} height={400} src={Contact2} alt="Contact illustration" />
                </div>
            </div>
        </div>
    )
}