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
    
// ✅ ACTUALIZAR CARDS
    document.getElementById("ingresosCard").textContent = "$" + resultado.ingresos;
    document.getElementById("gastosCard").textContent = "$" + resultado.gastos;
    document.getElementById("ahorroCard").textContent = "$" + resultado.ahorroMensual;

    // ✅ Calcular tasa
    let tasa = 0;
    if (resultado.ingresos > 0) {
        tasa = ((resultado.ahorroMensual / resultado.ingresos) * 100).toFixed(1);
    }

    document.getElementById("tasaCard").textContent = tasa + "%";
};