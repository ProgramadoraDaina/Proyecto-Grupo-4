export function actualizarCards(resultado) {
    document.getElementById("ingresosCard").textContent ="$" + formatearNumero(resultado.ingresos);

    document.getElementById("gastosCard").textContent ="$" + formatearNumero(resultado.gastos);

    document.getElementById("ahorroCard").textContent ="$" + formatearNumero(resultado.ahorroMensual);

    let tasa = 0;
    if (resultado.ingresos > 0) {
        tasa = ((resultado.ahorroMensual / resultado.ingresos) * 100).toFixed(1);
    }

    document.getElementById("tasaCard").textContent = tasa + "%";
}

function formatearNumero(numero) {
    return numero.toLocaleString("es-AR");
}
