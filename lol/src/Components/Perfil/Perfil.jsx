import React from "react";
import infopersonal from "../repositorios/InfoPersonal.json";
import "./Perfil.css"
export function Perfil() {
    return (
        <div className="perfil-container">
            <div className="banner"><img src={infopersonal[1].banner} /></div>
            <div className="fotonombre">
                <div className="foto"><img src={infopersonal[1].img} /></div>
                <h2>{infopersonal[1].nombre}</h2>
                <h5>{infopersonal[1].rol}</h5>
                <h6 className="ubicacion">{infopersonal[1].ubicacion}</h6>
            </div>
            <div className="lineaPerfil"></div>
            <div className="infoPerfil">
                <p>{infopersonal[1].descripción}</p>
                <p>Nacimiento: {infopersonal[1].nacimiento}</p>
            </div>
            <div className="lineaPerfil"></div>
            <div className="infoPerfil">
                <p>Skills:</p>
                <ul>
                    {infopersonal[1].skills.map((skill) => (
                        <li>{skill}</li>
                    ))}
                </ul>
                
            </div>
            <div className="lineaPerfil"></div>
        </div>
    );
}