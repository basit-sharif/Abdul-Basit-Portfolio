import { BsArrowRightShort } from "react-icons/bs"
import { BsArrowDownShort } from "react-icons/bs"

export default function ArrowBounc({ right }: { right: boolean }) {
    return (
        <div className="flex rounded-full bg-subHeading h-10 w-10 items-center justify-center">
            {right ?
                <div className="translate-x-0 group-hover:translate-x-1 duration-300">
                    <BsArrowRightShort size={25} />
                </div> :
                <BsArrowDownShort size={25} />}
        </div>
    )
}