"use client"
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoMdClose } from 'react-icons/io';
import { NavbarItems, navbarItemsType } from '@/components/utils/typesAndArrays/NavbarItems';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function SideNavbar() {
    const [sideBar, setSideBar] = useState(true);
    return (
        <div className="hidden lg:flex z-40 fixed top-0 right-0 h-screen w-[4.5rem] bg-transparent items-end flex-col py-14">
            <div onClick={() => { setSideBar(!sideBar) }} className='w-14 bg-white hover:bg-gray-200 active:bg-gray-300 dark:bg-darkBackgroundTop dark:opacity-80 flex justify-center py-2 h-10 rounded-l-lg cursor-pointer'>
                {sideBar ?
                    <IoMdClose fill='purple' size={27} />
                    : <TfiMenuAlt fill='purple' size={26} />
                }
            </div>
            <div className="w-full h-full flex flex-col items-center py-8 space-y-6 lg:space-y-8">
                {NavbarItems.map((items: navbarItemsType, index: number) => (
                    <a key={index + 1} href={items.link}>
                        <div className={`${sideBar ? "visible" : "invisible"} w-12 h-12 border-2 border-gray-300 hover:border-gray-400 bg-white dark:bg-darkBackgroundTop rounded-full flex justify-center items-center cursor-pointer`}>
                            <abbr title={items.abbriviation}><Image className='w-6 sm:8' src={items.icon} alt="icons" /></abbr>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
