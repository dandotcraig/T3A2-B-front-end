import { Link } from "react-router-dom"
// import logo from "../assets/logo.svg"
import ModeToggle from "@/components/modules/mode-toggle"
import { useContext, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { UserContext } from "@/context/UserContext"
import SvgComponent from "./svgLogo"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "../ui/toaster";

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext)

    const { toast } = useToast()

    useEffect(() => {
        fetch('https://t3a2-b-server.onrender.com/profile', {
            credentials: 'include',
        }).then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                    setUserInfo(data.information)
                })
            }
        })
    }, [setUserInfo]);

    function logout() {
        fetch('https://t3a2-b-server.onrender.com/logout', {
            credentials: 'include',
            method: 'POST'
        });
        toast({
            title: "Notification",
            description: "Logged out, cya next time!",
            })
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return(
        <header className="fixed inset-x-0 top-0 z-50 border shadow-sm backdrop-blur-md bg-white/10">
            <Toaster/>
            <nav className="flex items-start justify-between p-4 px-8 sm:px-1 md:px-4 lg:px-4 xl:px-4 2xl:px-4 max-w-[1279px] mx-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="items-center z-50">
                        <span className="sr-only">Sup invoice</span>
                        <SvgComponent theme="dark" />
                    </a>
                </div>
                <nav className="flex gap-2 items-center justify-end">
                    
                    {username && (
                        <>
                            <p className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">Hello {username}</p>
                            <ModeToggle />
                            <Link to="/"><Button onClick={logout} variant="outline">Logout</Button></Link>
                        </>
                    )}
                    {!username && (
                        <>
                            <ModeToggle />
                            <Button disabled>Logout</Button>
                        </>
                    )}
                </nav>
            </nav>
        </header>
    )
};