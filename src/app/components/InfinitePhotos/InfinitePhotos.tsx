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
        <section className="flex gap-2 px-3 h-[100vh] w-full">
            <div className="flex h-full w-full flex-col items-center">
                <span className="scroll">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
                <span className="scroll">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
            </div>
            <div className="flex h-full w-full flex-col items-center sm:hidden">
                <span className="scroll2">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
                <span className="scroll2">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
            </div>
            <div className="flex h-full w-full flex-col items-center sm:hidden">
                <span className="scroll3">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
                <span className="scroll3">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
            </div>
            <div className="flex h-full w-full flex-col items-center sm:hidden">
                <span className="scroll4">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
                <span className="scroll4">
                    {images.map((image) => (
                        <Link href={"/"} key={`${image}`} className="mt-2 mb-2 rounded-lg">
                            <Image src={image} sizes="30vw" alt="" height={300} width={300} className="mt-2 mb-2 rounded-lg"/>
                        </Link>
                    ))}
                </span>
            </div>
        </section>
    )
}