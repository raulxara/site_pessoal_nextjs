import Image from "next/image";
import Star from "@/assets/images/star.png"

const HighLights = () => {
    return(
        <div className="px-8 py-20 lg:flex justify-center gap-x-8">
            <div>
            <h1 className="text-[36px] sm:text-[72px] font-extrabold tracking-[0.32px] sm:leading-[60px] leading-[32px]">Destaques</h1>
            <p className="tracking-[0.32px] leading-[20.48px] text-sm mt-8 lg:w-[550px]">O que me destaca é o planejamento preciso e eficiência excepcional. 
            Cada passo é estrategicamente traçado, otimizando recursos e antecipando desafios. Essa abordagem não só 
            impulsiona resultados consistentes, mas também catalisa o crescimento sustentável, demonstrando uma visão 
            guiada pela excelência operacional.<br></br><br></br>A comunicação eficaz é o alicerce das conexões humanas. 
            Aqueles que possuem proatividade transcendem, transformando palavras em ações impactantes. Comunicar-se 
            habilmente é mais do que falar; é ouvir, compreender e adaptar-se. Minha proatividade impulsiona iniciativas, 
            antecipando necessidades e gerando soluções antes mesmo que surjam os problemas. Procuro sempre ser um 
            indivíduos engaja, inspira e influencia, construindo relacionamentos sólidos e alcançando resultados notáveis.</p>
            </div>
            <div className="mt-8 lg:mt-0">
            <div >
                <h1 className="text-[20px] font-bold tracking-[0.32px] leading-[32px]">Eficiência</h1>
                <div className="flex">
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                </div>
            </div>
            <div >
                <h1 className="text-[20px] font-bold tracking-[0.32px] leading-[32px]">Proatividade</h1>
                <div className="flex">
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                </div>
            </div>
            <div >
                <h1 className="text-[20px] font-bold tracking-[0.32px] leading-[32px]">Comunicação</h1>
                <div className="flex">
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                </div>
            </div>
            <div >
                <h1 className="text-[20px] font-bold tracking-[0.32px] leading-[32px]">Planejamento</h1>
                <div className="flex">
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                </div>
            </div>
            <div >
                <h1 className="text-[20px] font-bold tracking-[0.32px] leading-[32px]">Comprometimento</h1>
                <div className="flex">
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                <Image src={Star} alt="Star" className="w-[35px] h-[35px]"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HighLights;