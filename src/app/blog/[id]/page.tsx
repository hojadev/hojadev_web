"use client"
import React, { useEffect, useState } from "react";
import {PostData} from '../../../lib/types';
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function BlogPost({ params } : {params: {id: string}}){
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState<PostData>({
        id:"",
        content:"",
        title:"",
        subtitle:"",
        date:"",
        category:""
    })

    const fecthPost = async() => {

        try {
            setLoading(true)
            const id = params.id
            const res = await fetch(`/api/postById/`, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(id)
            })
            const postData : PostData = await res.json()
            setPost(postData)
            console.log(postData)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        fecthPost()
    },[])

    if(loading){
        return <article className="m-auto flex flex-col justify-center items-center my-44">
                <LoadingScreen/>

            </article>
    }

    return(
        <article className="flex flex-col  m-auto justify-center items-center gap-8">
            <h2 className="text-5xl font-extrabold mt-24 mb-12">{post.title}</h2>
            <div className="flex flex-row justify-between  w-[95%] md:w-[80%] lg:w-[55%] flex-wrap">
                <Link href={`/blog?category=${post.category}`} className="font-regular text-2xl italic shadow bg-primary-color text-secondary-color py-2 px-6 text-center rounded-full">{post.category}</Link>
                <p>{post.date}</p>
            </div>
            <div className="text-markdown w-[95%] md:w-[80%] lg:w-[55%] flex flex-col gap-8 mb-16" dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
        </article>
    )
}