import HeroAbout from "@/components/pages/about/HeroAbout";

export default function About(){
    return(
        <main className="flex flex-row justify-around flex-wrap">
            <div className="flex flex-row justify-around items-start m-4 md:m-0 md:w-[60%] flex-wrap">
                <HeroAbout/>
                <div className="flex flex-col md:w-[50%] mt-8 md:mt-28">
                    <h2 
                    className="text-secondary-color mr-2 md:mr-0 text-3xl md:text-5xl font-extrabold bg-primary-color py-2 w-full md:w-[300px] text-center rounded-xl mb-4 md:my-0 md:mt-12 ">
                        Sobre Mi
                    </h2>
                    <p className="text-xl font-light mt-4 mb-12 md:mb-0">Hola! mi nombre es Fernando Zaguirre pero mi nombre por internet es hoja, soy programador y actualmente estoy trabajando en desarrollo web. Trabajo con lenguajes como javascript, typescript y python. 
                    <br/> Me apasiona la tecnologia pero sobre todo crear soluciones practicas para negocios y personas. me gusta la simplicidad a la hora del diseno y la programacion, me gusta el hecho de hacer mas con menos.
                    <br/>Actualmente estoy retomando mis estudios de ingeneria informatica en INACAP.</p>
                </div>

            </div>
        </main>
    )
}