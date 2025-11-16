import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function FilterControls() {
  const { filter, setFilter } = useContext(FilterContext);


   
  return (
    <div className="grid grid-cols-3 gap-2 mb-5">
     
      <div >
         <button onClick={()=> setFilter('all')}
         style={{fontWeight: filter=== 'all' ? 'bold' : 'normal'}}
         className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >All</button>
      </div>
      <div>
       <button onClick={()=> setFilter('active')}
        style={{fontWeight: filter=== 'active' ? 'bold' : 'normal'}}
        >Active</button>
      </div>
      <div>
         <button onClick={()=> setFilter('completed')}
         style={{fontWeight: filter=== 'completed' ? 'bold' : 'normal'}}
        >Completed</button>

      </div>
    </div>
  );
}

export default FilterControls;
