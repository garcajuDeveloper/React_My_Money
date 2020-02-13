import React from 'react';
//import { ERROR_DATOS_INCORRECTO_INCOMPLETO } from '../utils/Strings';

const Error = ({errorHeader, mensajeError}) =>( 
    <article className="message is-danger is-small">
        <div className="message-header">
            <p>{errorHeader}</p>
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