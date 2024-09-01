import { useSelector, useDispatch } from "react-redux";
import { modalState, setModalClose, setModalOpenArtistic, setModalOpenBoudoir, setModalOpenBoudoirTexture, setModalOpenMomentsLife, setModalOpenOutside, setModalOpenPortrait, setModalOpenPregnancy } from "@/app/redux/reducers/modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Map from "../Map/Map";
import { usePathname } from 'next/navigation'

export default function ModalPhotos() {
    const modalPhotosisOpen = useSelector((state: { modal: modalState }) => state.modal.modalPhotos);
    const modalPhotosIsOpenClass = (modalPhotosisOpen ? "" : "hidden");
    const pathname = usePathname();
    const whatPage = (pathname === "/portfolio" ? "hidden" : "")
    const modalRef = useRef<HTMLDivElement>(null);
    const namePhotosUp = useSelector((state: { modal: modalState }) => state.modal.namePhotosUp);
    const nameLinkPhotosUp = useSelector((state: { modal: modalState }) => state.modal.nameLinkPhotosUp);
    const shortDescriptionPhotosUp = useSelector((state: { modal: modalState }) => state.modal.shortDescriptionPhotosUp);
    const descriptionPhotosUp = useSelector((state: { modal: modalState }) => state.modal.descriptionPhotosUp);
    const cameraLinkPhotosUp = useSelector((state: { modal: modalState }) => state.modal.cameraLinkPhotosUp);
    const latitudePhotosUp = useSelector((state: { modal: modalState }) => state.modal.latitudePhotosUp);
    const softwareLinkPhotosUp = useSelector((state: { modal: modalState }) => state.modal.softwareLinkPhotosUp);
    const longitudePhotosUp = useSelector((state: { modal: modalState }) => state.modal.longitudePhotosUp);
    const datePhotosUp = useSelector((state: { modal: modalState }) => state.modal.datePhotosUp);
    const previousModalArchived = useSelector((state: {modal: modalState }) => state.modal.previousModal);
    const [loadingStates, setLoadingStates] = useState(true);
    const handleImageLoad = () => {setLoadingStates(false);};
    const dispatch = useDispatch();
    const closeModal = () => { dispatch(setModalClose()) };
    const previousModal = (name:string) => {
        switch(name) {
            case 'Artistic': dispatch(setModalOpenArtistic()); break;
            case 'Boudoir': dispatch(setModalOpenBoudoir()); break;
            case 'BoudoirTexture': dispatch(setModalOpenBoudoirTexture()); break;
            case 'MomentsLife': dispatch(setModalOpenMomentsLife()); break;
            case 'Outside': dispatch(setModalOpenOutside()); break;
            case 'Portrait': dispatch(setModalOpenPortrait()); break;
            case 'Pregnancy': dispatch(setModalOpenPregnancy()); break;
            default: break;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        if (modalPhotosisOpen) {
            modalRef.current?.scrollIntoView({behavior: "smooth" });
            modalRef.current?.scrollTo({top: 0, behavior: 'smooth' });
        }
    }, [modalPhotosisOpen]);
    return (
        <section ref={modalRef} className={`${modalPhotosIsOpenClass} w-full h-full relative flex flex-col gap-4 items-center gap-6`}>
            <div className="flex relative w-full justify-between">
                <button className={`w-[35px] h-[35px] z-[2] bg-gray-700 rounded-full z-[1] p-[6px] hover:scale-105 transition ease-in-out duration-300 ${whatPage}`} onClick={()=>previousModal(previousModalArchived)}>
                    <svg viewBox="0 0 24 24">
                            <path d="M11 6L5 12M5 12L11 18M5 12H19" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                </button>
                <button className="w-[35px] h-[35px] z-[2] bg-gray-700 rounded-full z-[1] p-2 hover:scale-105 transition ease-in-out duration-300" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill="#fff" d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
                    </svg>
                </button>
            </div>
            <Link href={nameLinkPhotosUp} target="blank" className="rounded-2xl">
            <div className="relative">
                {loadingStates && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-3xl">
                        <div className="loader"></div>
                    </div>
                )}
                {nameLinkPhotosUp&&<Image src={nameLinkPhotosUp} quality={80} alt={namePhotosUp} width={700} height={700} priority={true} onLoad={() => handleImageLoad()} style={{ width: "auto", height: "auto" }} className="rounded-2xl"/>}
            </div>
            </Link>
            <div className="mt-4 flex flex-col w-full gap-4">
                <div className="flex w-full gap-4 sm:flex-col ">
                    <div className="flex flex-col w-full h-[450px] rounded-2xl justify-center items-center gap-10 relative p-8 w-1/2 sm:w-full">
                        <p className="text-white text-3xl">Capturé avec</p>
                        {cameraLinkPhotosUp&& <Image src={cameraLinkPhotosUp} width={300} height={300} style={{ width: "auto", height: "auto" }} alt="Image de l'appareil photo utilisé pour la photo"/>}
                        <span className="h-full w-full absolute bg-black -z-10 opacity-70 rounded-2xl"/>
                    </div>
                    <div className="w-1/2 rounded-2xl h-[450px] sm:w-full">
                        <Map latitude={latitudePhotosUp} longitude={longitudePhotosUp}/>
                    </div>
                </div>
                <div className="flex w-full gap-4 sm:flex-col">
                    <div className="w-full flex flex-col rounded-2xl justify-center items-center relative h-[450px] gap-8 p-8">
                        <p className="text-white text-3xl">Edité avec</p>
                        {softwareLinkPhotosUp&& <Image src={softwareLinkPhotosUp} width={200} height={200} alt="Logo du logiciel utilisé pour le traitement de la photo" style={{ width: "auto", height: "auto" }}/>}
                        <span className="h-full w-full absolute bg-black -z-10 opacity-70 rounded-2xl"/>
                    </div>
                </div>
            </div>
        </section>   
    );
}