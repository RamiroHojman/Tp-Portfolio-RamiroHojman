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
                FavoritosG && FavoritosG.map((listaCreaciones, index) =>(
                    <CardCreacion key={index} nombre = {listaCreaciones.nombre} imagen = {listaCreaciones.imagen} texto = {listaCreaciones.texto}/>
                ))
            }
        </>
    )
    
}