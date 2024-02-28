import { FC, useState } from "react";
import MyLiveSearch from "./MyLiveSearchBox";
import { products } from "@/containers/Products/ProductsArray";
import { services } from "@/containers/Services/ServicesArray";

const MyApp: FC = (): JSX.Element => {
  const [results, setResults] = useState<(typeof products[number] | typeof services[number])[]>();
  const [selectedItem, setSelectedItem] = useState<(typeof products[number] | typeof services[number])>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const trimmedValue = value.trim().toLowerCase();
  
    if (!trimmedValue) return setResults([]);
  
    const combinedArray = [...products, ...services];
  
    console.log("Combined array:", combinedArray); // Add this line for debugging
  
    const filteredResults = combinedArray.filter(item =>
      item.cardTitle.toLowerCase().includes(trimmedValue)
    );
  
    console.log("Filtered results:", filteredResults); // Add this line for debugging
  
    setResults(filteredResults);
  };

  
  

  return (
    <MyLiveSearch
      results={results}
      value={selectedItem?.cardTitle}
      renderItem={(item) => <p>{item.cardTitle}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedItem(item)}
    />
  );
};

export default MyApp;
