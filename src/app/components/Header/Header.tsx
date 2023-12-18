"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useData } from '../../contexts/data';
import CrossButton from '../Buttons/CrossButton';
import Navbar from '../Navbar/Navbar';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';	

export default function Header(){
    const data = useData();
    const { scrollY } = useScroll();
    const [menuOpened, setMenuOpened] = useState(false);
    const [hidden, setHidden ] = useState(false);
    const opacityMenu = (!menuOpened? "sm:opacity-80 md:opacity-80" : "")
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
            className={`flex p-4 justify-between items-center w-full md:fixed sm:fixed z-[12] md:mb-[100px] md:bg-[#000000] sm:bg-[#000000] h-[10vh] ${opacityMenu} max-w-[1440px] self-center`}>
                <div className='w-2/12 flex items-center pt-4 h-full'>
                    {data.profile.memoji && 
                        <Image src={data.profile.memoji} alt='Mon memoji' width={100} height={100} className='cursor-pointer z-[8]' onClick={()=>{window.scrollTo({top:0, left:0, behavior:'smooth'})}}/>
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