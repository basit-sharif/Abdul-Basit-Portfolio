import { Logo } from "@/components/assets/Images";
import Image from "next/image";
import Link from "next/link";
import { ImGithub } from "react-icons/im"
import { GrYoutube } from "react-icons/gr"
import { BsTelephonePlusFill } from "react-icons/bs"
import { SiFacebook } from "react-icons/si"
import { IoLogoLinkedin } from "react-icons/io"
import { SiGmail } from "react-icons/si"


export default function Footer() {
    return (
        <div className={`w-full bg-[#F3F4F6] dark:bg-gradient-to-tl  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            <div className="pb-2 text-center bg-white dark:bg-darkBackgroundTop rounded-t-3xl w-full">
                <div className={`py-4 flex items-center justify-around text-center`}>
                    <div className="hidden sm:flex items-center space-x-1">
                        <Image className="block" width={45} src={Logo} alt="Abdul-Basit Logo" />
                        <Link href="/"><h2 className="text-heading font-bold text-xl dark:text-[#aab5c5]">Abdul <span className="font-semibold">Basit</span></h2></Link>
                    </div>
                    <ul className="flex justify-center items-center space-x-4">
                        <li><Link href="/https://github.com/basitgggg"><ImGithub fill="#7A879B" size={26} /></Link></li>
                        <li><Link href="https://www.youtube.com/@leadingbright2580"><GrYoutube fill="#7A879B" size={24} /></Link></li>
                        <li><Link href="tel:+923023763614"><BsTelephonePlusFill fill="#7A879B" size={22} /></Link></li>
                        <li><Link href="https://www.facebook.com/profile.php?id=100053174165999"><SiFacebook fill="#7A879B" size={26} /></Link></li>
                        <li><Link href="https://www.linkedin.com/in/abdul-basit-417920251/"><IoLogoLinkedin fill="#7A879B" size={26} /></Link></li>
                        <li><Link href="mailto:ba3568008@gmail.com"><SiGmail fill="#7A879B" size={26} /></Link></li>
                    </ul>
                </div>
                <p className="text-subHeading">© 2023 Abdul-Basit All CopyRights Reserved </p>
            </div>
        </div>
    )
}