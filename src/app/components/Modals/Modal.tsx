"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalState, setModalClose } from "@/app/redux/reducers/modal";
import ModalArtistic from "./ModalArtistic";
import ModalBoudoir from "./ModalBoudoir";
import ModalBoudoirTexture from "./ModalBoudoir&Texture";
import ModalMomentsLife from "./ModalMomentsLife";
import ModalOutside from "./ModalOutside";
import ModalPortrait from "./ModalPortrait";
import ModalPregnancy from "./ModalPregnancy";
import ModalPhotos from "./ModalPhotos";

export default function Modal() {
    const modalIsVisible = useSelector((state: { modal: modalState }) => state.modal.modal);
    const dispatch = useDispatch();
    const modalIsVisibleClass = modalIsVisible ? "" : "hidden";
    const closeModal = () => { dispatch(setModalClose());};
    useEffect(() => {
        if (modalIsVisible) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [modalIsVisible]);
    return (
        <>
            <section className={`overflow-y-auto max-h-[90vh] w-[80vw] md:w-[90vw] md:left-[5vw] md:top-[2.5vh] sm:top-[2.5vh] sm:w-[100vw] sm:left-[0vw] absolute left-[10vw] rounded-xl backdrop-blur-2xl z-40 text-white p-6 sm:p-4 overflow-y-auto bg-gray-900 ${modalIsVisibleClass}`}>
                <ModalArtistic />
                <ModalBoudoir />
                <ModalBoudoirTexture />
                <ModalMomentsLife />
                <ModalOutside />
                <ModalPortrait />
                <ModalPregnancy />
                <ModalPhotos/>
            </section>
            <div className={`fixed top-0 left-0 w-full h-full backdrop-blur-[2px] z-30 ${modalIsVisibleClass}`} onClick={closeModal}></div>
        </>
    );
}
