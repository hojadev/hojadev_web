import Image from "next/image";
import { CardInfoProps } from "@/lib/types";
import ButtonCard from "./ButtonCard";

export default function ProyectCard({src,alt,text,link, linkGithub, descripcion} : CardInfoProps){
    return (
        <article className="flex flex-col items-center justify-between h-[500px] w-[80%] md:w-full gap-8">
            <Image
            width={500}
            height={370}
            src={src}
            alt={alt}
            className="rounded-xl shadow-sm"
            />
            <div className="flex flex-col gap-1 md:w-[480px] w-[90%]">
                <p className="text-secondary-color  text-xl font-bold">{text}</p>
                <p className="text-secondary-color text-xl font-light">{descripcion}</p>
                <div>
                    <ButtonCard isDark={true} text="Ir a la Web" href={link}/>
                    <ButtonCard isDark={true} text="Github" href={linkGithub}/>
                </div>
            </div>
        </article>
    )
}