import About from "@/containers/About/About";
import BituminousWaterproofingMembrane from "@/containers/Services/BituminousWaterproofingMembrane";
import CementitiousWaterproofingMembrane from "@/containers/Services/CementitiousWaterproofing";
import ContactUsPage from "@/containers/Contact/ContactUsPage";
import Home from "@/containers/Home/Home";
import InjectionWaterproofing from "@/containers/Services/InjectionWaterproofing";
import LiquidWaterproofingMembrane from "@/containers/Services/LiquidWaterproofingMembrane";
import PolyurethaneWaterproofing from "@/containers/Services/PolyurethaneWaterproofing";
import ProductsPage from "@/containers/Products/ProductsPage";
import RoofWaterproofing from "@/containers/Services/RoofWaterproofing";
import Geomembranes from "@/containers/Services/Geomembranes";
import ServicesPage from "@/containers/Services/ServicesPage";
import SheetMembranes from "@/containers/Services/SheetMembranes";
import VistaAfaSuper from "@/containers/Products/VistaAfaSuper";
import VistaCrystalPlus from "@/containers/Products/VistaCrystalPlus";
import VistaFlexSealPlus from "@/containers/Products/VistaFlexSealPlus";
import VistaIwa from "@/containers/Products/VistaIwa";
import VistaNoThree from "@/containers/Products/VistaNoThree";
import VistaNoTwo from "@/containers/Products/VistaNoTwo";
import VistaPowerSilicaFume from "@/containers/Products/VistaPowerSilicaFume";
import VistaSbrLatexPlus from "@/containers/Products/VistaSbrLatexPlus";
import VistaShotX from "@/containers/Products/VistaShotX";
import VistaSuperCrete from "@/containers/Products/VistaSuperCrete";
import VistaSuperPlastHs from "@/containers/Products/VistaSuperplastHs";
import VistaSuperplastHs1000 from "@/containers/Products/VistaSuperplastHs1000";
import VistaSealIt from "@/containers/Products/VistaSealIt";
import AboutUsPage from "@/containers/About/AboutUsPage";

export const publicRoutes = [
  {
    path: "",
    component: <Home />,
  },
  {
    path: "about",
    component: <AboutUsPage />,
  },
  {
    path: "contact",
    component: <ContactUsPage />,
  },
  {
    path: "products",
    component: <ProductsPage />,
  },
  {
    path: "services",
    component: <ServicesPage />,
  },

  {
    path: "services/bituminous-waterproofing-membrane",
    component: <BituminousWaterproofingMembrane />,
  },
  {
    path: "services/cementitious-waterproofing",
    component: <CementitiousWaterproofingMembrane />,
  },
  {
    path: "services/injection-waterproofing",
    component: <InjectionWaterproofing />,
  },
  {
    path: "services/liquid-waterproofing-membrane",
    component: <LiquidWaterproofingMembrane />,
  },
  {
    path: "services/polyurethane-waterproofing",
    component: <PolyurethaneWaterproofing />,
  },
  {
    path: "services/roof-waterproofing",
    component: <RoofWaterproofing />,
  },
  {
    path: "products/vista-afa-super",
    component: <VistaAfaSuper />,
  },
  {
    path: "products/vista-crystal-plus",
    component: <VistaCrystalPlus />,
  },
  {
    path: "products/vista-flex-seal-plus",
    component: <VistaFlexSealPlus />,
  },
  {
    path: "products/vista-iwa",
    component: <VistaIwa />,
  },
  {
    path: "products/vista-no-2",
    component: <VistaNoTwo />,
  },
  {
    path: "products/vista-no-3",
    component: <VistaNoThree />,
  },
  {
    path: "products/vista-power-silica-fume",
    component: <VistaPowerSilicaFume />,
  },
  {
    path: "products/vista-sbr-latex-plus",
    component: <VistaSbrLatexPlus />,
  },
  {
    path: "products/vista-shot-x",
    component: <VistaShotX />,
  },
  {
    path: "products/vista-super-crete",
    component: <VistaSuperCrete />,
  },
  {
    path: "products/vista-superplast-hs",
    component: <VistaSuperPlastHs />,
  },
  {
    path: "products/vista-superplast-hs-1000",
    component: <VistaSuperplastHs1000 />,
  },
  {
    path: "products/vista-seal-it",
    component: <VistaSealIt />,
  },
  {
    path: "services/geomembranes",
    component: <Geomembranes />,
  },
  {
    path: "services/sheet-membranes",
    component: <SheetMembranes />,
  },
];
