import CardWithImage from "@/components/elements/Card/CardThreeDImage";
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent";
import { products } from "./ProductsArray";

const Products: React.FC = () => {
  return (
    <>
      <TitleWithContent title="Products" />
      <div className="flex flex-wrap justify-center gap-12">
        {products.map((product, index) => (
          <CardWithImage
            linkUrl={product.linkUrl}
            imageUrl={product.imageUrl}
            cardTitle={product.cardTitle}
            cardContent={product.cardContent}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
