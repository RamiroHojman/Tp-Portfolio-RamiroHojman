import React from "react";
import infopersonal from "../repositorios/InfoPersonal.json";
import "./Perfil.css"
export function Perfil() {
    return (
        <div className="perfil-container">
            <div className="banner"><img src={infopersonal.banner} /></div>
            <div className="fotonombre">
                <div className="foto"><img src={infopersonal.img} /></div>
                <h2>{infopersonal.nombre}</h2>
                <h5>{infopersonal.rol}</h5>
                <h6 className="ubicacion">{infopersonal.ubicacion}</h6>
            </div>
            <div className="lineaPerfil"></div>
            <div className="infoPerfil">
                <p>{infopersonal.descripción}</p>
                <p>Nacimiento: {infopersonal.nacimiento}</p>
            </div>
            <div className="lineaPerfil"></div>
            <div className="infoPerfil">
                <p>Skills:</p>
                <ul>
                    {infopersonal.skills.map((skill) => (
                        <li>{skill}</li>
                    ))}
                </ul>
                
            </div>
            <div className="lineaPerfil"></div>
        </div>
    );
}