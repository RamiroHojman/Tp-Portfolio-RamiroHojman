import React, { useEffect, useState } from "react";
import BasicExample from "../NavBar/Navbar";
import 
export function HomePage(){
    const [creaciones, setCreaciones] = useState([])
    useEffect(() => {
        fetch("../Repositorios/Creaciones.json")
        .then(response => response.json())
        .then(data => {
            setCreaciones(data)
            console.log(data)
        })
    }, [])
    
    return(
           
        
        <>
        <BasicExample/>
            <h1>Lol</h1>
        </>
    )
}