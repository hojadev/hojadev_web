import { BottonCardProps } from "@/lib/types"
import Link from "next/link"

export default function ButtonCard({isDark, text,href}: BottonCardProps){
    return(
        <Link href={href} target="_blank" className={ `${isDark ? "bg-secondary-color" : "bg-primary-color"} flex justify-center rounded-xl mt-1 shadow-md w-fit hover:scale-105 duration-150`}>
            <p className={ `${isDark ? "text-primary-color" : "text-secondary-color"} px-16 py-2 text-center`}>{text}</p>
        </Link>
    )
}