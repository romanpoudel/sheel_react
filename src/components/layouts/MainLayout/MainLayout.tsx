import Footer from "@/components/elements/Footer/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>

       

            <Outlet />
            <Footer />

        </>
    )
}

export default MainLayout