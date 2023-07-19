"use client"
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function GoToTop({ heightOfPage }: { heightOfPage: number }) {
  if (heightOfPage !== 0) {
    return (
      <a href="/#home" aria-label="jump to main(home) section of webpage">
        <div className="fixed bottom-3 sm:bottom-5 left-6 sm:left-10 flex justify-center items-center w-7 h-7 rounded-full bg-gray-200 dark:bg-heading dark:md:bg-darkBackgroundTop z-50 -rotate-90 "><BsArrowRightShort size={20} /></div>
      </a>
    )
  }
  return (
    <div></div>
  )
}