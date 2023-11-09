import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import "./Contacto.css"
import { Button } from 'bootstrap';
const ContactForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Aquí puedes manejar la lógica para enviar el formulario
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='contacto'>
            <div>
                <label>Email:</label>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Este campo es requerido',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Ingresa un correo electrónico válido',
                        },
                    }}
                    render={({ field }) => <input  className='textoInput' {...field} />}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label>Descripción:</label>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <textarea className='textoInput' {...field} />}
                />
                {errors.description && <p>{errors.description.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary botonEnviar">Enviar</button>
        </form>
    );
};

export default ContactForm;
