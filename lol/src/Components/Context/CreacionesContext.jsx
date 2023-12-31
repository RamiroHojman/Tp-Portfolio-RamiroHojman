import { createContext, useState } from "react"

export const FavoritosContext = createContext(null)


export const FavoritosProvider = ({ children }) => {
    const storedFavoritos = JSON.parse(localStorage.getItem('Favoritos'));
    const [FavoritosG, setFavoritosG] = useState(Array.isArray(storedFavoritos) ? storedFavoritos : []);
    //La de idea de los usuarios es hacer una lista de favoritos x usuario. Hacer un objeto usuario que tenga mail y la lista de favoritos.
    const [usuarios, setUsuarios] = useState() 
    
    return (
        <FavoritosContext.Provider value={{FavoritosG, setFavoritosG, usuarios, setUsuarios}}>
            {children}
        </FavoritosContext.Provider>
    )
}
