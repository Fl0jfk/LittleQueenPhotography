export default function Unfolding(){
    return (
        <section className="w-full flex flex-col justify-items items-center mt-[40px] mb-[40px] gap-8 p-4 text-white">
            <h2 className="text-4xl">Le DEROULEMENT d'une séance</h2>
            <p className="text-3xl mt-[-10px] italic">à mes côtés</p>
            <p className="text-xl">Ce moment qui est <span className="uppercase">le tien</span> sera rempli de <span className="uppercase">bienveillance</span> et de <span className="uppercase">patience</span>.</p>
            <div className="flex w-full gap-4 sm:flex-col ml-[30%] sm:ml-0">
                <div className="flex flex-col w-1/2 sm:w-full border rounded-xl p-10 gap-4">
                    <h3 className="text-2xl self-center uppercase">Prise de contact</h3>
                    <p>Premièrement, on fait connaissance, je te laisse découvrir mon univers sur mon site internet, mon Instagram ou mon Facebook. Mon univers te fait vibrer ? Viens me parler, nous allons ensemble discuter de ton projet et des envies qui te poussent à franchir le pas. Je te promets que la bonne humeur sera au rendez-vous.</p>
                </div>
                <div className="w-1/2 sm:hidden"/>
            </div>
            <div className="flex w-full gap-4 sm:flex-col mr-[30%] sm:mr-0">
                <div className="w-1/2 sm:hidden"/>
                <div className="flex flex-col w-1/2 sm:w-full border rounded-xl p-10 gap-4">
                    <h3 className="text-2xl self-center uppercase">La Préparation</h3>
                    <p>Ensuite, on prépare ta séance, je suis disponible par écrit ou par appel, comme tu préfères. Je me rends disponible pour toutes tes interrogations. Nous trouvons ensemble une date qui te convient. Tu pourras me parler de toi, de ton histoire et de tout ce qui te passera par la tête. Nous allons choisir ensemble la séance qui te définira la mieux selon tes envies. Tu es maître de tes propres décisions, nous prendrons le temps qu'il faut. Nous choisirons ensuite les tenues, le maquillage, la coiffure, les accessoires.</p>
                </div>
            </div>
            <div className="flex w-full gap-4 sm:flex-col ml-[30%] sm:ml-0">
                <div className="flex flex-col w-1/2 sm:w-full border rounded-xl p-10 gap-4">
                    <h3 className="text-2xl self-center uppercase">Le grand jour</h3>
                    <p>Tu auras peut-être un peu d'appréhension, de pression, de peur mais sache que je suis là pour te conseiller, pour te rassurer. Ce moment qui sache que je suis là pour te conseiller, pour te rassurer. Ce moment qui pour que tu te sentes bien et détendu. On mettra une playlist inspirante, on papotera et le temps passera tellement vite que tu en voudras encore. Tu vas vivre un moment extraordinaire, il y aura de l'émotion, de la joie, de la peur mais cette expérience va changer ta vie, tu te découvriras sous un autre jour. Et plus lorsque tu auras un doute sur toi, tu regarderas de nouveau tes photos, tu te rappelleras à quel point tu t'es surpassé ce jour-là, et un sentiment de bienveillance t'envahira.</p>
                </div>
                <div className="w-1/2 sm:hidden"/>
            </div>
        </section>
    )
}