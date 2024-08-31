import { useSelector, useDispatch } from "react-redux";
import { modalState, setModalOpenPhotos, setModalClose, setPhotoDetails } from "@/app/redux/reducers/modal";
import Image from "next/image";
import { useData } from "@/app/contexts/data";
import { useRef, useEffect, useState } from "react";

export default function ModalArtistic() {
    const modalIsVisible = useSelector((state: { modal: modalState }) => state.modal.modalPortrait);
    const modalPhotosisOpen = useSelector((state: { modal: modalState }) => state.modal.modalPhotos);
    const modalIsVisibleClass = (modalIsVisible ? "" : "hidden");
    const modalPhotosIsOpenClass = (modalPhotosisOpen ? "hidden" : "");
    const modalRef = useRef<HTMLDivElement>(null);
    const data = useData();
    const dispatch = useDispatch();
    const closeModal = () => { dispatch(setModalClose()) };
    const openModalPhotos = (photoDetails:any) => {
        window.scrollTo({top: 0, behavior: 'smooth' });
        modalRef.current?.scrollIntoView({behavior: "smooth" });
        modalRef.current?.scrollTo({top: 0, behavior: 'smooth' });
        dispatch(setPhotoDetails(photoDetails));
        dispatch(setModalOpenPhotos());
    };
    const [loadingStates, setLoadingStates] = useState(true);
    const handleImageLoad = () => {setLoadingStates(false);};
    useEffect(() => {
        if (modalIsVisible) {
            modalRef.current?.scrollIntoView({behavior: "smooth" });
            modalRef.current?.scrollTo({top: 0, behavior: 'smooth' });
        }
    }, [modalIsVisible]);
    return (
        <section ref={modalRef} className={`${modalIsVisibleClass} w-full h-full relative flex flex-col gap-4 ${modalPhotosIsOpenClass}`}>
            <div className="flex relative w-full justify-between">
                <h3 className="text-4xl">Portrait</h3>
                <button className="w-[35px] h-[35px] z-[2] bg-gray-700 rounded-full z-[1] p-2 hover:scale-105 transition ease-in-out duration-300" onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill="#fff" d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"></path>
                    </svg>
                </button>
            </div>
            <p>Des portraits doux & bienveillants</p>
            <p>Spécialisée dans la photo intimiste, je vous invite dans mon univers SENSUEL et EMOTIONNEL. Je réalise aussi pour vous des portraits plus classiques DOUX, et EXPRESSIF</p>
            <div className="w-full grid grid-cols-4 gap-4 mx-auto md:grid-cols-2 sm:grid-cols-1 p-6 rounded-3xl">
                {data.imagePortrait.map((imgs:{name:string;id:number;link:string,shortDescription:string;description:string;cameraLink:string;latitude:string;longitude:string;date:string;softwareLink:string}) => {
                    return (
                        <div key={imgs.id} className="relative">
                            {loadingStates && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-3xl">
                                    <div className="loader"></div>
                                </div>
                            )}
                            <Image
                                alt={imgs.name}
                                src={imgs.link}
                                width={500}
                                height={500}
                                quality={50}
                                className="h-full w-full rounded-3xl hover:scale-105 cursor-pointer transition ease-in-out duration-300"
                                style={{ objectFit: "cover" }}
                                onClick={() => openModalPhotos({
                                    namePhotosUp: imgs.name, nameLinkPhotosUp: imgs.link, shortDescriptionPhotosUp: imgs.shortDescription, descriptionPhotosUp: imgs.description, cameraLinkPhotosUp: imgs.cameraLink, longitudePhotosUp: imgs.longitude, softwareLinkPhotosUp: imgs.softwareLink, latitudePhotosUp: imgs.latitude, datePhotosUp: imgs.date, previousModal: "Portrait"
                                })}
                                onLoad={() => handleImageLoad()}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    )
}