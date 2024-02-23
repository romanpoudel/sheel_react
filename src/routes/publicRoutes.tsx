import About from "@/containers/About/About";
import Contact from "@/containers/Contact/Contact";
import Home from "@/containers/Home/Home";

export const publicRoutes = [
    {
        path:'',
        component: <Home />

    },
    {
        path:'about',
        component: <About />
        
    },
    {
        path:'contact',
        component: <Contact />
        
    }
]