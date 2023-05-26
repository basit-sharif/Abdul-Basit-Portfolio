import { Contact, Full_stack, Teaching } from "@/components/assets/Images";
import Image from "next/image";
import Link from "next/link";

export default function MyServices() {
    return (
        <div className="space-y-4 py-20 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tl  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom">
            <p className="text-4xl font-semibold underline">My Services</p>
            <div className="h-full w-full py-6 relative">
                <div className="absolute left-2 md:left-8 lg:left-1/2 lg:right-1/2 h-[41rem] w-[0.16rem] rounded-full bg-blue-200 dark:bg-[#3e2a4e] z-20"></div>
                <div className="absolute left-2 md:left-8 lg:left-1/2 lg:right-1/2 h-[41rem] w-[0.17rem] rounded-full bg-blue-400 dark:bg-[#5c3a79] z-30"></div>
                <div className="flex justify-start pl-5 md:pl-[6.5rem] mt-4">
                    <div className="bg-gray-200 dark:bg-transparent flex border text-left pl-3 md:pl-5 rounded-xl">
                        <div className="py-2 md:py-6 min-w-[8rem] sm:min-w-[10rem] md:min-w-[14rem] max-w-[15rem] space-y-2">
                            <h2 className="text-xl font-semibold text-blue-300">Full Stack Web Dev</h2>
                            <p className="text-xs md:text-base font-sans tracking-wide">I am a Full stack web Developer focused on making clean , User's friendly UI</p>
                            <div className="flex space-x-4 dark:text-heading">
                                <Link href={"/#contact"} className="flex items-center gap-1">
                                    <div className="w-4">
                                        <Image src={Contact} alt="contact" />
                                    </div>
                                    Get in Touch</Link>
                                <Link href={"/#projects"}>Check works</Link>
                            </div>
                        </div>
                        <div className="w-44 border rounded-tr-xl rounded-br-xl">
                            <Image src={Full_stack} className="rounded-tr-xl rounded-br-xl" alt="Full stack web developer" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-start md:justify-end pl-5 md:pl-0 pr-0 md:pr-[7.5rem] lg:pr-28">
                    <div className="bg-gray-200 dark:bg-transparent flex border text-left pl-3 md:pl-5 rounded-xl my-4">
                        <div className="min-w-[8rem] sm:min-w-[10rem] max-w-[14.1rem] sm:max-w-[15rem] md:min-w-[14rem] py-2 md:py-4 pr-1 space-y-1">
                            <h2 className="text-xl font-semibold text-blue-300">Teaching </h2>
                            <p className=" text-xs md:text-base font-sans tracking-wide">I am a teacher at youtube and have a website to teach you and be ready to dive into the world of technologies.</p>
                            <div className="flex space-x-4 dark:text-heading">
                                <Link href={"https://www.youtube.com/@leadingbright2580"}>youtube</Link>
                                <button>Launch app</button>
                            </div>
                        </div>
                        <div className="w-44 border rounded-tr-xl rounded-br-xl">
                            <Image src={Teaching} className="rounded-tr-xl rounded-br-xl" alt="Full stack web developer" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-start pl-5 md:pl-28">
                    <div className="bg-gray-200 dark:bg-transparent flex border text-left pl-3 md:pl-5 rounded-xl">
                        <div className="py-2 md:py-6 min-w-[8rem] sm:min-w-[10rem] md:min-w-[14rem] max-w-[15rem] space-y-2">
                            <h2 className="text-xl font-semibold text-blue-300">Graphic Designer</h2>
                            <p className="text-xs md:text-base font-sans tracking-wide">I am a Graphic Designer and Product Designer also.I make design of websites</p>
                            <div className="flex space-x-4 dark:text-heading">
                                <Link href={"/#projects"}>Check works</Link>
                            </div>
                        </div>
                        <div className="w-44 border rounded-tr-xl rounded-br-xl">
                            <Image src={Full_stack} className="rounded-tr-xl rounded-br-xl" alt="Full stack web developer" />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}