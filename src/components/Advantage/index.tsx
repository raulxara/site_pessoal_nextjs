import Image from "next/image";
import Dash from "@/assets/images/dash.jpg";
import Icons from "@/utils/Icons";

const Advantage = () => {
    return (
        <div className="px-8 py-20 mx-auto">
            <div className="text-center">
            <h1 className="text-[40px] font-bold tracking-[0.64px] leading-[36px] mb-10 text-center">Construa sua ideia aqui</h1>
            <a href="/contato" className="bg-[#3178c6] mx-auto  px-[40px] py-[15px] rounded-md tracking-[0.32px] leading-[16px] hover:bg-[#1172eb] font-bold">Fale comigo</a>
            </div>
            <div className="md:flex md:justify-center md:gap-8 mt-14">
            <h1 className="tracking-[0.32px] leading-[20.48px] text-sm flex items-center gap-2"><span><Image src={Icons["Check"]} alt="Star" className="bg-[#3178c6] w-4 h-4"/></span>Múltiplas funcionalidades</h1>
            <h1 className="tracking-[0.32px] leading-[20.48px] text-sm flex items-center gap-2"><span><Image src={Icons["Check"]} alt="Star" className="bg-[#3178c6] w-4 h-4"/></span>Pagamento e prazo sem surpresa</h1>
            <h1 className="tracking-[0.32px] leading-[20.48px] text-sm flex items-center gap-2"><span><Image src={Icons["Check"]} alt="Star" className="bg-[#3178c6] w-4 h-4"/></span>8x mais rápido e 77% mais barato</h1>
            </div>
            <div className="flex justify-center mt-10">
            <Image src={Dash} alt="Dash" className=""/>
            </div>
        </div>
    )
}

export default Advantage;