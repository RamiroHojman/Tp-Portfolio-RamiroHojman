
import { createContext, useState } from "react"

export const FavoritosContext = createContext(null)


export const FavoritosProvider = ({ children }) => {

    const [FavoritosG, setFavoritosG] = useState([JSON.parse(localStorage.getItem('Favoritos'))] || null)
    

    return (
        <FavoritosContext.Provider value={{FavoritosG, setFavoritosG}}>
            {children}
        </FavoritosContext.Provider>
    )
}