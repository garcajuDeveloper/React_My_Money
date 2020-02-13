import React, {Fragment,useState,useEffect} from 'react';
import PresupuestoInicial from './components/PresupuestoInicialComponent.js'
import FormularioGastos from './components/FormularioGastos';
import ListadoGastos from './components/ListadoGastos';
import PresupuestoDashboard from './components/PresupuestoDashboard';
import Error from './components/Error';
import {
        ERROR_SIN_PRESUPUESTO,
        RESTANTE_ERROR_MESSAGE
        } from './utils/Strings';

function App() {

  const [ presupuestoInicial, guardarPresuspuestoInicial ] = useState(0);
  const [ presupuestoRestante, guardarPresupuestoRestante ] = useState(0); 
  const [ mostrarPresupuestoInicial, actualizarMostrarPresupuestoInicial] = useState(true);
  const [ gastos, guardarGastos ] = useState([]); 
  const [ gasto, guardarGasto] = useState({});
  const [ crearGasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if(crearGasto){
      guardarGastos([ ...gastos, gasto ]);
    }
    guardarPresupuestoRestante(presupuestoRestante - gasto.cantidad);
    guardarCrearGasto(false);
  }, [gasto]);

  return (
    <div>
      <div className="contenido-principal contenido">
        { mostrarPresupuestoInicial ? 
        (
          <PresupuestoInicial
            guardarPresupuesto = {guardarPresuspuestoInicial}
            guardarRestante = {guardarPresupuestoRestante}
            mostrarInicial = {actualizarMostrarPresupuestoInicial}
          />
        ) : (
          <Fragment>
            <div className="columns">
              <div className="column">
                <FormularioGastos
                  agregarGasto = {guardarGasto}
                  guardarCrearGasto = {guardarCrearGasto}
                />
              </div>
              <div className="column">
                <PresupuestoDashboard
                  presupuesto={presupuestoInicial}
                  restante={presupuestoRestante}
                />
                {presupuestoRestante <=0 ?
                  <Error
                    errorHeader = {ERROR_SIN_PRESUPUESTO}
                    mensajeError = {RESTANTE_ERROR_MESSAGE}
                  />:null
                }
              </div>
            </div>
            <div>
              <ListadoGastos
              gastos = {gastos}
              />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
export default App;
