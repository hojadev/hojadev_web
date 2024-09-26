import ProjectCard from "@/components/common/ProjectCard";

export default function Projects(){
    return(
        <section className="bg-primary-color w-full flex justify-center items-center flex-wrap view">
            <div className="md:w-[60%] my-12 flex flex-col justify-start items-center flex-wrap">
                <h3 className="text-secondary-color text-4xl font-extrabold text-center">
                    Proyectos de Ejemplo
                </h3>
                <div className="flex flex-row gap-4 md:gap-16 justify-center items-center mt-12 flex-wrap animation-appear ">
                    <ProjectCard src="/blog_tech.png" alt="Ejemplo de blog" descripcion="Hecho con React y base de datos en Firebase. Cuenta con autenticacion (Firebase con Google Auth), busqueda, crear posts." text="Ejemplo de blog tecnologico" link="https://blog-tecnologico.vercel.app/" linkGithub="https://github.com/hojadev/blog-tecnologico"/>
                    <ProjectCard src="/proyect_4.jpeg" alt="Ejemplo de Landing Page" descripcion="Landing page para una empresa de seguridad de camiones" text="Ejemplo de landing page para empresa de seguridad" link="https:www.byfspa.cl" linkGithub="https://github.com/hojadev/"/>
                    {/* <ProyectCard src="/proyect_2.png" alt="Ejemplo de Landing Page" text="Landing para la empresa XXXXX para lanzamiento de producto" link="www.google.com "/> */}
                    {/* <ProyectCard src="/proyect_3.png" alt="Ejemplo de E-Commerce" text="Ejemplo de de e commerce para venta de ropa" link="www.google.com "/> */}
                </div>
            </div>
        </section>
    )
}