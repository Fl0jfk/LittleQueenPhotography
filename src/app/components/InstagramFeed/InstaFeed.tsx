"use client"

import { useState, useEffect } from "react";
import InstaGrid, {InstaItem} from "./InstaGrid";


export default function InstaFeed() {
    const [instaItems, setInstaItems] = useState<InstaItem[]>([]);
  
    const userId = process.env.NEXT_PUBLIC_INSTAGRAM_USER;
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

    const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}&fields=id`;

    useEffect(() => {
        const doFetch = async () => {
            try {
                if (!userId || !accessToken) {
                    throw new Error("userId or accessToken is undefined");
                }

                const res = await fetch(instaUrl);
                const jsonData = await res.json();

                if (!jsonData.data) {
                    throw new Error("No data found in the response");
                }

                const fetchedItems: InstaItem[] = [];

                for (let i = 0; i < jsonData.data.length && i < 11; i++) {
                    const item = jsonData.data[i];
                    const itemId = item.id;
                    const mediaUrl = await fetchMediaUrl(itemId);
                    const instaItem: InstaItem = {
                        permalink: item.permalink,
                        mediaUrl,
                    };
                    fetchedItems.push(instaItem);
                }
                setInstaItems(fetchedItems);
            } catch (error) {
               
                console.error("Instagram API Error:", error);
            }
        };

        const fetchMediaUrl = async (id: string) => {
            const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url`;

            const res = await fetch(mediaUrl);
            const json = await res.json();

            return json.media_url;
        };

        doFetch();
    }, [userId, accessToken, instaUrl]);
    return (
        <section className="w-full overflow-hidden overflow-x-scroll h-full">
            <InstaGrid items={instaItems} />
        </section>
    );
}