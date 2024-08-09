import { createContext, useContext, useState } from "react";

export const TotalContext = createContext({});

export const useTotalInvoice = () => useContext(TotalContext);

export function TotalContextProvider({children}) {
    const [total, setTotal] = useState(0);
    return (
        <TotalContext.Provider value={{total, setTotal}}>
            {children}
        </TotalContext.Provider>
        
    );
}