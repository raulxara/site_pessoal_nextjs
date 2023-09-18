const Header = () => {
    return (
        <div className="border-b-2 border-[#0a0a0a] sm:flex justify-between items-center py-6">
            <div className="pl-8">
            <a href="/" className="text-[28px] font-extrabold tracking-[0.32px] leading-[32.48px]">
                Raul Cruz
            </a>
            </div>
            <div className="hidden sm:block pr-8">
            <ul className="flex space-x-8 tracking-[0.32px] leading-[116%] text-sm font-bold">
                <li><a className="cursor-pointer">Sobre</a></li>
                <li><a className="cursor-pointer">Especialidades</a></li>
                <li><a className="cursor-pointer">Projetos</a></li>
                <li><a href="/contato">Contato</a></li>
            </ul>
            </div>
            {/* <Image
            src={Icons["SideBar"]}
            alt="SideBar"
            className="absolute right-8 top-[35.5px] sm:hidden block cursor-pointer"
            />
            <div>
            <ul className="text-sm space-y-4 py-4 top-[83px] absolute t text-center tracking-[0.32px] leading-[116%] sm:hidden block bg-[#414851] w-full font-bold">
                <li className="cursor-pointer"><a>Sobre</a></li>
                <hr></hr>
                <li className="cursor-pointer"><a>Especialidades</a></li>
                <hr></hr>
                <li className="cursor-pointer"><a>Projetos</a></li>
                <hr></hr>
                <li className="cursor-pointer"><a href="/contato">Contato</a></li>
            </ul>
            </div> */}
        </div>
    )
}

export default Header;