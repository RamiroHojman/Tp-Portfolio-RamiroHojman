import React, { useEffect, useState } from "react";
import BasicExample from "../NavBar/Navbar";
import { CardCreacion } from "./CardCreacion";
import "./HomePage.css"
import creaciones from "../repositorios/creaciones.json";
export function HomePage() {
    console.log(creaciones)
    return (
        <>
            <BasicExample />
            <div className="cardContainer">
            {
                creaciones.map(listaCreaciones =>(
                    
                    <CardCreacion nombre = {listaCreaciones.titulo} imagen = {listaCreaciones.img} texto = {listaCreaciones.descripción}/>
                

                ))
            }
            </div>
            <h1>Lol</h1>
        </>
    )
}