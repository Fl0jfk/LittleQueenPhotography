import Link from 'next/link';
import { FaArrowRight, FaPatreon } from 'react-icons/fa6';
import Button from '../Buttons/Button';
import Card from '../Card/Card';

export default function Patreon() {
    return (
        <Card className='relative flex h-full flex-col items-center justify-center bg-black'>
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag'
                    href='https://www.patreon.com/'
                    target='_blank'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>Patreon</span>
                </Button>
            </div>
            <FaPatreon size='40px' color='white' />
        </Card>
    );
}