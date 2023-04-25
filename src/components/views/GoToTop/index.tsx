import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function GoToTop() {
  return (
    <a href="#home"><div className="fixed bottom-3 sm:bottom-5 left-6 sm:left-10 flex justify-center items-center w-7 h-7 rounded-full bg-heading md:bg-darkBackgroundTop z-50"><div className="-rotate-90"><BsArrowRightShort size={20} /></div></div></a>
  )
}