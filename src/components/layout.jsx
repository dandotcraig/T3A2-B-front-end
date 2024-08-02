import Header from "./header";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <main className="mt-16 flex flex-col items-center justify-center gap-8">
            <Header />
            <Outlet />
        </main>
    )
    
};
