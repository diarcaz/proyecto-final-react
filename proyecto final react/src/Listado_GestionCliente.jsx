import React from 'react';

const ListadoGestionCliente = () => {
  // Datos de ejemplo, reemplaza con tus datos reales
  const clientes = [
    { id: 1, nombre: 'Cliente 1', email: 'cliente1@example.com' },
    { id: 2, nombre: 'Cliente 2', email: 'cliente2@example.com' },
    // Más clientes...
  ];

  return (
    <div className="w3-container w3-custom-color">
      <h2>Listado de Gestión de Clientes</h2>
      <ul className="w3-ul w3-border w3-white">
        {clientes.map((cliente) => (
          <li key={cliente.id} className="w3-padding-16 w3-custom-border">
            <strong className="w3-large w3-custom-text">ID:</strong> {cliente.id} <br />
            <strong className="w3-large w3-custom-text">Nombre:</strong> {cliente.nombre} <br />
            <strong className="w3-large w3-custom-text">Email:</strong> {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoGestionCliente;
