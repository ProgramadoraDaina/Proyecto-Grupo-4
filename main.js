let ingresos = [];
let gastos = [];
let metaAhorro = 0;

let grafico = null;
function calcularTiempoMeta() {
    let resultado = document.getElementById("resultadoSim");

    let ing = ingresosMensuales();
    let gas = gastosMensuales();
    let ahorroMensual = ing - gas;

    if (ahorroMensual <= 0 || metaAhorro <= 0) {/*modificar cuando funcione el ingresar los datos*/

        let etiquetas = ["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5"];
        let datos = [100, 250, 400, 650, 900];

        resultado.textContent = "Modo prueba (sin datos reales)";

        dibujarGrafico(etiquetas, datos);
        return;
    }

    let acumulado = 0;
    let meses = 0;

    let datos = [];
    let etiquetas = [];

    while (acumulado < metaAhorro) {
        acumulado += ahorroMensual;
        meses++;

        datos.push(acumulado);
        etiquetas.push("Month " + meses);
    }

    resultado.textContent = `Estimated time: ${meses} months`;

    console.log(datos, etiquetas);
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
function dibujarGrafico(labels, data) {

    let ctx = document.getElementById("grafico").getContext("2d");

    // destruir gráfico anterior (importante)
    if (grafico != null) {
        grafico.destroy();
    }

    grafico = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Ahorro acumulado",
                data: data,
                borderColor: "cyan",
                backgroundColor: "rgba(0,255,255,0.1)",
                borderWidth: 2,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
