"use client"
import { Logo } from "@/components/assets/Images";
import ButtonFirst from "@/components/shared/ButtonFirst";
import Image from "next/image";
import { useTheme } from 'next-themes'
import { RiMoonClearFill } from 'react-icons/ri';
import { ImSun } from 'react-icons/im';
import { IoIosDesktop } from 'react-icons/io';
import { useEffect, useState } from "react";
import Wrapper from "@/components/shared/Wrapper";

export default function TopNavbar() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [toggleBetweeMode, setToggleBetweeMode] = useState(false);
    let curruntThemeToApply = (theme === 'system' ? systemTheme : theme);
    let curruntTheme = (theme === 'system' ? "system" : theme);

    return (
        <>
            <div className="bg-transparent h-auto w-full border-b-2 border-b-[#15325B] px-12">
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center space-x-1">
                        <Image className="hidden sm:block" width={45} src={Logo} alt="Abdul-Basit Logo" />
                        <h2 className="text-heading font-bold text-xl dark:text-[#aab5c5]">Abdul <span className="font-semibold">Basit</span></h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden sm:flex">
                            <ButtonFirst text="Download CV" />
                        </div>
                        <div onClick={() => { setToggleBetweeMode(!toggleBetweeMode) }} className="relative w-10 h-10 flex justify-center items-center bg-slate-50 dark:bg-darkBackgroundTop active:bg-slate-100 rounded-md  cursor-pointer">
                            {
                                curruntTheme === "dark" ?
                                    <div className="cursor-pointer">
                                        <RiMoonClearFill fill="#7A879B" size={26} />
                                    </div>
                                    :
                                    curruntTheme === "light" ?
                                        <div className="cursor-pointer">
                                            <ImSun fill="#4F5864" size={23} />
                                        </div>
                                        :
                                        <div className="cursor-pointer">
                                            <IoIosDesktop size={25} />
                                        </div>
                            }
                            <div className={` ${toggleBetweeMode ? "visible" : "invisible"} text-gray-800 absolute top-12 w-32 bg-slate-100 dark:bg-darkBackgroundTop z-40 rounded-lg py-[1px] shadow-xl dark:shadow-gray-900 border border-gray-300 dark:border-transparent`}>
                                <div onClick={() => { setTheme("light") }} className="flex gap-3 items-center hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-400 px-3 py-1">
                                    <ImSun fill="#4F5864" size={21} />
                                    <p>Light</p>
                                </div>
                                <div onClick={() => { setTheme("dark") }} className="flex gap-3 items-center hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-400 px-3 py-1">
                                    <RiMoonClearFill fill="#7A879B" size={20} />
                                    <p>Dark</p>
                                </div>
                                <div onClick={() => { setTheme("system") }} className="flex gap-3 items-center hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-400 px-3 py-1">
                                    <IoIosDesktop size={21} />
                                    <p>System</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div onClick={() => { setToggleBetweeMode(false) }} className={`${toggleBetweeMode ? "block" : "hidden"} w-screen h-screen fixed inset-0 bg-transparent z-30`}></div>
        </>
    )
}

