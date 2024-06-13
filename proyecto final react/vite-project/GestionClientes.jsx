import React from 'react';

const GestionClientes = () => {
  // Datos de ejemplo, reemplaza con tus datos reales
  const clientes = [
    { name: 'Cliente 1', description: 'Descripción del cliente 1' },
    { name: 'Cliente 2', description: 'Descripción del cliente 2' },
  ];

  return (
    <div className="w3-container w3-custom-color">
      <h2>Gestión de Clientes</h2>
      <ul className="w3-ul w3-border w3-white">
        {clientes.map((cliente, index) => (
          <li key={index} className="w3-padding-16 w3-custom-border">
            <span className="w3-large w3-custom-text">{cliente.name}</span><br />
            <span>{cliente.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionClientes;
