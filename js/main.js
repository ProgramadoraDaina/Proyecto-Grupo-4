import { Finanzas } from "./Finanzas.js";
import { calcularTiempoMeta } from "./logic/simulador.js";
import { mostrarTiempoEstimado, dibujarGrafico } from "./charts/graficoSimulador.js";

import { dibujarGraficoHistorial } from "./charts/graficoHistorial.js";
import { calcularHistorial } from "./logic/historial.js";

import { actualizarCards, actualizarCardsAvanzadas } from "./ui/cards.js";
import { inicializarSidebar, resaltarPaginaActual } from "./ui/sidebar.js";

const finanzas = new Finanzas();

// Función global (si la usás desde HTML)
window.calcularTiempoMeta = function () {
    const resultado = calcularTiempoMeta(finanzas);/*calcula el tiempo para alcanzar la meta y guarda
                                                    todos los resultados*/

    mostrarTiempoEstimado(resultado.resultado);
    dibujarGrafico(resultado.etiquetas, resultado.datos);

    actualizarCards(resultado);

 document.querySelector(".chart-container").classList.remove("oculto");/*Muestra el "Evolución del ahorro
                                                                       en el tiempo" eliminando la clase
                                                                       que lo mantiene oculto*/

};

inicializarSidebar();/*Hace que el botón pueda abrir y cerrar el menú*/
resaltarPaginaActual();

window.mostrarHistorial = function() {

    const resultado = calcularHistorial(finanzas);

    dibujarGraficoHistorial(resultado.etiquetas, resultado.datosDiarios);

    // 🔥 AHORA USA DATOS REALES
    actualizarCardsAvanzadas(resultado);

    document.querySelector(".chart-container")
        .classList.remove("oculto");
};
