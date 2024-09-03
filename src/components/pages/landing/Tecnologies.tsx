import Image from "next/image";

export default function Tecnologies(){

    return(
        <section className="flex flex-col items-center flex-wrap">
            <h3 className="font-extrabold text-2xl md:text-5xl w-[70%] text-balance text-center">TECNOLOGIAS, LENGUAJES Y HERRAMIENTAS</h3>
            <div className="flex flex-row gap-20 my-16 flex-wrap justify-center">
                <Image width={50} height={50} alt="Icon" src={'/Firebase.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/Javascript.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/Nodejs.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/Nextjs.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/React.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/TailwindCSS.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/TypeScript.svg'}/>
                <Image width={80} height={80} alt="Icon" src={'/mysql.svg'}/>
                <Image width={60} height={60} alt="Icon" src={'/html.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/css.svg'}/>
                <Image width={50} height={50} alt="Icon" src={'/express.svg'}/>
            </div>
        </section>
    )
}