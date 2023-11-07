
import { createContext, useState } from "react"

export const FavoritosContext = createContext(null)


export const FavoritosProvider = ({ children }) => {

    const [FavoritosG, setFavoritosG] = useState([JSON.parse(localStorage.getItem('Favoritos'))] || null)

    const agregarFavoritos = (a) =>{
        setFavoritosG(...FavoritosG,a)
    }
    
    return (
        <FavoritosContext.Provider value={{FavoritosG, setFavoritosG, agregarFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}
