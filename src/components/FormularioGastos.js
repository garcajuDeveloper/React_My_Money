import React, {useState} from 'react';
import Error from './Error';
import { isErrorGasto } from '../utils/FormValidator';
import { generate } from '../utils/GastoGenerator'
import  {
            FORMULARIO_GASTOS_H2_TEXT,
            FORMULARIO_GASTOS_CANTIDAD_TEXT,
            FORMULARIO_GASTOS_GASTO_LABEL_TEXT,
            FORMULARIO_GASTOS_CONCEPTO_TEXT,
            FORMULARIO_GASTOS_CONCEPTO_LABEL_TEXT,
            FORMULARIO_GASTOS_SUBMIT_BUTTON_TEXT,
            ERROR_DATOS_INCORRECTO_INCOMPLETO,
            FORMULARIO_GASTOS_ERROR_MESSAGE
        } from '../utils/Strings';

const FormularioGastos = ({agregarGasto, guardarCrearGasto}) => {

    const [concepto, guardarConcepto] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const creaGasto = event => {
        event.preventDefault();
        if (isErrorGasto(cantidad, concepto) === true ){
            guardarError(true);
        }else{
            guardarError(false);
            agregarGastoToState();
            guardarCrearGasto(true);
            resetForm();
        } 
    }

    function agregarGastoToState(){
        let gastoObject = generate(concepto, cantidad);
        agregarGasto(gastoObject);
    }

    function resetForm(){
        guardarConcepto('');
        guardarCantidad(0);
    }

    return ( 
        <form
            onSubmit={creaGasto}
        >
            <h2>{FORMULARIO_GASTOS_H2_TEXT}</h2>
            { error ? <Error
                        errorHeader = {ERROR_DATOS_INCORRECTO_INCOMPLETO}
                        mensajeError = {FORMULARIO_GASTOS_ERROR_MESSAGE} 
                        /> : null} 
            <div className="field">
            <label className ="label">{FORMULARIO_GASTOS_GASTO_LABEL_TEXT}</label>
                <div className="is-grouped">
                    <div className="control has-icons-left has-icons-right is-expanded">
                        <input 
                            className="input" 
                            type="number" 
                            value={cantidad}
                            onChange={event => guardarCantidad(parseFloat(event.target.value, 2))}
                            placeholder= {FORMULARIO_GASTOS_CANTIDAD_TEXT}   
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-donate"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="field">
            <label className ="label">{FORMULARIO_GASTOS_CONCEPTO_LABEL_TEXT}</label>
                <div className="is-grouped">
                    <div className="control has-icons-left has-icons-right is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            value={concepto}
                            onChange={event => guardarConcepto(event.target.value)}
                            placeholder= {FORMULARIO_GASTOS_CONCEPTO_TEXT}   
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-tag"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="control">
                <button 
                    className="button is-info  is-fullwidth is-rounded"
                    type="submit"
                >
                    <span className="icon is-small">
                        <i className="fas fa-check"></i>
                    </span>
                    <span>{FORMULARIO_GASTOS_SUBMIT_BUTTON_TEXT}</span>
                </button>
            </div>
        </form>
     );
}
 
export default FormularioGastos;