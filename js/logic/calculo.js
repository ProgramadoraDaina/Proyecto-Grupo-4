export function convertirAMensual(mov) {
    switch (mov.frecuencia) {/*obtiene la frecuencia, y segun cual es para determinar como
                             calcular su equivalente mensual*/
        case "mensual":
            return mov.monto;
        case "semanal":
            return mov.monto * 4;
        case "unico":
            return 0;
        default:
            return 0;
    }
}


export function ingresosMensuales(ingresos) {
    return ingresos.reduce((acumulador, ingreso) => {/*Recorre ingresos acumulando un valor total en
                                                      acumulador, arranca en 0*/

        const valorMensual = convertirAMensual(ingreso);/*convierto ese ingreso a su valor mensual*/

        return acumulador + valorMensual;
    }, 0);
}

export function gastosMensuales(gastos) {
    return gastos.reduce((acumulador, gasto) => {
        const gastoMensual = convertirAMensual(gasto);
        return acumulador + gastoMensual; 
    }, 0);
}