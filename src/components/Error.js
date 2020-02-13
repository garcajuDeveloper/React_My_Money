import React from 'react';
import { ERROR_DATOS_INCORRECTO_INCOMPLETO } from '../utils/Strings';

const Error = ({mensajeError}) =>( 
    <article className="message is-danger is-small">
        <div className="message-header">
            <p>{ERROR_DATOS_INCORRECTO_INCOMPLETO}</p>
            <span className="icon is-small">
                <i className="fas fa-exclamation-triangle"></i>
            </span>
        </div>
        <div className="message-body">
            {mensajeError}
        </div>
    </article>
);
export default Error;