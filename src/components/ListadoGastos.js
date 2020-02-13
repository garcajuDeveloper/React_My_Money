import React from 'react';
import Gasto from './Gasto';
import  {
            LISTADO_GASTOS_H2_TEXT
        }from '../utils/Strings';

const ListadoGastos = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>{LISTADO_GASTOS_H2_TEXT}</h2>
            {gastos.map( gasto => (
                <Gasto 
                    key = {gasto.id}
                    gasto = {gasto}
                />
            ))}
        </div>
     );
}
 
export default ListadoGastos;