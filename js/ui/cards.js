import { formatearNumero } from "../utils/formateo.js";
export function actualizarCards(resultado) {
    document.getElementById("ingresosCard").textContent ="$" + formatearNumero(resultado.ingresos);

    document.getElementById("gastosCard").textContent ="$" + formatearNumero(resultado.gastos);

    document.getElementById("ahorroCard").textContent ="$" + formatearNumero(resultado.ahorroMensual);

    let tasa = 0;
    if (resultado.ingresos > 0) {
        tasa = ((resultado.ahorroMensual / resultado.ingresos) * 100).toFixed(1);/*Divide el ahorro por los
                                                                                  ingresos, lo convierte a
                                                                                porcentaje y deja 1 decimal*/
    }

    document.getElementById("tasaCard").textContent = tasa + "%";
}

