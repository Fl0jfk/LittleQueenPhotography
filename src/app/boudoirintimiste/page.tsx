"use client"

import { DataProvider } from "../contexts/data"
import Image from "next/image"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Slider from "../components/Slider/Slider"
import imageTest from "../assets/imageTest.jpg"

export default function BoudoirIntimiste (){
    return (
        <>
            <DataProvider>
                <Header/>
                <main className="w-full h-full flex flex-col pt-[10vh] z-[0]">
                    <h1 className="text-6xl uppercase self-center text-white m-10">Boudoir Intimiste</h1>
                    <Slider/>
                    <div className="flex mt-8 p-24 pl-12 sm:flex-col gap-4 relative justify-end md:p-12 sm:p-4 max-w-[1200px] mx-auto w-full mb-8 lg:mb-16 md:mb-32 sm:w-auto">
                        <div className="p-12 text-center top-[150px] left-[230px] lg:left-[200px] lg:top-[130px] md:left-[150px] md:top-[80px] w-[400px] h-[400px] bg-red-700 flex flex-col justify-between items-center absolute sm:relative sm:w-full sm:h-full sm:top-0 sm:left-0 md:h-[350px] sm:p-8 sm:w-auto">
                            <h2 className="text-white text-4xl">Des portraits doux & binveillants</h2>
                            <p className="text-white text-xl">Spécialisée dans la photo intimiste, je vous invite dans mon univers sensuel et émotionnel. Je réalise aussi pour vous des portraits plus classiques doux et expressif.</p>
                        </div>
                        <div className="bg-red-700 p-2 h-full flex items-center justify-center self-end sm:w-auto sm:mx-auto">
                            <Image src={imageTest} alt="" width={500} height={500} />
                        </div>
                    </div>
                </main>
                <Footer/>
            </DataProvider>
        </>
    )
}