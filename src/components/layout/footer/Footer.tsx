import SocialsDark from "@/components/common/SocialsDark";
import Image from "next/image";

export default function Footer(){

    return(
        <footer className="bg-primary-color h-[200px] flex flex-row items-center justify-around flex-wrap">
            <div className="flex flex-row justify-center items-center md:gap-2">
                <h2 className="text-secondary-color text-3xl md:text-5xl font-extrabold">HOJA.DEV</h2>
                <Image width={30} height={30} src={'/logo.svg'} alt="Logo De Hoja Dev" className="mb-2 md:w-[50px]"/>
            </div>
            <SocialsDark/>
        </footer>
    )
}