import SocialsDark from "@/components/common/SocialsDark";

export default function Footer(){

    return(
        <footer className="bg-primary-color h-[200px] flex flex-row items-center justify-around flex-wrap">
            <h2 className="text-secondary-color text-3xl md:text-5xl font-extrabold">HOJA.DEV</h2>
            <SocialsDark/>
        </footer>
    )
}