import Image from "next/image";
import Link from "next/link";

export interface InstaItem {
    permalink: string;
    mediaUrl: string;
}

interface InstaGridProps {
    items: InstaItem[];
}

export default function InstaGrid({ items }: InstaGridProps) {
    if (items.length === 0) {
        return (
            <div className="flex w-full gap-4">
                {(new Array(12)).fill(null).map((_, index) => (
                    <div key={index}></div>
                ))}
            </div>
        );
    }
    return (
        <div className="flex w-full gap-4 mx-auto">
            {items.map((item) => (
                <Link key={item.mediaUrl} href={`${item.mediaUrl}`} aria-label="Lien vers la photo instagram cliquée">
                    <div className="h-[150px] w-[150px]">
                        <Image src={item.mediaUrl} width={150} height={150} sizes="20vw" alt="Une des dernières photos de notre flux instagram" className="object-cover"/>
                    </div>
                </Link>
            ))}
        </div>
    );
}
