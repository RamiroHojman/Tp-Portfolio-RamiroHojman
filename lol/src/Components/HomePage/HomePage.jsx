import React, { useEffect, useState } from "react";
import BasicExample from "../NavBar/Navbar";
import { CardCreacion } from "./CardCreacion";
import "./HomePage.css"
import creaciones from "../repositorios/creaciones.json";
export function HomePage() {
    console.log(creaciones)
    return (
        <>
                <h1 className="tituloHP">Creaciones destacadas</h1>
            <div className="cardContainer" >
                {
                    creaciones.filter(listaCreaciones => listaCreaciones.destacado).map(listaCreaciones => (
                        <CardCreacion key={listaCreaciones.id}
                            nombre={listaCreaciones.titulo} imagen={listaCreaciones.img} texto={listaCreaciones.descripción} fecha={listaCreaciones.fecha} />
                    ))
                }
            </div>
        </>
    )
}
