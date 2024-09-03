import { PostData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({title, subtitle, date, category, id} : PostData ){

    

    return(
        <article className="bg-secondary-color flex flex-col w-[270px] sm:w-[300px] h-[400px] md:w-[380px] md:h-[350px] justify-around text-primary-color rounded-md shadow-2xl border-2 border-[#FBEAEB] p-4 shadow_post hover:scale-105 duration-150">
            <h2 className="text-3xl font-extrabold">{title}</h2>
            <div className="flex flex-row justify-between items-center ">
                <Link href={`/blog?category=${category}`} className="p-2 border-4 border-[#fbeaeb] w-fit px-4 rounded-full my-2 text-center text-[#fbeaeb] font-semibold italic cursor-pointer">{category}</Link>
                <p className="text-lg sm:text-xl font-light">{date}</p>
            </div>
            <p className="text-xl italic font-light">{subtitle}</p>
            <div className="flex flex-row items-center gap-3 cursor-pointer">
                <Link href={`/blog/${id}`} className="underline text-xl">Seguir leyendo...</Link>
                <Image
                    width={25}
                    height={25}
                    alt="flecha para seguir leyendo"
                    src={'/flecha.svg'}
                />
            </div>
        </article>
    )
}