import React, { useEffect, useState } from "react";
import BasicExample from "../NavBar/Navbar";
import { CardCreacion } from "./CardCreacion";
import "./HomePage.css"
import creaciones from "../repositorios/creaciones.json";
export function HomePage() {
    console.log(creaciones)
    return (
        <>
            <div className="cardContainer" >
            {
                creaciones.map(listaCreaciones =>(
                    
                    <CardCreacion key={listaCreaciones.id} 
                    nombre = {listaCreaciones.titulo} imagen = {listaCreaciones.img} texto = {listaCreaciones.descripción} fecha ={listaCreaciones.fecha}/>
                    
                    
                ))
            }
            </div>
            <h1>Lal</h1>
        </>
    )
}