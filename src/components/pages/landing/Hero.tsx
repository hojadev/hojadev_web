import Socials from "@/components/common/Socials";
import Image from "next/image";

export default function Hero() {
    return(
        <section className="flex flex-col items-center">
            <Image 
            src="/hero.png"
            width={360}
            height={300}
            alt="Foto del Hero de Hoja dev"
            className="rounded-full mt-[52px]"
            />
            <div className="flex flex-col items-center md:gap-2 mt-2 justify-center text-wrap">
                <p className="text-3xl md:text-4xl font-extralight italic">Fernando Zaguirre</p>
                <h1 className="text-4xl md:text-5xl font-extrabold gradient-title">DESARROLLO FULLSTACK</h1>
                <p className="text-3xl md:text-4xl font-extralight italic">Paginas y Aplicaciones Web</p>
            </div>
            <Socials/>
        </section>
    )
}