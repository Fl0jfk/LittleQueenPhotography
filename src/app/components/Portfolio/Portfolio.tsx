"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useData } from "@/app/contexts/data";
import { useDispatch } from "react-redux";
import { setModalOpenPhotos, setPhotoDetails } from "@/app/redux/reducers/modal";
import Modal from "../Modals/Modal";

function shuffle(array:any) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default function PortfolioComp(){
    const data = useData();
    const allImages = [...data.imageArtistic,...data.imageBoudoirTexture,...data.imageBoudoir,...data.imageMomentsLife,...data.imageOutside,...data.imagePortrait,...data.imagePregnancy];
    const uniqueImages = Array.from(new Set(allImages.map(img => img.id))).map(id => allImages.find(img => img.id === id));
    const shuffledImages = shuffle(uniqueImages);
    const limitedImages = shuffledImages.slice(0, 12);
    const dispatch = useDispatch();
    const openModalPhotos = (photoDetails:any) => {
        dispatch(setPhotoDetails(photoDetails));
        dispatch(setModalOpenPhotos());
    };
    return (
        <>
            <Modal/>
            <section className="p-8 flex flex-col justify-center items-center w-full mx-auto max-w-[1440px] self-center">
                <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl w-full text-center'>Portfolio</h2>
                <motion.div className='grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-8 items-center justify-center w-full'>
                    <AnimatePresence>
                        {limitedImages.map((imgs:{name:string;id:number;link:string,shortDescription:string;description:string;cameraLink:string;latitude:string;longitude:string;date:string;softwareLink:string}) => {
                            return <Image
                                    alt={imgs.name}
                                    key={imgs.id}
                                    src={imgs.link}
                                    width={450}
                                    height={450}
                                    quality={50}
                                    className="h-full w-full rounded-3xl hover:scale-105 cursor-pointer transition ease-in-out duration-300"
                                    style={{objectFit:"cover"}}
                                    onClick={() => openModalPhotos({namePhotosUp:imgs.name, nameLinkPhotosUp:imgs.link, shortDescriptionPhotosUp:imgs.shortDescription, descriptionPhotosUp:imgs.description, cameraLinkPhotosUp:imgs.cameraLink, longitudePhotosUp: imgs.longitude,softwareLinkPhotosUp: imgs.softwareLink, latitudePhotosUp: imgs.latitude, datePhotosUp: imgs.date})}
                                />
                            
                        })}
                    </AnimatePresence>
                </motion.div>
            </section>
        </>
    )
}