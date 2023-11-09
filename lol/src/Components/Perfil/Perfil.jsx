import React from "react";
import infopersonal from "../repositorios/InfoPersonal.json";
import "./Perfil.css"
export function Perfil() {
    return (
        <div className="perfil-container">
            <div className="banner"><img src={infopersonal[0].banner} /></div>
            <div className="fotonombre">
                <div className="foto"><img src={infopersonal[0].img} /></div>
                <h2>{infopersonal[0].nombre}</h2>
                <h5>{infopersonal[0].rol}</h5>
                <h6 className="ubicacion">{infopersonal[0].ubicacion}</h6>
            </div>
            <div className="lineaPerfil"></div>
            <div className="infoPerfil">
                <p>{infopersonal[0].descripción}</p>
                <p>Nacimiento: {infopersonal[0].nacimiento}</p>
            </div>
            <div className="lineaPerfil"></div>
            <div className="infoPerfil">
                <p>Skills:</p>
                <ul>
                    {infopersonal[0].skills.map((skill) => (
                        <li>{skill}</li>
                    ))}
                </ul>
                
            </div>
            <div className="lineaPerfil"></div>
        </div>
    );
}