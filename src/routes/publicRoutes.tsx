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
import VistaNoThree from "@/containers/VistaNoThree/VistaNoThree";
import VistaPowerSilicaFume from "@/containers/VistaPowerSilicaFume/VistaPowerSilicaFume";
import VistaSbrLatexPlus from "@/containers/VistaSbrLatexPlus/VistaSbrLatexPlus";
import VistaShotX from "@/containers/VistaShotX/VistaShotX";
import VistaSuperCrete from "@/containers/VistaSuperCrete/VistaSuperCrete";
import VistaSuperplastHs1000 from "@/containers/VistaSuperplastHS1000/VistaSuperplastHs1000";

export const publicRoutes = [
    {
        path: '',
        component: <Home />
    },
    {
        path: 'about',
        component: <About />
    },
    {
        path: 'contact',
        component: <Contact />
    },
    {
        path: 'products',
        component: <ProductsPage />
    },
    {
        path: 'services',
        component: <ServicesPage />
    },
    {
        path: 'bituminous-waterproofing-membrane',
        component: <BituminousWaterproofingMembrane />
    },
    {
        path: 'cementitious-waterproofing',
        component: <CementitiousWaterproofingMembrane />
    },
    {
        path: 'injection-waterproofing',
        component: <InjectionWaterproofing />
    },
    {
        path: 'liquid-waterproofing-membrane',
        component: <LiquidWaterproofingMembrane />
    },
    {
        path: 'polyurethane-waterproofing',
        component: <PolyurethaneWaterproofing />
    },
    {
        path: 'roof-waterproofing',
        component: <RoofWaterproofing />
    },
    {
        path: 'vista-afa-super',
        component: <VistaAfaSuper />
    },
    {
        path: 'vista-crystal-plus',
        component: <VistaCrystalPlus />
    },
    {
        path: 'vista-flex-seal-plus',
        component: <VistaFlexSealPlus />

    },
    {
        path: 'vista-iwa',
        component: <VistaIwa />
    },
    {
        path: 'vista-no-2',
        component: <VistaNoTwo />
    },
    {
        path: 'vista-no-3',
        component: <VistaNoThree />
    },
    {
        path: 'vista-power-silica-fume',
        component: <VistaPowerSilicaFume />
    },
    {
        path: 'vista-sbr-latex-plus',
        component: <VistaSbrLatexPlus />
    },
    {
        path: 'vista-shot-x',
        component: <VistaShotX />
    },
    {
        path: 'vista-super-crete',
        component: <VistaSuperCrete />
    },
    {
        path: 'vista-superplast-hs-1000',
        component: <VistaSuperplastHs1000 />
    },


]