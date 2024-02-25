import About from "@/containers/About/About";
import BituminousWaterproofingMembrane from "@/containers/BituminousWaterproofingMembrane/BituminousWaterproofingMembrane";
import CementitiousWaterproofingMembrane from "@/containers/CementitiousWaterproofing/CementitiousWaterproofing";
import Contact from "@/containers/Contact/Contact";
import Home from "@/containers/Home/Home";
import InjectionWaterproofing from "@/containers/InjectionWaterproofing/InjectionWaterproofing";
import LiquidWaterproofingMembrane from "@/containers/LiquidWaterproofingMembrane/LiquidWaterproofingMembrane";
import ProductsPage from "@/containers/Products/ProductsPage";
import ServicesPage from "@/containers/Services/ServicesPage";
import PolyurethaneWaterproofing from "@/containers/PolyurethaneWaterproofing/PolyurethaneWaterproofing";
import RoofWaterproofing from "@/containers/RoofWaterproofing/RoofWaterproofing";
import VistaAfaSuper from "@/containers/VistaAfaSuper/VistaAfaSuper";
import VistaCrystalPlus from "@/containers/VistaCrystalPlus/VistaCrystalPlus";
import VistaFlexSealPlus from "@/containers/VistaFlexSealPlus/VistaFlexSealPlus";
import VistaIwa from "@/containers/VistaIwa/VistaIwa";
import VistaNoTwo from "@/containers/VistaNoTwo/VistaNoTwo";

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
        path:'services',
        component: <ServicesPage />
        
    },
    {
        path:'bituminouswaterproofingmembrane',
        component: <BituminousWaterproofingMembrane />
        
    },
    {
        path:'cementitiouswaterproofing',
        component: <CementitiousWaterproofingMembrane />
        
    },
    {
        path:'injectionwaterproofing',
        component: <InjectionWaterproofing />
        
    },
    {
        path:'liquidwaterproofingmembrane',
        component: <LiquidWaterproofingMembrane />
        
    },
    {
        path:'polyurethanewaterproofing',
        component: <PolyurethaneWaterproofing />
        
    },
    {
        path:'roofwaterproofing',
        component: <RoofWaterproofing />
        
    },
    {
        path:'vistaafasuper',
        component: <VistaAfaSuper />
        
    },
    {
        path:'vistacrystalplus',
        component: <VistaCrystalPlus />
        
    },
    {
        path:'vistaflexsealplus',
        component: <VistaFlexSealPlus />
        
    },
    {
        path:'vistaiwa',
        component: <VistaIwa />
        
    },
    {
        path:'vistanotwo',
        component: <VistaNoTwo />
        
    },

    
]