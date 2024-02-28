import CardWithImage from "@/components/elements/Card/CardThreeDImage";
import TitleWithContent from "@/components/elements/TitleWithContent/TitleWithContent";
import { useSearch } from "@/hooks/useSearch";
import { products } from "./ProductsArray";

interface ProductProps {
  linkUrl: string;
  imageUrl: string;
  cardTitle: string;
  cardContent: string;
}

const Products: React.FC = () => {
  const searchContext = useSearch();
  const searchQuery = searchContext?.searchQuery;

  const filteredProducts = ({ product }: { product: ProductProps }) => {
    return product.cardTitle
      .toLowerCase()
      .includes((searchQuery ?? "").toLowerCase());
  };

  return (
    <>
      <TitleWithContent title="Products" />
      <div className="flex flex-wrap justify-center gap-12">
        {products
          .filter((product: ProductProps) => {
            return filteredProducts({ product });
          })
          .map((product) => {
            return (
              <CardWithImage
                key={product.linkUrl}
                linkUrl={product.linkUrl}
                imageUrl={product.imageUrl}
                cardTitle={product.cardTitle}
                cardContent={product.cardContent}
              />
            );
          })}
      </div>
    </>
  );
};

export default Products;
