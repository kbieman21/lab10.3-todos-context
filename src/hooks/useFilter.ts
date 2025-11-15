import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";



function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return context;
}
export default useFilter;
