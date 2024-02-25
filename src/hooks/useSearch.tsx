import { useContext } from "react";
import { IQueryContext, SearchContext } from "../contexts/searchContext";

export const useSearch = () => useContext<IQueryContext | null>(SearchContext);
