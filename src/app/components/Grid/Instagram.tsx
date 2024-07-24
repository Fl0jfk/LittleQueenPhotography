import Link from 'next/link';
import { FaArrowRight, FaInstagram } from 'react-icons/fa6';
import Button from '../Buttons/Button';
import Card from '../Card/Card';

export default function Instagram() {
    return (
        <Card className='relative flex h-full flex-col items-center justify-center bg-black'>
            <div className='absolute bottom-3 left-3'>
                <Button
                    as={Link}
                    className='cancel-drag'
                    href='https://www.instagram.com/littlequeenphotography/'
                    target='_blank'>
                    <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                    <span className='sr-only'>Instagram</span>
                </Button>
            </div>
            <FaInstagram size='40px' color='#5b51d8'/>
        </Card>
    );
}