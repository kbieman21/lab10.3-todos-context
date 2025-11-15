import {createContext, useState } from "react";

export const FilterContext = createContext('active')

interface FilterProviderProps{
    children: React.ReactNode;
}

// type = 'all' |'active' |'completed';

export function FilterProvider({children}:FilterProviderProps){
    const [filter, setFilter] = useState<'all' |'active' |'completed'>('all');
    //  const [filter, setFilter] = useState('active');
    return(
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}