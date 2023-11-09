import { useLocation } from 'react-router-dom';
import { FavoritosContext } from '../Context/CreacionesContext';
import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ModalComponent from '../Modal/Modal';

export function Creacion() {
    const location = useLocation();
    const { FavoritosG, setFavoritosG, usuarios, setUsuarios } = useContext(FavoritosContext);

    // Estado para controlar la visibilidad del modal
    const [showModal, setShowModal] = useState(false);
    const [tempMail, setTempMail] = useState("");

    // Limpiar el estado cuando la ubicación cambie
    useEffect(() => {
        setShowModal(false); // Cierra el modal al cambiar de proyecto
    }, [location.pathname]);

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

        // Guardar el correo en el contexto
        if (usuarios) {
            setUsuarios({
                ...usuarios,
                mail: tempMail,
            });
        }

        // Abre el modal después de guardar en favoritos
        setShowModal(true);
    }

    function borrar() {
        // Obtenemos el id del proyecto actual desde el estado del componente
        const proyectoId = location.state.id;
    
        // Implementamos la lógica para eliminar solo el proyecto actual de FavoritosG
        const updatedFavoritosG = FavoritosG.filter(item => item.id !== proyectoId);
    
        setFavoritosG(updatedFavoritosG);
        localStorage.setItem('Favoritos', JSON.stringify(updatedFavoritosG));
    }
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
                                <Button className="botonCreacion" variant="danger" onClick={borrar}>
                                    Borrar
                                </Button>
                                <Button className="botonCreacion" onClick={apretar}>
                                    Favoritos
                                </Button>
                            {showModal && <ModalComponent />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}