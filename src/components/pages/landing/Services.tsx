import ButtonCard from "@/components/common/ButtonCard";
import Image from "next/image";

export default function Services(){
    return(
        <section className="flex flex-col md:items-center md:justify-center my-6 gap-16">

            <div className="flex flex-col md:flex-row gap-5 md:gap-40 m-auto md:w-[80%] lg:w-[70%] xl:w-[50%] justify-center items-center">
                <Image 
                width={378} 
                height={248}
                src={'/services_1.png'}
                alt="Foto de paginas web empresariales"/>
                <div className="lg:w-[50%] md:w-[70%]">
                    <h3 className="text-title text-4xl ">Paginas Web</h3>
                    <p className="text-xl font-extralight">
                        Desde landing page para lanzamientos de productos, portafolios o presentacion de negocios hasta sitios web para tu negocio. <br/> 
                        Creamos una pagina web personalizada para tus necesidades. 
                        Marca presencia digital y expande los horizontes de tu negocio desde los <strong> $100.000 CLP </strong>
                    </p>
                    <ButtonCard isDark={false} text="Cotizar" href="devhoja@gmail.com"/>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-40 m-auto md:w-[80%] lg:w-[70%] xl:w-[50%] justify-center items-center">
                <div className="w-[50%]">
                    <h3 className="text-title text-4xl ">Aplicaciones Web</h3>
                    <p className="text-xl font-extralight">
                    Aplicaciones web de gestion para tu negocio, o cualquier idea que tengas cotizala con nosotros para poder llevarla a la realidad.
                    </p>
                    <ButtonCard isDark={false} text="Cotizar"  href="devhoja@gmail.com"/>
                </div>
                <Image 
                width={378} 
                height={248}
                src={'/services_2.png'}
                alt="Foto de paginas web empresariales"/>
            </div>
        </section>
    )
}