import { useLocation } from 'react-router-dom';
import { FavoritosContext } from '../Context/CreacionesContext';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalComponent from '../Modal/Modal'

export function Creacion() {
    const location = useLocation();
    const { FavoritosG, setFavoritosG } = useContext(FavoritosContext);

    // Estado para controlar la visibilidad del modal
    const [showModal, setShowModal] = useState(false);

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

        // Abre el modal después de guardar en favoritos
        setShowModal(true);
    }

    function borrar() {
        // Implementa la lógica para eliminar el elemento actual de FavoritosG
        const updatedFavoritosG = FavoritosG.filter(item => item.id !== location.state.id);

        setFavoritosG(updatedFavoritosG);
        localStorage.setItem('Favoritos', JSON.stringify(updatedFavoritosG));
    }

    // Verifica si el elemento actual está en la lista de favoritos
    const estaEnFavoritos = FavoritosG && FavoritosG.some(item => item.id === location.state.id);

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
                            {estaEnFavoritos && <Button className="botonCreacion" variant="danger" onClick={borrar}>Borrar</Button>}
                            <Button className="botonCreacion" onClick={apretar}>Favoritos</Button>
                        </div>
                    </div>
                </div>
            </div>

            {showModal && <ModalComponent />}
        </>
    )
}
