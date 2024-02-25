import { ReactElement, createContext, useState } from "react";

export interface IQueryContext {
  searchQuery: string;
  handleSetSearchQuery: (query: string) => void;
}
export const SearchContext = createContext<IQueryContext | null>(null);

export default function SearchProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSetSearchQuery = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <SearchContext.Provider value={{ searchQuery, handleSetSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
