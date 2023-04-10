"use client"
import { AbdulBasit, Rectangles } from "@/components/assets/Images";
import ArrowBounc from "@/components/shared/ArrowBounc";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import TopNavbar from "../TopNavbar";
import Typed from "typed.js";
import { useEffect, useRef } from "react";


export default function Hero() {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {

        const typed = new Typed(el.current ? el.current : "", {
            strings: ["This is Abdul-Basit", "I am Frontend Developer", "I am A Designer", "I am student at PIAIC"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 200,
            backDelay: 300,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className="py-4 w-full sm:w-full max-w-screen-xl h-auto max-h-[40rem] md:min-h-[40rem] md:h-[50rem] lg:h-full bg-white dark:bg-gradient-to-tr from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom mx-auto rounded-t-[2.5rem]">
            <a id="home">
                <TopNavbar />
            </a>
            <section className="py-12 sm:py-4 md:py-0 relative flex items-center justify-evenly flex-col md:flex-row w-full px-0 sm:px-14 h-full  ">
                <div className="z-20 ">
                    <div className="relative">
                        <div className="bg-gray-100 dark:bg-darkBackgroundTop mb-1 flex justify-center items-center w-52 h-52 sm:w-72 sm:h-72 rounded-full shadow-xl dark:shadow-gray-800 border-2 dark:border-0 z-30">
                            <Image className="z-30 rounded-full object-cover object-top; " width={400} height={400} src={AbdulBasit} alt="Abdul-Basit" />
                        </div>
                        <div className="hidden sm:block -z-10 absolute -bottom-4 -right-4 sm:right-0 dark:opacity-40">
                            <Image src={Rectangles} alt="reactangle" />
                        </div>
                    </div>
                </div>
                <div className="w-auto sm:w-[40rem] p-0 mt-4 sm:mt-0 sm:p-3 z-20 space-y-4 flex flex-col items-center md:items-start ">
                    <h4 className="text-subHeading font-medium">--- Frontend Developer (Web 3.0)</h4>
                    <h1 className="text-heading opacity-80 font-semibold text-2xl sm:text-5xl dark:text-white ">Hi, <span className="tracking-tight leading-tight" ref={el}></span></h1>
                    <p className="px-2 text-center md:text-left sm:px-0 max-w-md sm:max-w-lg text-lg dark:text-[#919eb1]">As salam o alikum , My Name is Abdul-Basit . I am a Web-Developer && Frontend Developer focused on making clean , User's friendly UI and good SEO for search Engines.</p>
                    <button className="group flex items-center pl-2 border-2 border-subHeading rounded-full">
                        <span className="px-2">More About me</span>
                        <ArrowBounc right={true} />
                    </button>
                </div>
                <div className="absolute top-10 sm:top-14 right-20 sm:right-28 animate-pulse dark:opacity-40">
                    <Image src={Rectangles} alt="reactangle" />
                </div>
                <div className={`w-full h-80 sm:h-[20rem] bg-gray-100 dark:bg-darkBackgroundTop absolute bottom-0`}></div>
            </section>
        </div>
    )
}