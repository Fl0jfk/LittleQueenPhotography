'use client';

import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa6';
import useSWR from 'swr';
import Card from '../Card/Card';

interface Spotify {
    isPlaying: boolean;
    title: string;
    album: string;
    artist: string;
    albumImageUrl: string;
    songUrl: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function NowPlaying() {
    const { data } = useSWR<Spotify>(`/api/now-playing`, fetcher);

    if (!data)
        return (
            <div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='inline-flex items-center justify-center gap-1'>
                            <div className='size-1 rounded-full bg-[#1DB954]' />
                            <div className='size-1 rounded-full bg-[#1DB954]' />
                            <div className='size-1 rounded-full bg-[#1DB954]' />
                        </div>
                        <div className='h-4 animate-pulse rounded-md bg-gray-300'>
                            <span className='invisible'>Now Playing</span>
                        </div>
                    </div>
                    <div className='h-6 animate-pulse rounded-md bg-gray-300'>
                        <span className='invisible'>Song Title</span>
                    </div>
                    <div className='h-4 animate-pulse rounded-md bg-gray-300'>
                        <span className='invisible'>Artist</span>
                    </div>
                </div>
            </div>
        );

    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='inline-flex items-center justify-center gap-1'>
                    <div className='w-1 animate-[playing_0.85s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_1.26s_ease_infinite] rounded-full bg-[#1DB954]' />
                    <div className='w-1 animate-[playing_0.62s_ease_infinite] rounded-full bg-[#1DB954]' />
                </div>
                <p className='text-sm'>
                    {data?.isPlaying ? 'Now Playing' : 'Offline. Last Played'}
                </p>
            </div>
            <h2
                className='cancel-drag line-clamp-3 text-2xl font-semibold md:line-clamp-1 lg:line-clamp-3'
                title={data?.isPlaying ? data?.title : 'Earned It (Fifty Shades Of Grey)'}>
                <Link
                    href={
                        data?.isPlaying
                            ? data?.songUrl
                            : 'https://open.spotify.com/intl-fr/track/1cQ3LIkZE68pMSnPhZWXLu'
                    }
                    target='_blank'
                    rel='nofollow noopener noreferrer'>
                    {data?.isPlaying ? data?.title : 'Earned It (Fifty Shades Of Grey)'}
                </Link>
            </h2>
            <p
                className='truncate'
                title={data?.isPlaying ? data?.artist : 'The Weekend'}>
                {data?.isPlaying ? data?.artist : 'The Weekend'}
            </p>
        </div>
    );
}

export default function Spotify() {
    return (
        <Card className='flex h-full flex-col justify-between gap-3 p-8'>
            <div className='relative'>
                <FaSpotify
                    className='md:absolute md:right-0 md:top-0 lg:relative'
                    color='#1DB954'
                />
            </div>
            <NowPlaying />
        </Card>
    );
}
