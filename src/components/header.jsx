import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import ModeToggle from "@/components/mode-toggle"
import { useContext, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { UserContext } from "@/context/UserContext"

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
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
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return(
        <header className="fixed inset-x-0 top-0 z-50 border shadow-sm">
            <nav className="flex items-center justify-between p-2 lg:px-8 max-w-[1279px] mx-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Sup invoice</span>
                        <img className="h-8 w-auto" src={logo} alt=""/>
                    </a>
                </div>
                <nav className="flex gap-2 items-center flex-1 justify-end">
                    
                    {username && (
                        <>
                            <p>Hello {username}</p>
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