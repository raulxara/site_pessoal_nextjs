import Insta from "@/assets/images/instagram.png";
import Git from "@/assets/images/github.png";
import Linkedin from "@/assets/images/linkedin.png";
import Image from "next/image";

const Footer = () => {
    return(
        <footer className="p-8 border-t-2 border-[#0a0a0a]">
        <div className="sm:flex justify-between">
          <div>
            <h1 className="tracking-[0.32px] leading-[20.48px] text-sm">Copyright © 2023. CNPJ 51.461.116/0001-69.</h1>
            <h1 className="tracking-[0.32px] leading-[20.48px] text-sm">Todos os direitos reservados.</h1>
          </div>
          <div className="mt-8 flex justify-between sm:mt-0 sm:flex-col sm:gap-y-2 md:flex-row md:gap-x-4 mc:gap-y-0">
          <a href="https://www.linkedin.com/in/raul-cruz-223340165/" className="tracking-[0.32px] leading-[20.48px] text-sm flex items-center gap-1"><span><Image src={Linkedin} alt="Star" className=" w-6 h-6"/></span>LinkedIn</a>
          <a href="https://www.instagram.com/raul.xara/" className="tracking-[0.32px] leading-[20.48px] text-sm flex items-center gap-1"><span><Image src={Insta} alt="Star" className="w-6 h-6"/></span>Instagram</a>
          <a href="https://github.com/raulxara" className="tracking-[0.32px] leading-[20.48px] text-sm flex items-center gap-1"><span><Image src={Git} alt="Star" className="bg-[#ffffff] rounded-sm w-6 h-6"/></span>GitHub</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;