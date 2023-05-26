import { Contact2 } from "@/components/assets/Images";
import ButtonFirst from "@/components/shared/ButtonFirst";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import checkValidation from "./ValidationOfForm";

export default function Contact() {
    const form: any = useRef();
    const [isDisable, setDisable] = useState<boolean>(false);
    const [done, setDone] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();
        let firstChildValue = form.current.children[0].querySelector("#firstName");
        let secondChildValue = form.current.children[1].querySelector("#secondName");
        let emailChildValue = form.current.children[2].querySelector("#email");
        let phoneChildValue = form.current.children[3].querySelector("#phone");
        if (checkValidation(firstChildValue, secondChildValue, emailChildValue, phoneChildValue)) {
            setDone(true);
            setDisable(true);
            emailjs.sendForm(`${process.env.EMAIL_JS_SERVIES_ID}`, `${process.env.EMAIL_JS_TEMPLETE_ID}`, form.current, `${process.env.EMAIL_JS_PUBLIC_KEY}`)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            console.log("Please fill the inputs")
        }
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
            <div id="contact" />
            <h5 className="text-3xl sm:text-4xl font-semibold underline">Contact Us</h5>
            <div className="flex flex-col lg:flex-row justify-around items-center py-4">
                <div className={`${done ? "visible flex" : "invisible"} items-center justify-center fixed inset-0 opacity-80 bg-gray-900 z-40`}>
                    <div className="text-black py-4 px-6 bg-white opacity-100">
                        <p>Thanks for Contacting us we will get soon in touch</p>
                        <button className="py-1 border-2 px-2 rounded-md" type="button" aria-label="For display none" onClick={() => { setDone(false); }}>Ok</button>
                    </div>
                </div>
                <form onSubmit={sendEmail} ref={form} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg  ">
                    <div className="flex flex-col items-start text-red-400">
                        <label htmlFor="firstName" className="text-subHeading dark:text-gray-400">First Name:</label>
                        <input name="first_name" placeholder="John" className="text-subHeading dark:text-gray-400 inputField w-full" id="firstName" type="text" />
                    </div>
                    <div className="flex flex-col items-start text-red-400">
                        <label htmlFor="secondName" className="text-subHeading dark:text-gray-400" >Second Name:</label>
                        <input name="second_name" placeholder="Doe" className="text-subHeading dark:text-gray-400 inputField w-full" id="secondName" type="text" />
                    </div>
                    <div className="flex flex-col items-start text-red-400">
                        <label htmlFor="email" className="text-subHeading dark:text-gray-400" >Your's E-Mail Address:</label>
                        <input name="email" placeholder="i.e, Jondoe@gmail.com" className="text-subHeading dark:text-gray-400 inputField w-full" id="email" type="text" />
                    </div>
                    <div className="flex flex-col items-start text-red-400">
                        <label htmlFor="phone" className="text-subHeading dark:text-gray-400" >Your's Phone Number:</label>
                        <input name="phone_number" placeholder="i.e, +9237787615" className="text-subHeading dark:text-gray-400 inputField w-full" id="phone" type="text" />
                    </div>
                    <div className="text-subHeading dark:text-gray-400 flex flex-col items-start sm:col-span-2">
                        <label htmlFor="country">Message why you want to contact us :</label>
                        <textarea className="inputField w-full" name="message" id="country" />
                        <div className="mt-4  w-full sm:col-span-2">
                            <button type="submit" aria-label="This will submit application for contact through mail." disabled={isDisable} className="font-semibold text-white hover:text-black dark:hover:text-white bg-[#2B6CB0] w-full cursor-pointer px-8 py-[0.35rem] hover:bg-gray-200 dark:hover:bg-darkBackgroundTop duration-200 rounded-sm">Submit</button>
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