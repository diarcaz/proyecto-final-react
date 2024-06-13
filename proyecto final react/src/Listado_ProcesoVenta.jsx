import React from 'react';

const ListadoProcesoVenta = () => {
  // Datos de ejemplo, reemplaza con tus datos reales
  const ventas = [
    { id: 1, producto: 'Producto 1', cantidad: 10, total: 100 },
    { id: 2, producto: 'Producto 2', cantidad: 5, total: 50 },
    // Más ventas...
  ];

  return (
    <div className="w3-container w3-custom-color">
      <h2>Listado de Proceso de Venta</h2>
      <ul className="w3-ul w3-border w3-white">
        {ventas.map((venta) => (
          <li key={venta.id} className="w3-padding-16 w3-custom-border">
            <strong className="w3-large w3-custom-text">ID:</strong> {venta.id} <br />
            <strong className="w3-large w3-custom-text">Producto:</strong> {venta.producto} <br />
            <strong className="w3-large w3-custom-text">Cantidad:</strong> {venta.cantidad} <br />
            <strong className="w3-large w3-custom-text">Total:</strong> ${venta.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoProcesoVenta;
