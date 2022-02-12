import Nav from "./Nav"
import { Outlet } from "react-router"

const Layout = () => {
    return (
        <div className="bg-yellow-400 min-h-screen" >
            <Nav/>
            <main className="flex justify-center items-center">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout