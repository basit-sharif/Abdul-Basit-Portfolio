import Image from "next/image";
import { TopRight, BottomLeft } from "@/components/assets/Images";

export default function BackgroundImage() {
    return (
        <div className="fixed inset-0 bg-fullBackground -z-50">
            <div className="absolute top-0 right-0">
                <Image src={TopRight} alt="small image for TopRight" />
            </div>
            <div className="absolute bottom-0 left-0">
                <Image src={BottomLeft} alt="small image for BottomLeft" />
            </div>
        </div>
    )
}