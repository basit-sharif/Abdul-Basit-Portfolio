// import { CarouselCardDataType } from "@/components/utils/CarouselCardData";
// import Image from "next/image";
// import Link from "next/link";
// import { BsArrowRightShort } from "react-icons/bs";
// import { GoMarkGithub } from "react-icons/go";
// import { RiExternalLinkFill } from "react-icons/ri";

// export default function ProjectsCarouselCard({ data }: { data: CarouselCardDataType }) {
//     return (
//         <div className="bg-gray-200 dark:bg-[#151030] p-4 min-h-[30rem] rounded-2xl shadow-xl cursor-pointer">
//             <div className="overflow-hidden object-contain group h-52 min-w-[6rem] w-full relative sm:w-full">
//                 <Image className="rounded-t-2xl group-hover:scale-105 duration-500 " src={data.images} alt={data.alt} />
//                 <div className="group-hover:scale-105 space-x-6 flex justify-center items-center absolute inset-0 rounded-t-2xl invisible group-hover:visible bg-black opacity-40 duration-500">
//                     <Link href={data.github} target="_blank">
//                         <GoMarkGithub fill="blue" size={30} />
//                     </Link>
//                     <Link href={data.link} target="_blank">
//                         <RiExternalLinkFill fill="red" size={30} />
//                     </Link>
//                 </div>
//             </div>
//             <div className="text-start p-2 space-y-2">
//                 <p className="text-base text-gray-600 dark:text-gray-100">{data.subHeading}</p>
//                 <h2 className=" text-2xl text-subHeading font-semibold">{data.heading}</h2>
//                 <p className="max-w-[24rem]">{data.content}</p>
//                 <Link href={data.link} target="_blank"><button className="mt-2 flex group underline">{data.btn}<div className="translate-x-0 group-hover:translate-x-1 duration-300"><BsArrowRightShort size={25} /></div></button></Link>
//             </div>
//         </div>
//     )
// }

















import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { RiExternalLinkFill } from "react-icons/ri";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function ProjectsCarouselCard({ data, imageData }: { data: any, imageData: any }) {
    const [fieldsOfItems, setFieldsOfItems] = useState(data.fields)
    return (
        <div className="bg-gray-200 dark:bg-[#151030] p-4 min-h-[30rem] rounded-2xl shadow-xl cursor-pointer">
            <div className="overflow-hidden object-contain group h-52 min-w-[6rem] w-full relative sm:w-full">
                {imageData.map((item: any, index: number) => (
                    <div key={index + 3245}>
                        {item.sys.id == fieldsOfItems.imageForCard.sys.id ?
                            <Image width={900} height={900} className="rounded-t-2xl group-hover:scale-105 duration-500 " src={"https:" + item.fields.file.url} alt={fieldsOfItems.imageAltText} />
                            : <div></div>}
                    </div>
                )
                )}
                <div className="group-hover:scale-105 space-x-6 flex justify-center items-center absolute inset-0 rounded-t-2xl invisible group-hover:visible bg-black opacity-40 duration-500">
                    <Link href={fieldsOfItems.github} target="_blank">
                        <GoMarkGithub fill="blue" size={30} />
                    </Link>
                    <Link href={fieldsOfItems.link} target="_blank">
                        <RiExternalLinkFill fill="red" size={30} />
                    </Link>
                </div>
            </div>
            <div className="text-start p-2 space-y-2">
                <p className="text-base text-gray-600 dark:text-gray-100">{fieldsOfItems.subHeading}</p>
                <h2 className=" text-2xl text-subHeading font-semibold">{documentToReactComponents(fieldsOfItems.heading)}</h2>
                <p className="max-w-[24rem]">{fieldsOfItems.description}</p>
                <Link href={fieldsOfItems.link} target="_blank"><button className="mt-2 flex group underline">{fieldsOfItems.btn}<div className="translate-x-0 group-hover:translate-x-1 duration-300"><BsArrowRightShort size={25} /></div></button></Link>
            </div>
        </div>
    )
}