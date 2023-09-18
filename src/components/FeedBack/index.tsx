import Image from "next/image";
import Rosto1 from "@/assets/images/rosto1.jpg";
import Rosto2 from "@/assets/images/rosto2.jpg";
import Rosto3 from "@/assets/images/rosto3.jpg";
import Rosto4 from "@/assets/images/rosto4.jpeg";

const FeedBack = () => {
    return (
        <div className="px-8 py-14 bg-[#141414] gap-4 grid-cols-2 flex flex-wrap justify-center mx-auto">
            <div className="md:w-[40%]">
            <p className="tracking-[0.32px] leading-[20.48px] text-sm">“Estamos muito satisfeitos com a parceria entre nossa empresa e a Startpn, sempre apresentamos nossos 
                desafios e recebemos as melhores soluções de produto e serviço na entrega, pois oferecem segurança, informação e tranquilidade.”</p>
            <div className="flex items-center gap-4 mt-6">
                <div>
                <Image src={Rosto1} alt="Rosto1" className="w-[60px] h-[60px] rounded-full"/>
                </div>
                <div>
                <p className="">Arthur Campos - IT manager</p>
                <h1 className="font-extrabold">CE Imobi</h1>
                </div>
            </div>
            </div>
            <div className="md:w-[40%]">
            <p className="tracking-[0.32px] leading-[20.48px] text-sm">“Ótima experiência com o suporte. Raul é muito organizado para quem pretende tirar sua ideia do papel de forma 
                simples e barata. Ele foi fenomenal no auxílio em todo processo de desenvolvimento.”</p>
            <div className="flex items-center gap-4 mt-6">
                <div>
                <Image src={Rosto2} alt="Rosto2" className="w-[60px] h-[60px] rounded-full"/>
                </div>
                <div>
                <p>Carlos Eduardo - Fundador</p>
                <h1 className="font-extrabold">PiPlug</h1>
                </div>
            </div>
            </div>
            <div className="md:w-[40%]">
            <p className="tracking-[0.32px] leading-[20.48px] text-sm">“Estamos muito satisfeitos com a parceria entre nossa empresa e Raul, sempre apresentamos nossos 
                desafios e recebemos as melhores soluções de produto e serviço na entrega, pois oferecem segurança, informação e tranquilidade.”</p>
            <div className="flex items-center gap-4 mt-6">
                <div>
                <Image src={Rosto3} alt="Rosto3" className="w-[60px] h-[60px] rounded-full"/>
                </div>
                <div>
                <p>Carlos Eduardo - CEO</p>
                <h1 className="font-extrabold">MercCar</h1>
                </div>
            </div>
            </div>
            <div className="md:w-[40%]">
            <p className="tracking-[0.32px] leading-[20.48px] text-sm">“O Raul hoje e meu braço direito em tech, ela me ajudou a tirar a minha ideia do papel, criando todas a soluções que possuímos hoje 
                aqui na MercCar, Ainda hoje continuo com o Raul para a manutenção e evolução de nossos softwares.”</p>
            <div className="flex items-center gap-4 mt-6">
                <div>
                <Image src={Rosto4} alt="Rosto4" className="w-[60px] h-[60px] rounded-full"/>
                </div>
                <div>
                <p>Vinicius Lucas - CEO</p>
                <h1 className="font-extrabold">Predius Imob</h1>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default FeedBack;