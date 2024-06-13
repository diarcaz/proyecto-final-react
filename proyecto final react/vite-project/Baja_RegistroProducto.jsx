
import React, { useState } from 'react';

const Baja_RegistroProducto = () => {
    const [formData, setFormData] = useState({
        id_producto: '',
        nombre_producto: '',
        descripcion: '',
        precio: ''
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
            <h1>Baja_RegistroProducto</h1>
            <form id="formulario_Baja_RegistroProducto" onSubmit={handleSubmit}>
                
        <label htmlFor="id_producto">Id Producto:</label>
        <input type="text" id="id_producto" className="w3-input" name="id_producto" value={formData.id_producto} onChange={handleChange} required />
        <br />
        <label htmlFor="nombre_producto">Nombre Producto:</label>
        <input type="text" id="nombre_producto" className="w3-input" name="nombre_producto" value={formData.nombre_producto} onChange={handleChange} required />
        <br />
        <label htmlFor="descripcion">Descripcion:</label>
        <input type="text" id="descripcion" className="w3-input" name="descripcion" value={formData.descripcion} onChange={handleChange} required />
        <br />
        <label htmlFor="precio">Precio:</label>
        <input type="text" id="precio" className="w3-input" name="precio" value={formData.precio} onChange={handleChange} required />
        <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Baja_RegistroProducto;
