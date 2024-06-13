import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="w3-container w3-custom-color">
      <h1>Menu</h1>
      <ul>
        <li><Link className="w3-custom-text" to="/baja-gestion-cliente">Baja Gestion Cliente</Link></li>
        <li><Link className="w3-custom-text" to="/baja-proceso-venta">Baja Proceso Venta</Link></li>
        <li><Link className="w3-custom-text" to="/baja-registro-producto">Baja Registro Producto</Link></li>
        <li><Link className="w3-custom-text" to="/cambios-gestion-cliente">Cambios Gestion Cliente</Link></li>
        <li><Link className="w3-custom-text" to="/cambios-proceso-venta">Cambios Proceso Venta</Link></li>
        <li><Link className="w3-custom-text" to="/cambios-registro-producto">Cambios Registro Producto</Link></li>
        <li><Link className="w3-custom-text" to="/gestion-clientes">Gestion Clientes</Link></li>
        <li><Link className="w3-custom-text" to="/listado-gestion-cliente">Listado Gestion Cliente</Link></li>
        <li><Link className="w3-custom-text" to="/listado-proceso-venta">Listado Proceso Venta</Link></li>
        <li><Link className="w3-custom-text" to="/listado-registro-producto">Listado Registro Producto</Link></li>
        <li><Link className="w3-custom-text" to="/proceso-venta">Proceso Venta</Link></li>
        <li><Link className="w3-custom-text" to="/registro-producto">Registro Producto</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
