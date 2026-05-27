import { formatearNumero } from "../utils/formateo.js";

const setText = (id, valor) => {
    document.getElementById(id).textContent = valor;
};

const formatoMoneda = (valor) => "$" + formatearNumero(valor);

export function actualizarCards(resultado) {

    setText("ingresosCard", formatoMoneda(resultado.ingresos));
    setText("gastosCard", formatoMoneda(resultado.gastos));
    setText("ahorroCard", formatoMoneda(resultado.ahorroMensual));

    let tasa = 0;
    if (resultado.ingresos > 0) {
        tasa = ((resultado.ahorroMensual / resultado.ingresos) * 100).toFixed(1);
    }

    setText("tasaCard", tasa + "%");
}

export function actualizarCardsAvanzadas(resultado) {

    if (!resultado?.datosDiarios?.length) return;

    let datos = resultado.datosDiarios;

    let ahorroTotal = resultado.ahorroFinal || 0;

    let promedio = datos.reduce((a, b) => a + b, 0) / datos.length;

    let mejorValor = datos.length ? Math.max(...datos) : 0;
    let indexMejor = datos.indexOf(mejorValor);
    let mejorDia = resultado.etiquetas?.[indexMejor] || "-";

    let racha = resultado.racha || 0;

    setText("ahorroTotalCard", formatoMoneda(ahorroTotal));
    setText("promedioCard", formatoMoneda(Math.round(promedio)));
    setText("mejor-diaCard", mejorDia);
    setText("montoMejorDia", formatoMoneda(mejorValor));
    setText("rachaCard", racha + " días");
}

