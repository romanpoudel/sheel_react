import Footer from "@/components/elements/Footer/Footer"
import Navbar from "@/components/elements/Navbar/Navbar"
import NavbarOld from "@/components/elements/Navbar/NavbarOld"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer />

        </>
    )
}

export default MainLayout