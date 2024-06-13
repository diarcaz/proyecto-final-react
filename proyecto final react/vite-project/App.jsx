
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Baja_GestionCliente from './Baja_GestionCliente';
import Baja_ProcesoVenta from './Baja_ProcesoVenta';
import Baja_RegistroProducto from './Baja_RegistroProducto';
import Cambios_GestionCliente from './Cambios_GestionCliente';
import Cambios_ProcesoVenta from './Cambios_ProcesoVenta';
import Cambios_RegistroProducto from './Cambios_RegistroProducto';
import GestionClientes from './GestionClientes';
import Listado_GestionCliente from './Listado_GestionCliente';
import Listado_ProcesoVenta from './Listado_ProcesoVenta';
import Listado_RegistroProducto from './Listado_RegistroProducto';
import ProcesoVenta from './ProcesoVenta';
import RegristroProducto from './RegristroProducto';
import Menu from './Menu';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/baja-gestion-cliente" component={Baja_GestionCliente} />
        <Route path="/baja-proceso-venta" component={Baja_ProcesoVenta} />
        <Route path="/baja-registro-producto" component={Baja_RegistroProducto} />
        <Route path="/cambios-gestion-cliente" component={Cambios_GestionCliente} />
        <Route path="/cambios-proceso-venta" component={Cambios_ProcesoVenta} />
        <Route path="/cambios-registro-producto" component={Cambios_RegistroProducto} />
        <Route path="/gestion-clientes" component={GestionClientes} />
        <Route path="/listado-gestion-cliente" component={Listado_GestionCliente} />
        <Route path="/listado-proceso-venta" component={Listado_ProcesoVenta} />
        <Route path="/listado-registro-producto" component={Listado_RegistroProducto} />
        <Route path="/proceso-venta" component={ProcesoVenta} />
        <Route path="/registro-producto" component={RegristroProducto} />
        <Route path="/" component={Menu} />
      </Switch>
    </Router>
  );
};

export default App;
