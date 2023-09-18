import Image from "next/image";
import Corporativo from "@/assets/images/corporativo.jpg";
import Delivery from "@/assets/images/delivery.jpg";
import Ead from "@/assets/images/ead.jpg";
import Ecom from "@/assets/images/ecom.jpg";
import Imobi from "@/assets/images/imobi.jpg";
import RedeSocial from "@/assets/images/redesocial.jpg";

const Projects = () => {
    return(
        <div className="bg-[#141414] px-8 py-20 mx-auto">
            <h1 className="text-[40px] font-bold tracking-[0.64px] leading-[32.48px] mb-10 text-center">Cases de Sucesso</h1>
            <div className="mx-auto gap-8 flex justify-center flex-wrap">
            <div className="border-solid border w-[296px] h-[197px] bg-transparent sm:w-[450px] sm:h-[299px]">
                <Image
                src={Corporativo}
                alt="Corporativo"
                className="object-cover w-full h-full cursor-pointer"
                />
                <h1 className="text-sm tracking-[0.32px] leading-[20.48px] font-normal">Software para sites corporativos</h1>
            </div>
            <div className="border-solid border w-[296px] h-[197px] bg-transparent sm:w-[450px] sm:h-[299px]">
                <Image
                src={Delivery}
                alt="Delivery"
                className="object-cover w-full h-full cursor-pointer"
                />
                <h1 className="text-sm tracking-[0.32px] leading-[20.48px] font-normal">Software para plataformas deliverys</h1>
            </div>
            <div className="border-solid border w-[296px] h-[197px] bg-transparent sm:w-[450px] sm:h-[299px]">
                <Image
                src={Ead}
                alt="Ead"
                className="object-cover w-full h-full cursor-pointer"
                />
                <h1 className="text-sm tracking-[0.32px] leading-[20.48px] font-normal">Software para plataformas Ead</h1>
            </div>
            <div className="border-solid border w-[296px] h-[197px] bg-transparent sm:w-[450px] sm:h-[299px]">
                <Image
                src={Ecom}
                alt="Ecom"
                className="object-cover w-full h-full cursor-pointer"
                />
                <h1 className="text-sm tracking-[0.32px] leading-[20.48px] font-normal">Software para sites de e-commerce</h1>
            </div>
            <div className="border-solid border w-[296px] h-[197px] bg-transparent sm:w-[450px] sm:h-[299px]">
                <Image
                src={Imobi}
                alt="Imobi"
                className="object-cover w-full h-full cursor-pointer"
                />
                <h1 className="text-sm tracking-[0.32px] leading-[20.48px] font-normal">Software para sites imobiliários</h1>
            </div>
            <div className="border-solid border w-[296px] h-[197px] bg-transparent sm:w-[450px] sm:h-[299px]">
                <Image
                src={RedeSocial}
                alt="RedeSocial"
                className="object-cover w-full h-full cursor-pointer"
                />
                <h1 className="text-sm tracking-[0.32px] leading-[20.48px] font-normal">Software para redes sociaisw</h1>
            </div>
            </div>
        </div>
    )
}

export default Projects;