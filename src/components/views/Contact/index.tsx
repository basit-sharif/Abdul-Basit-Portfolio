import { Contact2 } from "@/components/assets/Images";
import ButtonFirst from "@/components/shared/ButtonFirst";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        alert("Thanks for Contacting us we will get soon in touch")
        emailjs.sendForm(`${process.env.EMAIL_JS_SERVIES_ID}`, `${process.env.EMAIL_JS_TEMPLETE_ID}`, form.current, `${process.env.EMAIL_JS_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
            });
        }
    }, [])
    return (
        <div className={`overflow-hidden px-3 py-14 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tr from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            <a id="contact"></a>
            <p className="text-3xl sm:text-4xl font-semibold underline">Contact Us</p>
            <div className="flex flex-col lg:flex-row justify-around items-center">
                <form onSubmit={sendEmail} ref={form} className="text-subHeading grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg  ">
                    <div className="flex flex-col items-start">
                        <label htmlFor="firstName" >First Name:</label>
                        <input name="first_name" placeholder="John" className="inputField w-full" id="firstName" type="text" />
                    </div>
                    <div className="flex flex-col items-start  ">
                        <label htmlFor="secondName" >Second Name:</label>
                        <input name="second_name" placeholder="Doe" className="inputField w-full" id="secondName" type="text" />
                    </div>
                    <div className="flex flex-col items-start ">
                        <label htmlFor="email" >Your's E-Mail Address:</label>
                        <input name="email" placeholder="i.e, Jondoe@gmail.com" className="inputField w-full" id="email" type="text" />
                    </div>
                    <div className="flex flex-col items-start ">
                        <label htmlFor="phone" >Your's Phone Number:</label>
                        <input name="phone_number" placeholder="i.e, +9237787615" className="inputField w-full" id="phone" type="text" />
                    </div>
                    <div className="flex flex-col items-start  sm:col-span-2">
                        <label htmlFor="country">Message why you want to contact us :</label>
                        <textarea className="inputField w-full" name="message" id="country" />
                        <div className="mt-4  w-full sm:col-span-2">
                            <button className="font-semibold text-white hover:text-black dark:hover:text-white bg-[#2B6CB0] w-full cursor-pointer px-8 py-[0.35rem] hover:bg-gray-200 dark:hover:bg-darkBackgroundTop duration-200 rounded-sm">Submit</button>
                        </div>
                    </div>
                </form>
                <div className="pt-10 sm:pt-8 md:pt-0">
                    <Image className="fade_right_rotate" width={400} height={400} src={Contact2} alt="Contact illustration" />
                </div>
            </div>
        </div>
    )
}