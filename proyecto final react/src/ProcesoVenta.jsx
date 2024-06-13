
import React, { useState } from 'react';

const ProcesoVenta = () => {
    const [formData, setFormData] = useState({
        id_proceso: '',
        nombre_cliente: '',
        producto: '',
        cantidad: ''
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
            <h1>ProcesoVenta</h1>
            <form id="formulario_ProcesoVenta" onSubmit={handleSubmit}>
                
        <label htmlFor="id_proceso">Id Proceso:</label>
        <input type="text" id="id_proceso" className="w3-input" name="id_proceso" value={formData.id_proceso} onChange={handleChange} required />
        <br />
        <label htmlFor="nombre_cliente">Nombre Cliente:</label>
        <input type="text" id="nombre_cliente" className="w3-input" name="nombre_cliente" value={formData.nombre_cliente} onChange={handleChange} required />
        <br />
        <label htmlFor="producto">Producto:</label>
        <input type="text" id="producto" className="w3-input" name="producto" value={formData.producto} onChange={handleChange} required />
        <br />
        <label htmlFor="cantidad">Cantidad:</label>
        <input type="text" id="cantidad" className="w3-input" name="cantidad" value={formData.cantidad} onChange={handleChange} required />
        <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ProcesoVenta;
