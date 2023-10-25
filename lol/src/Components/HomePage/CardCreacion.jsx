import React from "react";
import "./HomePage.css"
export function CardCreacion(props){
    return(
        <div className="card">
            <h3>{props.nombre}</h3>
            <img src={props.imagen}/>
            <h5>{props.texto}</h5>
        </div>
    )
}