import React from "react";
import infopersonal from "../repositorios/InfoPersonal.json";
import "./Perfil.css"
export function Perfil() {
    return (
        <div className="perfil-container">
            <div className="banner"><img src={infopersonal.banner} />
            </div>
            <div className="fotonombre">
                <div className="foto"><img src={infopersonal.img} /></div>
                <h2>Nombre de Usuario</h2>
            </div>
            <p>Descripción del perfil.</p>
            <p>Fecha de Nacimiento: DD/MM/AAAA</p>
        </div>
    );
}