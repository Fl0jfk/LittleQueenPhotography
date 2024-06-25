"use client"

import { useData } from "@/app/contexts/data";
import Slider from "./Slider";

function RollingSlider (){
    const data = useData();
    return (
        <>
            {data.categories[0] &&
                <section id="slideshow" className="max-w-[1500px] w-full self-center">
                    <Slider props={data.categories}/>
                </section>
            }
        </>
    )
}

export default RollingSlider;