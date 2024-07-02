import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface InstagramPhoto {
    id: string;
    caption: string;
    media_url: string;
    media_type: string;
    timestamp: string;
    permalink: string;
}

export default function InstaFeed() {
    const [photos, setPhotos] = useState<InstagramPhoto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const storedData = localStorage.getItem('instagramPhotos');
                const storedExpiration = localStorage.getItem('instagramPhotosExpiration');
                const now = new Date().getTime();
                if (storedData && storedExpiration && now < parseInt(storedExpiration, 10)) {
                    setPhotos(JSON.parse(storedData));
                } else {
                    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${accessToken}`);
                    if (response.ok) {
                        const data = await response.json();
                        setPhotos(data.data || []);
                        const expirationTime = now + 48 * 60 * 60 * 1000; // 48 hours in milliseconds
                        localStorage.setItem('instagramPhotos', JSON.stringify(data.data));
                        localStorage.setItem('instagramPhotosExpiration', expirationTime.toString());
                    } else {
                        const errorData = await response.json();
                        setError(`Failed to fetch Instagram photos: ${errorData.error.message}`);
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Instagram photos:', error);
                setError('Error fetching Instagram photos. Please try again later.');
                setLoading(false);
            }
        };
        fetchPhotos();
    }, [accessToken]);
    if (loading) { return <p>Loading...</p>; }
    if (error) { return <p>{error}</p>; }
    return (
        <section className="w-full overflow-hidden overflow-x-scroll h-full">
            <div className="flex w-full mx-auto gap-4">
                {photos.slice(0, 12).map((photo) => (
                    <Link key={photo.id} href={photo.permalink} target="_blank" rel="noopener noreferrer">
                        <div className='w-[200px] h-[200px] rounded-3xl relative'>
                            <Image src={photo.media_url} alt={photo.caption} sizes={'(min-width: 2em) 24vw,(min-width: 28em) 45vw,100vw'} quality={40} className="object-cover rounded-3xl" fill/>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}