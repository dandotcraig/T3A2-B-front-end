import logo from "../assets/logo.svg"
import ModeToggle from "@/components/mode-toggle"


export default function Header() {
    return(
        <header className="fixed inset-x-0 top-0 z-50 border shadow-sm ">
            <nav className="flex items-center justify-between p-2 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Sup invoice</span>
                        <img className="h-8 w-auto" src={logo} alt=""/>
                    </a>
                </div>
                <div className="flex flex-1 justify-end">
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}    

// export default Header;