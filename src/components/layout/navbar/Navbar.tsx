'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Navbar(){

    const pathname = usePathname()
    const [toggleMenu, setToggleMenu]= useState(false)

    return(
    <header className="flex justify-center sticky top-0 z-50 bg-secondary-color">
        <nav className="flex flex-row justify-between items-center w-[100%] md:w-[90%] lg:w-[70%] my-4 sticky top-0 z-50">
            <div className="flex flex-row justify-center items-center md:gap-2">
                <h2 className="text-primary-color mr-2 mx-2 md:mr-0 text-3xl md:text-5xl font-extrabold">HOJA.DEV</h2>
                <Image width={30} height={30} src={'/logo_light.svg'} alt="Logo De Hoja Dev" className="mb-1 md:w-[50px]"/>
            </div>

            <Image 
            width={50} 
            height={50} 
            src={"/menu.svg"} 
            alt="Menu display mobile" 
            onClick={() => setToggleMenu(!toggleMenu)}
            className="block md:hidden mx-2"/>
            <div className={toggleMenu ? "flex absolute bg-secondary-color top-16 w-full min-h-dvh justify-center z-2": "hidden"}>
                <ul className="mt-[100px] flex flex-col gap-10 sticky">
                    <Link href={'/'} onClick={() => setToggleMenu(!toggleMenu)}>
                    <li className={ `text-2xl font-bold p-2 
                        ${pathname === '/' ? "bg-primary-color text-secondary-color rounded-lg" : ""}`}
                        >HOME
                    </li>
                    </Link> 
                    <Link href={'/blog'} onClick={() => setToggleMenu(!toggleMenu)}>
                        <li className={ `text-2xl font-bold p-2 
                            ${pathname.includes("/blog") ? "bg-primary-color text-secondary-color rounded-lg" : ""}`}
                        >BLOG
                        </li>
                    </Link> 
                    <Link href={'/about'} onClick={() => setToggleMenu(!toggleMenu)}>
                        <li className={ `text-2xl font-bold p-2 
                            ${pathname === '/about' ? "bg-primary-color text-secondary-color rounded-lg" : ""}`}
                        >ABOUT
                        </li>
                        </Link>
                </ul>
            </div>

            <ul className="hidden md:flex flex-row flex-wrap gap-5 text-center">
                <Link href={'/'}>
                    <li className={ `text-2xl font-bold p-2
                        ${pathname === '/' ? "bg-primary-color text-secondary-color rounded-lg" : ""}`}
                    >HOME
                    </li>
                </Link> 
                <Link href={'/blog'}>
                    <li className={ `text-2xl font-bold p-2 
                        ${pathname === '/blog' ? "bg-primary-color text-secondary-color rounded-lg" : ""}`}
                    >BLOG
                    </li>
                </Link> 
                <Link href={'/about'}>
                    <li className={ `text-2xl font-bold p-2 
                        ${pathname === '/about' ? "bg-primary-color text-secondary-color rounded-lg" : ""}`}
                    >ABOUT
                    </li>
                </Link> 
            </ul>
        </nav>
    </header>
    )

}