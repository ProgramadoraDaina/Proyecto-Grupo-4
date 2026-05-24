import { ingresosMensuales, gastosMensuales } from "./calculo.js";

export function calcularTiempoMeta(finanzas) {
    let ing = ingresosMensuales(finanzas.ingresos);
    let gas = gastosMensuales(finanzas.gastos);
    let ahorroMensual = ing - gas;

    /*Modo prueba: se utiliza mientras no hay datos reales, generando valores simulados, modificar
                   cuando el ingreso de datos sea posible*/
    if (ahorroMensual <= 0 || finanzas.metaAhorro <= 0) {
        return {
            modoPrueba: true,
            resultado: "Modo prueba (sin datos reales)",
            etiquetas: ["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6", "Mes 7"],
            datos: [10000, 25000, 40000, 65000, 80000, 95000,105000],      
            ingresos: 100000,
            gastos: 28000,
            ahorroMensual: 72000
        };
    }

    let acumulado = 0;
    let meses = 0;
    let ahorroPorMes = [];
    let etiquetas = [];

    while (acumulado < finanzas.metaAhorro) {
        acumulado += ahorroMensual;/*Suma el ahorro mensual al total acumulado*/
        meses++;
        ahorroPorMes.push(acumulado);/*Guarda el ahorro acumulado de cada mes*/

        etiquetas.push("Mes " + meses);/*Agrega la etiqueta del mes correspondiente para el gráfico*/
    }

    return {/*Retorna un objeto con el resultado de la simulación*/
        modoPrueba: false,
        resultado: `Tiempo estimado: ${meses} meses`,
        etiquetas,
        datos: ahorroPorMes,
        
    ingresos: ing,
    gastos: gas,
    ahorroMensual: ahorroMensual

    };
}