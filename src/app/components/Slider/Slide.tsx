import Image from 'next/image';
import { useDispatch } from "react-redux";
import { setModalOpenArtistic, setModalOpenBoudoir, setModalOpenBoudoirTexture, setModalOpenMomentsLife, setModalOpenOutside, setModalOpenPortrait, setModalOpenPregnancy } from '@/app/redux/reducers/modal';

export default function Slide({name, img, shortDescription}: SliderProps) {
    const dispatch = useDispatch();
    const handleModalOpen = () => {
        switch(name) {
            case 'Artistique': dispatch(setModalOpenArtistic());
                break;
            case 'Boudoir': dispatch(setModalOpenBoudoir());
                break;
            case 'Boudoir & Texture': dispatch(setModalOpenBoudoirTexture());
                break;
            case 'Moments de vie': dispatch(setModalOpenMomentsLife());
                break;
            case 'Extérieur': dispatch(setModalOpenOutside());
                break;
            case 'Portrait': dispatch(setModalOpenPortrait());
                break;
            case 'Grossesse': dispatch(setModalOpenPregnancy());
                break;
            default:
                break;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='select-none flex xl:hover:scale-105 lg:hover:scale-105 h-[600px] min-w-[320px] sm:h-[500px] sm:min-w-[280px] rounded-3xl m-3 p-6 cursor-grab active:cursor-grabbing relative overflow-hidden transition ease-in-out duration-300' onClick={()=>handleModalOpen()}>
            {name && 
                <>
                    <div className='flex flex-col gap-1'>
                        <p className='text-white text-lg z-[2]'>{name}</p>
                        <p className='text-white text-3xl z-[2]'>{shortDescription}</p> 
                    </div>       
                    {img && 
                        <Image src={img} fill alt={name} style={{objectFit:"cover"}} quality={60} className='rounded-3xl select-none pointer-events-none' sizes='28vw'/>
                    }
                    <div className='w-[35px] h-[35px] z-[2] absolute top-[550px] left-[270px] sm:top-[450px] sm:left-[230px] bg-gray-700 rounded-full z-[1] p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z" fill='#fff'></path>
                        </svg>
                    </div>
                </>
            }  
        </div> 
    )
}

type SliderProps = {
  name: string;
  img: string;
  description: string;
  shortDescription: string;
};