import React from "react";
import "./HomePage.css"
import { Link } from "react-router-dom";
export function CardCreacion(props){
    return(
        <Link to ="/Creacion" className="card">
            <h3>{props.nombre}</h3>
            <img src={props.imagen}/>
            <h5>{props.texto}</h5>
        </Link>
    )
}