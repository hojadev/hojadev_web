import React from "react"

export default function LoadingScreen(){
    return(
        <div className=" my-56 md:my-40 flex flex-col justify-center items-center w-[60%] gap-8">
            <div className="loader"></div> 
            <div className="flex flex-row gap-1 justify-center items-center">
                {/* <p className=" animate-bounce text-4xl font-extrabold">L</p>
                <p className=" animate-bounce text-4xl font-extrabold delay-1">O</p>
                <p className=" animate-bounce text-4xl font-extrabold delay-2">A</p>
                <p className=" animate-bounce text-4xl font-extrabold delay-1">D</p>
                <p className=" animate-bounce text-4xl font-extrabold delay-2">I</p>
                <p className=" animate-bounce text-4xl font-extrabold delay-1">N</p>
                <p className=" animate-bounce text-4xl font-extrabold delay-2">G</p> */}
            </div>
        </div>
    )
}