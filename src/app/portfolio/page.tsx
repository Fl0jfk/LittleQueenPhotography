import PortfolioComp from "../components/Portfolio/Portfolio";
import Head from "next/head";

export default function Portfolio (){
    return (
        <>
            <Head>
                <title>Portfolio de LittleQueenPhotography</title>
                <meta name='description' content='Votre photographe boudoir'/>
            </Head>
            <main className="sm:pt-[8vh] md:pt-[10vh]">
                <PortfolioComp/>
            </main>
        </>
    )
}