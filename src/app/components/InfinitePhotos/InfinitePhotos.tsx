import "./InfinitePhotos.css"
import Image from "next/image";
import Link from "next/link";

export const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
]

export default function InfinitePhotos (){
    return (
        <section className="flex gap-3 px-3 h-[100vh] w-full overflow-hidden">
            <div className="flex h-full w-full flex-col items-center stopanim">
                <span className="scroll">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                            <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                            <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                            <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                        </Link>
                    ))}
                </span>
                <span className="scroll">
                    {images.map((image) => (
                         <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                         <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                         <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                         <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                     </Link>
                    ))}
                </span>
            </div>
            <div className="flex h-full w-full flex-col items-center sm:hidden stopanim">
            <span className="scroll2">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                            <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                            <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                            <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                        </Link>
                    ))}
                </span>
                <span className="scroll2">
                    {images.map((image) => (
                         <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                         <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                         <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                         <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                     </Link>
                    ))}
                </span>
            </div>
            <div className="flex h-full w-full flex-col items-center sm:hidden stopanim">
            <span className="scroll3">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                            <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                            <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                            <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                        </Link>
                    ))}
                </span>
                <span className="scroll3">
                    {images.map((image) => (
                         <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                         <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                         <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                         <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                     </Link>
                    ))}
                </span>
            </div>
            <div className="flex h-full w-full flex-col items-center sm:hidden stopanim">
            <span className="scroll4">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                            <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                            <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                            <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                        </Link>
                    ))}
                </span>
                <span className="scroll4">
                    {images.map((image) => (
                         <Link href={"/"} key={`${image}`} className="mb-3 mt-3 rounded-lg details relative">
                         <span className="text-white text-4xl inline absolute z-10 top-1 sm:top-4 left-1 hidden">Mon projet</span>
                         <span className="text-white text-4xl inline absolute z-10 left-[160px] sm:left-[250px] sm:top-4 top-1 hidden">Mon projet</span>
                         <Image src={image} sizes="(max-width: 768px) 90vw, 25vw" alt="" height={400} width={400} className="mb-3 mt-3 rounded-lg z-0"/> 
                     </Link>
                    ))}
                </span>
            </div>
        </section>
    )
}