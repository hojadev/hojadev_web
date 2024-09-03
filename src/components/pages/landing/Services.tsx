"use client"

import ButtonCard from "@/components/common/ButtonCard";
import Image from "next/image";
import Link from "next/link";

export default function Services(){
    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      };
    return(
        <section className="flex flex-col md:items-center md:justify-center my-6 gap-16">

            <div className="flex flex-col md:flex-row gap-5 md:gap-40 m-auto w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] justify-center items-center">
                <Image 
                width={378} 
                height={248}
                src={'/services_1.png'}
                alt="Foto de paginas web empresariales"/>
                <div className="lg:w-[50%] md:w-[70%] flex flex-col gap-4">
                    <h3 className="text-title text-4xl ">Paginas Web</h3>
                    <p className="text-xl font-extralight">
                        Desde landing pages para lanzamientos de productos y portafolios hasta sitios web corporativos, creamos páginas web personalizadas para tus necesidades. Marca tu presencia digital y expande los horizontes de tu negocio, <strong>desde solo $100.000 CLP.</strong>
                    </p>
                    <button onClick={scrollToBottom} className={ `bg-primary-color flex justify-center rounded-xl mt-1 shadow-md w-fit hover:scale-105 duration-150`}>
                        <p className={ `text-secondary-color px-16 py-2 text-center`}>Cotizar</p>
                    </button>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-40 m-auto w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] justify-center items-center ">
                <div className="lg:w-[50%] md:w-[70%]">
                    <h3 className="text-title text-4xl ">Aplicaciones Web</h3>
                    <p className="text-xl font-extralight">
                    Convierte tus ideas en realidad con nuestras soluciones personalizadas. <strong>Desde aplicaciones de gestión para tu negocio o E-Commerce</strong> hasta cualquier otra necesidad digital, cotiza con nosotros y hagamos posible tu visión.
                    </p>
                    <button onClick={scrollToBottom} className={ `bg-primary-color flex justify-center rounded-xl mt-1 shadow-md w-fit hover:scale-105 duration-150`}>
                        <p className={ `text-secondary-color px-16 py-2 text-center`}>Cotizar</p>
                    </button>
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