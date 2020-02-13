import React, {Fragment, useState} from 'react';
import {isError} from '../utils/FormValidator';
import Error from './Error';
import { 
        PRESUPUESTO_INICIAL_ERROR_MESSAGE,
        PRESUPUESTO_PLACEHOLDER,
        PRESUPUESTO_INICIAL_H2_TEXT,
        SUBMIT_BUTTON_TEXT
        } from '../utils/Strings';

const PresupuestoInicial = ({guardarPresupuesto, guardarRestante, mostrarInicial}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresupuesto = event => {
        guardarCantidad(parseFloat(event.target.value, 10));
    }

    const validarPresupuesto = event => {
        event.preventDefault();
        if (isError(cantidad) === true ){
            guardarError(true)
            mostrarInicial(true)
        }else{
            guardarError(false);
            guardarPresupuesto(cantidad);
            guardarRestante(cantidad);
            mostrarInicial(false);
        } 
    }


    return(
        <Fragment>
            <h2>{PRESUPUESTO_INICIAL_H2_TEXT}</h2>
            {error ? <Error mensajeError = {PRESUPUESTO_INICIAL_ERROR_MESSAGE}/> : null}
            <form
                className = "cantidad-inicial-form"
                onSubmit = {validarPresupuesto}
            >
                <div className="field is-grouped is-grouped-centered">
                    <div className="columns">
                        <div className="column">
                            <div className="control has-icons-left has-icons-right">
                                <input 
                                    className="input" 
                                    type="number" 
                                    placeholder= {PRESUPUESTO_PLACEHOLDER}
                                    onChange = {definirPresupuesto}    
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-donate"></i>
                                </span>
                            </div>
                        </div>
                    
                        <div className="column">
                            <div className="control">
                                <button 
                                    className="button is-info is-rounded is-fullwidth"
                                    type="submit"
                                >
                                    <span className="icon is-small">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span>{SUBMIT_BUTTON_TEXT}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default PresupuestoInicial;