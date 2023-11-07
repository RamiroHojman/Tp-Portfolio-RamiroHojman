import React from "react";
import "./HomePage.css"
import { Link } from "react-router-dom";
export function CardCreacion(props) {
    return (
        <div className="container CardCreacion">
        <Link to="/Creacion" state={props} className="botonLink">
            <div className="cardContent">
                <div className="textoHome">
                    <h3 className="titulo">{props.nombre}</h3>
                    <h5 className="subtitulo"> {props.texto}</h5>
                </div>
                <div className="imagenDiv">
                    <img className="image" src={props.imagen} />
                </div>
                <div className="linea"></div>
            </div>
        </Link>
        </div>
    )
}