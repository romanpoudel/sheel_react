import Footer from "@/components/elements/Footer/Footer"
import NavbarOld from "@/components/elements/Navbar/NavbarOld"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <NavbarOld/>
            <Outlet />
            <Footer />

        </>
    )
}

export default MainLayout