import Image from "next/image";

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
            <div className="flex w-full gap-4 mx-auto overflow-x-hidden">
                {(new Array(9)).fill(null).map((_, index) => (
                    <div key={index}></div>
                ))}
            </div>
        );
    }
    return (
        <div className="flex w-full gap-4 mx-auto">
            {items.map((item) => (
                <Image key={item.mediaUrl} src={item.mediaUrl} width={200} height={200} alt="" />
            ))}
        </div>
    );
}
