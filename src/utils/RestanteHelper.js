import  {
            RESTANTE_HELPER_CLASE_SUCCESS,
            RESTANTE_HELPER_CLASE_WARNING,
            RESTANTE_HELPER_CLASE_DANGER
        }from './Strings';



export const actualizarPresupuesto = (presupuesto, restante) => {
    let colorDisponible = RESTANTE_HELPER_CLASE_SUCCESS;

    if((presupuesto / 4) > restante){
        colorDisponible = RESTANTE_HELPER_CLASE_DANGER
    }else if((presupuesto / 2) > restante){
        colorDisponible = RESTANTE_HELPER_CLASE_WARNING
    }
    
    return colorDisponible;
}