import { useState } from "react";
import { RefreshContext } from "./RefreshContext.js";


export const RefreshProvider = ({children}) => {
    const [refresh, setRefresh] = useState(false)

    const triggerRefresh = () => setRefresh((prev) => !prev)

    return (
         <RefreshContext.Provider value={{refresh, triggerRefresh}}>
            {children}
        </RefreshContext.Provider>
    )
}
