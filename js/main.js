import { Finanzas } from "./Finanzas.js";
import { calcularTiempoMeta } from "./logica/simulador.js";
import { mostrarResultado, dibujarGrafico } from "./ui/grafico.js";

import { actualizarCards } from "./ui/cards.js";
import { inicializarSidebar, resaltarLinkActivo } from "./ui/sidebar.js";

const finanzas = new Finanzas();

// Función global (si la usás desde HTML)
window.calcularTiempoMeta = function () {
    const resultado = calcularTiempoMeta(finanzas);

    mostrarResultado(resultado.resultado);
    dibujarGrafico(resultado.etiquetas, resultado.datos);

    actualizarCards(resultado);
};

// Inicializaciones
inicializarSidebar();
resaltarLinkActivo();
