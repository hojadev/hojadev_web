import Image from "next/image";
import { CardInfo } from "@/lib/types";
import ButtonCard from "./ButtonCard";

export default function ProyectCard({src,alt,text,link} : CardInfo){
    return (
        <article className="flex flex-col items-center justify-between h-[450px]">
            <Image
            width={270}
            height={305}
            src={src}
            alt={alt}
            className="rounded-xl shadow-sm"
            />
            <p className="text-secondary-color w-[270px] text-xl font-light">{text}</p>
            <ButtonCard isDark={true} text="Ir a la Web" href="www.google.com"/>
        </article>
    )
}