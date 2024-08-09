import Socials from "@/components/common/Socials";
import Image from "next/image";

export default function HeroAbout() {
    return(
        <section className="flex flex-col items-center my-8 md:my-24">
            <Image 
            src="/hero.png"
            width={360}
            height={300}
            alt="Foto del Hero de Hoja dev"
            className="rounded-full mt-[52px]"
            />
            <div className="flex flex-col items-center md:gap-2 mt-2 justify-center text-wrap">
                <h1 className="text-4xl md:text-5xl font-extrabold gradient-title">HOJA.DEV</h1>
                <p className="text-3xl md:text-4xl font-extralight italic">Fernando Zaguirre</p>
            </div>
            <Socials/>
        </section>
    )
}