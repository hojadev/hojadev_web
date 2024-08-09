import Image from "next/image";

export default function Socials(){
    return (
        <div className="flex flex-row gap-6 mt-4 justify-center items-center z-1 md:z-0">
            <a href="https://github.com/hojadev" target="_blank" rel="noopener noreferrer" 
            className="duration-150">
                <Image width={50} height={50} src={'/github.svg'} alt="Link al Github de Hoja dev"/>
            </a>
            <a href="https://www.youtube.com/channel/UCIGNLJCgb5VHVfPzhyzXxfA" target="_blank" rel="noopener noreferrer" 
            className="duration-150">
                <Image width={50} height={50} src={'/youtube.svg'} alt="Link al canal de Youtube de Hoja dev"/>
            </a>
            <a href="https://github.com/hojadev" target="_blank" rel="noopener noreferrer" 
            className="duration-150">
                <Image width={50} height={50} src={'/ig.svg'} alt="Link al instagram de Hoja dev"/>
            </a>
            <a href="https://www.linkedin.com/in/fernando-zaguirre-8a27b8321/" target="_blank" rel="noopener noreferrer" 
            className="duration-150">
                <Image width={50} height={50} src={'/linkedin.svg'} alt="Link al perfil de linkedin de Hoja dev"/>
            </a>
        </div>
    )
}