'use client'
import Socials from "@/components/common/Socials";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactForm } from "@/lib/types";

export default function Contact(){

    const [formData, setFormData] = useState({
        nombre:"",
        email:"",
        asunto:"",
        message:""
    })

    const captureValues = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) : void => {
        e.preventDefault()
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        
        setFormData({...formData, [target.name]:target.value})
    }

    const handleForm = (e : React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault()
        console.log(formData)
    }


    return(
        <section className="flex flex-row gap-36 items-center justify-center mb-24 flex-wrap md:flex-nowrap">
            <div className="md:w-[60%]  md:mx-0">
                <form onSubmit={handleForm} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="nombre" className="text-xl">Nombre</label>
                        <input type="text" name="nombre" onChange={captureValues} placeholder="Ingresa tu nombre..." className="h-8 rounded-md p-4 text-secondary-color bg-color-primary"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-xl">Email</label>
                        <input type="email" name="email" onChange={captureValues} placeholder="ejemplo@correo.com" className="h-8 rounded-md p-4 text-secondary-color bg-color-primary" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="asunto" className="text-xl">Asunto</label>
                        <input type="text" name="asunto" onChange={captureValues} placeholder="Asunto"  className="h-8 rounded-md p-4 text-secondary-color bg-color-primary"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-xl">Mensaje</label>
                        <textarea name="message" onChange={captureValues} className="rounded-md p-4 text-secondary-color bg-color-primary"></textarea>
                    </div>
                    <button type="submit" className="bg-primary-color text-secondary-color text-xl rounded-lg py-2">Enviar</button>
                </form>
            </div>
            <div className="md:w-[50%] mx-4 md:mx-0 flex flex-col justify-center items-start gap-4">
                <h3 className="italic font-medium text-4xl">Contacto</h3>
                <p className="text-lg font-thin">Cotiza tu proyecto de codigo o solucion informatica conmigo</p>
                <p className="text-xl"><strong>devhoja@gmail.com</strong></p>
                <a className="flex flex-row gap-4" href="/example_pdf.pdf" download={"cv_fernando_zaguirre.pdf"}>
                    <Image
                    width={50}
                    height={50}
                    alt="Icono de un PDF para descargar el curriculum de Hoja dev"
                    src={"/pdf_icon.svg"}
                    />
                    <p className="text-subtitle underline">DESCARGAR CURRICULUM VITAE FERNANDO ZAGUIRRE</p>
                </a>
                <Socials/>
            </div>
        </section>
    )
}