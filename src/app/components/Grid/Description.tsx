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
            <p className='text-balance leading-relaxed text-sm'>Je m’appelle Marine, je suis une âme sensible et bienveillante. Je m’inspire de vous pour créer de merveilleuses photographies d’une valeur inestimable. Passionnée par l’amour, par l’intimité et par la sensualité, mon métier a été pour moi une révélation. Vous offrir mon expérience professionnelle dans les tons chauds pour vous sublimer et vous créer de doux souvenirs. Vivez avoir moi une expérience unique et inoubliable.</p>
        </Card>
    );
}
