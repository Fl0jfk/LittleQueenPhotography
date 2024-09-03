import { usePathname } from 'next/navigation';
import Head from "next/head";

export default function Metadata() {
    const pathname = usePathname();

    const metaDetails: Record<string, { title: string; description: string }> = {
        "/": {
            title: "LittleQueenPhotography : Votre photographe boudoir à Rouen",
            description: "Des portraits intimistes alliant douceur et sensualité",
        },
        "/mentionslegales": {
            title: "Mentions légales - LittleQueenPhotography",
            description: "Consultez les mentions légales de LittleQueenPhotography.",
        },
        "/contact": {
            title: "Contact - LittleQueenPhotography",
            description: "Contactez-nous pour un devis",
        },
        "/portfolio": {
            title: "Portfolio - LittleQueenPhotography",
            description: "Vous pouvez trouver ici une partie de notre portfolio",
        },
        "/about": {
            title: "À propos de nous - LittleQueenPhotography",
            description: "Venez me découvrir et n'hésitez pas à me contacter",
        }
    };

    const { title, description } = metaDetails[pathname] || metaDetails["/"];

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
}

