import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { FavoritosContext } from '../Context/CreacionesContext';

const ModalComponent = () => {
    const { setUsuarios } = useContext(FavoritosContext);
    const [tempMail, setTempMail] = useState("");
    const [modalOpen, setModalOpen] = useState(true);

    const handleGuardarMail = () => {
        // Guardar el correo en el contexto
        setUsuarios({
            mail: tempMail,
        });

        // ... (tu lógica para guardar el correo en localStorage)

        setModalOpen(false);
    };

    return (
        <div>
            <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
                <div>
                    <button onClick={handleGuardarMail}>Guardar en Contexto y LocalStorage</button>
                    <input
                        type="email"
                        placeholder="Ingrese su correo"
                        value={tempMail}
                        onChange={(e) => setTempMail(e.target.value)}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ModalComponent;