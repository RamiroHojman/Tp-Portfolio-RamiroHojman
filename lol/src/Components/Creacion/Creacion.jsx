import React from "react";
import { useLocation } from "react-router-dom";
// import { useCreaciones } from "../Context/CreacionesContext";
import BasicExample from "../NavBar/Navbar";
import { useContext } from "react"
import { FavoritosContext } from '../Context/CreacionesContext';
import { Favoritos } from "../Favoritos/Favoritos";
import "./Creacion.css"
import { Button } from "react-bootstrap";
export function Creacion() {
    // const {agregarFavoritos} = useCreaciones()
    const location = useLocation();
    console.log(location.state)
    const { setFavoritosG } = useContext(FavoritosContext)
    const { FavoritosG } = useContext(FavoritosContext)
    function apretar() {
        setFavoritosG([...FavoritosG, location.state]);
        console.log(FavoritosG);
        localStorage.setItem('Favoritos', JSON.stringify([...FavoritosG, location.state]));
        console.log("localstorage", localStorage.getItem('Favoritos'));
    }
    function borrar() {
        localStorage.removeItem('Favoritos')
    }
    return (
        <>
            <div className="container Creacion">
                <div className="componentesybotones">
                    <div className="creacionComponents">
                        <div className="creacionVista">
                            <img className="imagen" src={location.state.imagen} />
                        </div>
                        <div className="creacionDetalles">
                            <h1 className="tituloCreacion">{location.state.nombre}</h1>
                            <h2 className="textoCreacion">Descripción: {location.state.texto}</h2>
                            <h2 className="textoCreacion">Fecha: {location.state.fecha}</h2>

                        </div>
                        <div className="botonesCreacion">
                        <Button className="botonCreacion" variant="danger" onClick={borrar}>Borrar</Button>
                        <Button className="botonCreacion" onClick={apretar}>favoritos</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}