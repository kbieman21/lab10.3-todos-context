import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function FilterControls() {
  const { filter, setFilter } = useContext(FilterContext);


   // Filter button handlers
  const allFilter = () => setFilter('all');
  const activeFilter = () => setFilter('active');
  const completeFilter = () => setFilter('completed');

  return (
    <>
      <h1>Filter Component</h1>
      <div>
        Filter: <button onClick={allFilter}>All</button>
      </div>
      <div>
        Filter: <button onClick={activeFilter}>Active</button>
      </div>
      <div>
        Filter: <button onClick={completeFilter}>Completed</button>
      </div>
    </>
  );
}

export default FilterControls;
