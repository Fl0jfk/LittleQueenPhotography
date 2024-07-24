import Image from 'next/image';
import Card from '../Card/Card';
import test from '../../assets/144807590_3634041976677632_9140760121458245846_n.jpg'

export default function Description() {
    return (
        <Card className='flex flex-col justify-center gap-4 p-8'>
            <div className='relative overflow-hidden rounded-full w-[150px]'>
                <Image
                    src={test}
                    alt='Image de LittleQueenPhotography'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <p className='text-balance leading-relaxed'>
                Je suis<span className='text-xl font-semibold'> Marine</span>,
                Une AME SENSIBLE et bienveillante.{' '}
                <span className='hidden md:inline'>
                    Je m&apos;inspire de toutes vos AMES MAGNIFIQUES afin de créer des portraits EMOTIONNELS et AUTHENTIQUE.
                </span>
            </p>
        </Card>
    );
}
