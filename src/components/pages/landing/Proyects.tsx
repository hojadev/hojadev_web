import ProyectCard from "@/components/common/ProyectCard";

export default function Proyects(){
    return(
        <section className="bg-primary-color w-full flex justify-center">
            <div className="w-[50%] my-12">
                <h3 className="text-secondary-color text-4xl font-extrabold">
                    Proyectos de Ejemplo
                </h3>
                <div className="flex flex-row gap-16 justify-center mt-12">
                    <ProyectCard src="/proyect_1.png" alt="Ejemplo de blog" text="Ejemplo de blog tecnologico de hoja dev" link="www.google.com "/>
                    <ProyectCard src="/proyect_2.png" alt="Ejemplo de Landing Page" text="Landing para la empresa XXXXX para lanzamiento de producto" link="www.google.com "/>
                    <ProyectCard src="/proyect_3.png" alt="Ejemplo de E-Commerce" text="Ejemplo de de e commerce para venta de ropa" link="www.google.com "/>
                </div>
            </div>
        </section>
    )
}