import Image from "next/image";
import Icons from "@/utils/Icons";

const Specialties = () => {
    return(
        <div className="px-8 pb-14 text-center mx-auto">
            <h1 className="mt-7 text-[40px] font-bold tracking-[0.64px] leading-[32.48px] mb-10">Especialidades</h1>
            <div className="gap-4 grid-cols-2 flex flex-wrap justify-center mx-auto text-center">
            <div className="w-[150px] h-[150px] rounded-3xl bg-[#efd81d] shadow-xl pt-8">
                <Image
                src={Icons["Js"]}
                alt="Js"
                className="w-[400px] h-[40px]"
                />
                <h1 className="text-[#000000] tracking-[0.32px] leading-[116%] text-sm font-extrabold mt-2">JavaScript</h1>
            </div>
            <div className="w-[150px] h-[150px] rounded-3xl bg-[#55e5fe] shadow-xl pt-8">
                <Image
                src={Icons["React"]}
                alt="Js"
                className="w-[400px] h-[40px]"
                />
                <h1 className="text-[#000000] tracking-[0.32px] leading-[116%] text-sm font-extrabold mt-2">ReactJs</h1>
            </div>
            <div className="w-[150px] h-[150px] rounded-3xl bg-[#f7f7f7] shadow-xl pt-8">
                <Image
                src={Icons["NextJs"]}
                alt="Js"
                className="w-[400px] h-[40px]"
                />
                <h1 className="text-[#000000] tracking-[0.32px] leading-[116%] text-sm font-extrabold mt-2">NextJs</h1>
            </div>
            <div className="w-[150px] h-[150px] rounded-3xl bg-[#3178c6] shadow-xl pt-8">
                <Image
                src={Icons["TypeScript"]}
                alt="Js"
                className="w-[400px] h-[40px]"
                />
                <h1 className="text-[#000000] tracking-[0.32px] leading-[116%] text-sm font-extrabold mt-2">TypeScript</h1>
            </div>
            </div>
        </div>
    )
}

export default Specialties;