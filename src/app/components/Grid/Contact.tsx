import Link from 'next/link';
import Card from '../Card/Card';

import { FaFacebook, FaPatreon, FaInstagram, FaLinkedin} from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

interface Socials {
    name: string;
    url: string;
    icon: IconType;
}

const socials: Socials[] = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/littlequeenphotography/?hl=fr',
        icon: FaInstagram,
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/littlequeenphotography',
        icon: FaFacebook,
    },
    {
        name: 'Patreon',
        url: 'https://patreon.com',
        icon: FaPatreon,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marine-guerrache-905b24141/',
        icon: FaLinkedin,
    }
];

export default function Contact() {
    return (
        <Card className='flex flex-col justify-center gap-6 p-8'>
            <h2 className='text-2xl font-semibold max-md:text-center'>
                Vous avez un projet en tête 👋
            </h2>
            <p className='leading-relaxed max-md:hidden'>
                If you have a project that you want to get started, think you
                need my help with something or just fancy saying hey, then get
                in touch.
            </p>
            <div className='inline-flex flex-col items-center gap-6 lg:flex-row'>
                <Link href="/contact" className='cancel-drag px-4 py-2 border-2 rounded-full border-black'>
                    Contactez moi
                </Link>
                <div className='inline-flex gap-6'>
                    {socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            className='cancel-drag'
                            aria-label={`My ${social.name}`}
                            target='_blank'
                            rel='noreferrer'>
                            {<social.icon size='20px'/>}
                        </Link>
                    ))}
                </div>
            </div>
        </Card>
    );
}
