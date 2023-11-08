import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from '../Context/CreacionesContext';
import { Button } from "react-bootstrap";

export function Creacion() {
    const location = useLocation();
    const { FavoritosG, setFavoritosG } = useContext(FavoritosContext);

    function apretar() {
        const fav = location.state;
        let updatedFavoritosG;

        if (FavoritosG === null) {
            updatedFavoritosG = [fav];
        } else {
            updatedFavoritosG = [...FavoritosG, fav];
        }

        setFavoritosG(updatedFavoritosG);
        localStorage.setItem('Favoritos', JSON.stringify(updatedFavoritosG));
        console.log("localstorage", localStorage.getItem('Favoritos'));
        console.log("FavoritosG", updatedFavoritosG);
    }

    function borrar() {
        localStorage.removeItem('Favoritos');
    }

    return (
        <>
            <div className="container Creacion">
                <div className="componentesybotones">
                    <div className="creacionComponents">
                        <div className="creacionVista">
                            <img className="imagen" src={location.state.imagen} alt="imagen" />
                        </div>
                        <div className="creacionDetalles">
                            <h1 className="tituloCreacion">{location.state.nombre}</h1>
                            <h2 className="textoCreacion">Descripción: {location.state.texto}</h2>
                            <h2 className="textoCreacion">Fecha: {location.state.fecha}</h2>
                        </div>
                        <div className="botonesCreacion">
                            <Button className="botonCreacion" variant="danger" onClick={borrar}>Borrar</Button>
                            <Button className="botonCreacion" onClick={apretar}>Favoritos</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
