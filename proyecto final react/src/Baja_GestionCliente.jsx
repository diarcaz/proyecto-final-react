
import React, { useState } from 'react';

const Baja_GestionCliente = () => {
    const [formData, setFormData] = useState({
        id_cliente: '',
        nombre_cliente: '',
        direccion: '',
        num_telefono: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };

    return (
        <div>
            <h1>Baja_GestionCliente</h1>
            <form id="formulario_Baja_GestionCliente" onSubmit={handleSubmit}>
                
        <label htmlFor="id_cliente">Id Cliente:</label>
        <input type="text" id="id_cliente" className="w3-input" name="id_cliente" value={formData.id_cliente} onChange={handleChange} required />
        <br />
        <label htmlFor="nombre_cliente">Nombre Cliente:</label>
        <input type="text" id="nombre_cliente" className="w3-input" name="nombre_cliente" value={formData.nombre_cliente} onChange={handleChange} required />
        <br />
        <label htmlFor="direccion">Direccion:</label>
        <input type="text" id="direccion" className="w3-input" name="direccion" value={formData.direccion} onChange={handleChange} required />
        <br />
        <label htmlFor="num_telefono">Num Telefono:</label>
        <input type="text" id="num_telefono" className="w3-input" name="num_telefono" value={formData.num_telefono} onChange={handleChange} required />
        <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Baja_GestionCliente;
