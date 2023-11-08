import React, { useState, useContext } from "react";
import { FavoritosContext } from "../Context/CreacionesContext";

const ModalComponent = () => {
  const { usuarios, setUsuarios, setFavoritosG } = useContext(FavoritosContext);
  const [tempMail, setTempMail] = useState("");

  const handleGuardarMail = () => {
    setUsuarios({
      ...usuarios,
      mail: tempMail,
    });

    const newFavoritos = {
      ...usuarios,
      mail: tempMail,
    };
    setFavoritosG(newFavoritos);
    localStorage.setItem('Favoritos', JSON.stringify(newFavoritos));
};

  return (
    <div>
      <button onClick={() => handleGuardarMail()}>Guardar en Contexto y LocalStorage</button>
      <input
        type="email"
        placeholder="Ingrese su correo"
        value={tempMail}
        onChange={(e) => setTempMail(e.target.value)}
      />
    </div>
  );
};

export default ModalComponent;
