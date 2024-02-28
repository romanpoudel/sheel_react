import { FC, useState } from "react";
import MyLiveSearch from "./MyLiveSearchBox";
import { products } from "@/containers/Products/ProductsArray";

interface Props {}

const MyApp: FC<Props> = (props): JSX.Element => {
  const [results, setResults] = useState<typeof products[number][]>();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[number]>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const trimmedValue = value.trim().toLowerCase();

    if (!trimmedValue) return setResults([]);

    const filteredValue = products.filter((product) =>
      product.cardTitle.toLowerCase().includes(trimmedValue)
    );

    setResults(filteredValue);
  };

  return (
    <MyLiveSearch
      results={results}
      value={selectedProduct?.cardTitle}
      renderItem={(item) => <p>{item.cardTitle}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProduct(item)}
    />
  );
};

export default MyApp;
