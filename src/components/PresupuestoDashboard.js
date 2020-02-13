import React, {Fragment} from 'react';
import {actualizarPresupuesto} from '../utils/RestanteHelper';
import  {   
            PRESUPUESTO_DASHBOARD_INFORMACION_H2,
            PRESUPUESTO_DASHBOARD_PRESUPUESTO_P,
            PRESUPUESTO_DASHBOARD_DISPONIBLE_P
        }from '../utils/Strings';

const PresupuestoDashboard = ({presupuesto, restante}) => {
    return (

        <Fragment>
            <h2>{PRESUPUESTO_DASHBOARD_INFORMACION_H2}</h2>
            <div className="alert alert-primary">
                <p>{PRESUPUESTO_DASHBOARD_PRESUPUESTO_P}{presupuesto}</p>
            </div>

            <div className={actualizarPresupuesto(presupuesto, restante)}>
                <p>{PRESUPUESTO_DASHBOARD_DISPONIBLE_P}{restante}</p>
            </div>
        </Fragment>

    );
}
 
export default PresupuestoDashboard;