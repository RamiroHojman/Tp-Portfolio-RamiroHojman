import React from "react";
// import { useCreaciones } from "../Context/CreacionesContext";
import BasicExample from "../NavBar/Navbar";
import { CardCreacion } from "../HomePage/CardCreacion";
import { FavoritosContext } from '../Context/CreacionesContext';
import { useContext } from "react";

export function Favoritos(){
    // const {listaFavoritos} = useCreaciones()
    // const {prueba} = useCreaciones()
    const {FavoritosG} = useContext(FavoritosContext)
    console.log(FavoritosG)
    
    return(
        <>
        {
                FavoritosG && FavoritosG[1].map(listaCreaciones =>(
                    <CardCreacion key={listaCreaciones.id} nombre = {listaCreaciones.titulo} imagen = {listaCreaciones.img} texto = {listaCreaciones.descripción}/>
                ))
            }
        </>
    )
    
}