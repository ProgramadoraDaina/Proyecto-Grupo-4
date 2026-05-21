import { Finanzas } from "./estado.js";
import { calcularTiempoMeta } from "./simulador.js";
import { mostrarResultado, dibujarGrafico } from "./grafico.js";

const finanzas = new Finanzas();/*Se crea una instancia de la clase Finanzas para manejar los ingresos,
                                gastos y meta de ahorro*/

window.calcularTiempoMeta = function () {
    const resultado = calcularTiempoMeta(finanzas);/*Se calcula el tiempo necesario para alcanzar la
                                                    meta de ahorro*/

    mostrarResultado(resultado.resultado);
    dibujarGrafico(resultado.etiquetas, resultado.datos);
};