"use client"


import PostCard from "@/components/pages/blog/PostCard"
import { getPosts } from "@/lib/api"
import { PostData } from "@/lib/types"
import { useEffect, useState } from "react"
import LoadingScreen from "../../components/common/LoadingScreen"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"

export default function Blog(){

    const [posts, SetPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const searchName = searchParams.get('search');
    const [searchText, setSearchText] = useState({search:""})
    const pathname = usePathname();
  
    // Construir la URL completa
    const [fullUrl,setFullUrl] = useState(`${pathname}?${searchParams.toString()}`);

    
    useEffect( () => {
        const handleGetPosts = async() => {
            try{
                setLoading(true)
                let postsData = await getPosts()
                console.log(searchName)
                if (category && category !== 'ALL') {
                    postsData = postsData.filter((post: PostData) => post.category === category);
                }
        
                if (searchName && searchName.trim()) {
                    postsData = postsData.filter((post: PostData) =>
                        post.title.toLowerCase().includes(searchName.toLowerCase())
                    );
                }
                SetPosts(postsData)
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
            
        }
        handleGetPosts()
        console.log(fullUrl)
        setFullUrl(`${pathname}?${searchParams.toString()}`)
    }, [category, fullUrl])
    
        const captureValues = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) : void => {
            e.preventDefault()
            const target = e.target as HTMLInputElement | HTMLTextAreaElement;
            
            setSearchText({...searchText, [target.name]:target.value})
            console.log(searchText)
        }
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <main className="flex flex-col justify-center items-center">
                <h2 className="text-secondary-color bg-primary-color text-3xl md:text-5xl font-extrabold py-2 px-8 text-center rounded-lg mt-12 ">Ultimos Post</h2>
                <form className="flex flex-row w-[50%] justify-center items-center gap-4 m-auto my-8" action="">
                    <input type="text" name="search" onChange={captureValues} className="bg-primary-color p-2 px-4 w-[70%] rounded-lg text-secondary-color text-xl" placeholder="Busqueda por nombre publicacion" />
                    <a href={`blog?category=${category ? category : "ALL"}${searchText.search !== "" ? `&search=${searchText.search}`: ""}`} type="submit" className="bg-primary-color p-1 rounded-lg"> 
                        <Image 
                        src="/search.svg"
                        width={34}
                        height={34}
                        alt="Search icon"
                        className="rounded-full"
                    />     
                    </a>
                </form>
                {category ? <Link className="w-[200px] m-auto bg-primary-color text-secondary-color text-center text-xl font-semibold rounded-lg shadow-xl mb-12" href="/blog">Limpiar Filtros</Link> : ""}
                <div className="flex flex-row justify-evenly items-center mb-44 md:mb-52 md:mt-12 md:w-[70%] m-auto flex-wrap gap-8">
                {!loading ? posts.map((post: PostData | null)  => {
                    if(post){
                        return (
                            <PostCard 
                                key={post.id}
                                title={post.title} 
                                id={post.id}
                                subtitle={post.subtitle}
                                content={post.content}
                                category={post.category}
                                date={post.date}
                                />
                        )
                    }
                })
                : <LoadingScreen/>}
                {posts.length < 0 ? <h1 className=" my-64 text-6xl">No hay post lo siento :\</h1> : ""}
                </div>
            </main>
        </Suspense>
    )
}