"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useData } from '../../contexts/data';
import CrossButton from '../Buttons/CrossButton';
import Navbar from '../Navbar/Navbar';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';	
import Logo from "../../assets/Logo.png"
import Link from 'next/link';

export default function Header(){
    const data = useData();
    const { scrollY } = useScroll();
    const [menuOpened, setMenuOpened] = useState(false);
    const [hidden, setHidden ] = useState(false);
    const opacityMenu = (!menuOpened? "sm:opacity-80 md:opacity-80 h-[10vh] ease-linear duration-300" : "h-[100vh] ease-linear duration-300");
    const opacityLogo = (!menuOpened? "ease-linear delay-100 duration-200 scale-1" : "ease-linear delay-150 duration-300 scale-0");
    const handleClick = () => {
        setMenuOpened(!menuOpened);
    };
   useMotionValueEvent(scrollY, "change", (latest:any) => {
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150 ){
        setHidden(true);
    } else {
        setHidden(false);
    }
    });
    const handleLinkClick = ({ clickOnLink } : handleLinkClickProps) => {
        setMenuOpened(clickOnLink);
    };
    return (
        <motion.header 
            variants={{ visible: { y: 0 }, hidden: { y: "-100%" }}} 
            animate={hidden ? "hidden" : "visible"}
            transition={{duration: 0.35, ease: "easeInOut"}}
            className={`flex p-4 justify-between items-center w-full fixed z-[12] md:mb-[100px] bg-[#000] ${opacityMenu} self-center text-2xl overflow-hidden`}>
                <div className='w-2/12 flex items-center h-full sm:w-4/12 md:w-4/12'>
                    {Logo &&
                        <Link href="/">
                            <Image src={Logo} alt='Mon memoji' width={150} height={150} className={`cursor-pointer z-[8] ${opacityLogo}`} onClick={()=>{window.scrollTo({top:0, left:0, behavior:'smooth'})}}/>
                        </Link>
                    }
                </div>
                <div className='w-10/12 flex justify-end items-center sm:mt-[-5px] h-full'>
                    <Navbar menuOpened={menuOpened} onLinkClick={handleLinkClick}/>
                    <div className='flex justify-end w-[40] items-center h-full' onClick={() => handleClick()}>
                        <CrossButton menuOpened={menuOpened}/>
                    </div>
                </div>
        </motion.header>
    )
}

type handleLinkClickProps = {
    clickOnLink : boolean;
    onLinkClick: (clickOnLink: boolean) => void;
}