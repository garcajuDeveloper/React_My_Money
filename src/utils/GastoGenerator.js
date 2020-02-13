import shortid from 'shortid';

export let generate = (concepto, cantidad) => {
    return {
        concepto: concepto,
        cantidad: cantidad,
        id: shortid.generate()
    }
}