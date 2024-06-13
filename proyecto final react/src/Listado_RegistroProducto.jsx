import React from 'react';

const ListadoRegistroProducto = () => {
  // Datos de ejemplo, reemplaza con tus datos reales
  const productos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1' },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2' },
    // Más productos...
  ];

  return (
    <div className="w3-container w3-custom-color">
      <h2>Listado de Registro de Productos</h2>
      <ul className="w3-ul w3-border w3-white">
        {productos.map((producto) => (
          <li key={producto.id} className="w3-padding-16 w3-custom-border">
            <strong className="w3-large w3-custom-text">ID:</strong> {producto.id} <br />
            <strong className="w3-large w3-custom-text">Nombre:</strong> {producto.nombre} <br />
            <strong className="w3-large w3-custom-text">Descripción:</strong> {producto.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoRegistroProducto;
