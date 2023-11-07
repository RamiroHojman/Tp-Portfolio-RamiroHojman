import React, { useEffect, useState } from "react";
import BasicExample from "../NavBar/Navbar";
import { CardCreacion } from "../HomePage/CardCreacion";
import "./MisCreaciones.css"
import creaciones from "../repositorios/creaciones.json";

export function MisCreaciones() {
    console.log(creaciones)
    return (
        <>
            <h1>Estas son mis creaciones:</h1>
            <div className="cardContainer" >
                {
                    creaciones.map(listaCreaciones => (
                        <CardCreacion key={listaCreaciones.id}
                            nombre={listaCreaciones.titulo} imagen={listaCreaciones.img} texto={listaCreaciones.descripción} fecha={listaCreaciones.fecha} />
                    ))
                }
            </div>
        </>
    )
}