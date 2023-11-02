import React from "react";
import { useLocation } from "react-router-dom";
// import { useCreaciones } from "../Context/CreacionesContext";
import BasicExample from "../NavBar/Navbar";
import { useContext } from "react"
import { FavoritosContext } from '../Context/CreacionesContext';
import { Favoritos } from "../Favoritos/Favoritos";
export function Creacion() {
    // const {agregarFavoritos} = useCreaciones()
    const location = useLocation();
    const {setFavoritosG} = useContext(FavoritosContext)
    const {FavoritosG} = useContext(FavoritosContext)
    function apretar(){
        setFavoritosG([...FavoritosG, location.state]);
        console.log(FavoritosG);
        localStorage.setItem('Favoritos', JSON.stringify([...FavoritosG, location.state]));
        console.log("localstorage", localStorage.getItem('Favoritos'));
    }
    function borrar(){
        localStorage.removeItem('Favoritos')
    }
    return (
        <>
        <BasicExample/>
        <h1>Lol</h1>    
        <button onClick={apretar}>favoritos</button>
        <button onClick={borrar}>Borrar</button>
        </>
    )
}