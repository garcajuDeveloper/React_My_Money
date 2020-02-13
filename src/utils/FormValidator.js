export let isError = (cantidad) => {
    if(cantidad < 1 || isNaN(cantidad)){
        return true;
    }else{
        return false;
    }
}

export let isErrorGasto = (cantidad, concepto) => {
    if(cantidad < 1 || isNaN(cantidad) || concepto.trim() === ''){
        return true;
    }else{
        return false;
    }
}