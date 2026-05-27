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
export function actualizarCardsAvanzadas(resultado) {

    if (
        !resultado ||
        !resultado.datosDiarios ||
        resultado.datosDiarios.length === 0
    ) return;

    let datos = resultado.datosDiarios;

    // 💰 AHORRO TOTAL
    let ahorroTotal = resultado.ahorroFinal || 0;

    // 📊 PROMEDIO DIARIO
    let promedio = datos.reduce((a, b) => a + b, 0) / datos.length;

    // 🏆 MEJOR DÍA
    let mejorValor = Math.max(...datos);
    let indexMejor = datos.indexOf(mejorValor);
    let mejorDia = resultado.etiquetas[indexMejor];

    // 🔥 RACHA
    let racha = resultado.racha || 0;

    // ✅ UI
    document.getElementById("ahorroTotalCard").textContent =
        "$" + formatearNumero(ahorroTotal);

    document.getElementById("promedioCard").textContent =
        "$" + formatearNumero(Math.round(promedio));

    document.getElementById("mejor-diaCard").textContent =
        mejorDia || "-";

    document.getElementById("montoMejorDia").textContent =
        "$" + formatearNumero(mejorValor);

    document.getElementById("rachaCard").textContent =
        racha + " días";
}

function formatearNumero(numero) {
    return numero.toLocaleString("es-AR");
}
