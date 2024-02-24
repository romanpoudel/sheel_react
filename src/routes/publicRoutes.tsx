import About from "@/containers/About/About";
import BituminousWaterproofingMembrane from "@/containers/BituminousWaterproofingMembrane/BituminousWaterproofingMembrane";
import CementitiousWaterproofingMembrane from "@/containers/CementitiousWaterproofing/CementitiousWaterproofing";
import Contact from "@/containers/Contact/Contact";
import Home from "@/containers/Home/Home";
import ProductsPage from "@/containers/Products/Products";

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
    },
    {
        path:'products',
        component: <ProductsPage />
        
    },
    {
        path:'bituminouswaterproofingmembrane',
        component: <BituminousWaterproofingMembrane />
        
    },
    {
        path:'cementitiouswaterproofing',
        component: <CementitiousWaterproofingMembrane />
        
    },

    
]