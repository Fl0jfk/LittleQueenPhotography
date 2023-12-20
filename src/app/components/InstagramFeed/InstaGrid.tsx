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
                    <div className="h-[200px] w-[200px] bg-cover" style={{backgroundImage: `url('${item.mediaUrl}')`}}>
                    </div>
                </Link>
            ))}
        </div>
    );
}
