let ingresos = [];
let gastos = [];
let metaAhorro = 0;

function calcularTiempoMeta() {
    let resultado = document.getElementById("resultadoSim");

    let ing = ingresosMensuales();
    let gas = gastosMensuales();
    let ahorroMensual = ing - gas;

    if (ahorroMensual <= 0) {
        resultado.textContent = "No savings available.";
        return;
    }

    if (metaAhorro <= 0) {
        resultado.textContent = "Set a savings goal first.";
        return;
    }

    let meses = Math.ceil(metaAhorro / ahorroMensual);

    resultado.textContent = `Estimated time: ${meses} months`;
}

function calcularTiempoMeta() {
    let resultado = document.getElementById("resultadoSim");
    resultado.textContent = "Calculando...";
}
function convertirAMensual(mov) {
    switch (mov.frecuencia) {
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
function ingresosMensuales() {
    return ingresos.reduce((acc, m) => acc + convertirAMensual(m), 0);
}

function gastosMensuales() {
    return gastos.reduce((acc, g) => acc + convertirAMensual(g), 0);
}
