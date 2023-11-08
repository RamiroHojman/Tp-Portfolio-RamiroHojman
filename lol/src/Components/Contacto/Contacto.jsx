import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const ContactForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Aquí puedes manejar la lógica para enviar el formulario
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    render={({ field }) => <input {...field} />}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label>Descripción:</label>
                <Controller
                    name="description"
                    control={control}
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <textarea {...field} />}
                />
                {errors.description && <p>{errors.description.message}</p>}
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
