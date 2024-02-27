import Products from "./Products";
import TitleBarMin from "@/components/elements/TitleBar/TitleBarMin";
const ProductsPage = () => {
  return (
    <>
      {/* <TitleBarMin title="Our Products"></TitleBarMin> */}
      <div className='mb-4'>
        {/* For the gap below nav */}
        <p>For the gap below nav</p>
      </div>
      <Products />
    </>
  );
};

export default ProductsPage;
