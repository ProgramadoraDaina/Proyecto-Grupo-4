import { Finanzas } from "./estado.js";
import { calcularTiempoMeta } from "./simulador.js";
import { mostrarResultado, dibujarGrafico } from "./grafico.js";

const btnIngreso = document.getElementById("btnIngreso");
const btnGasto = document.getElementById("btnGasto");
const tipoInput = document.getElementById("tipo");

btnIngreso.addEventListener("click", () => {

    tipoInput.value = "ingreso";

    btnIngreso.classList.add("activo");
    btnGasto.classList.remove("activo");

});

btnGasto.addEventListener("click", () => {

    tipoInput.value = "gasto";

    btnGasto.classList.add("activo");
    btnIngreso.classList.remove("activo");

});

const finanzas = new Finanzas();/*Se crea una instancia de la clase Finanzas para manejar los ingresos,
                                gastos y meta de ahorro*/

window.calcularTiempoMeta = function () {
    const resultado = calcularTiempoMeta(finanzas);/*Se calcula el tiempo necesario para alcanzar la
                                                    meta de ahorro*/

    mostrarResultado(resultado.resultado);
    dibujarGrafico(resultado.etiquetas, resultado.datos);

    // ✅ ACTUALIZAR CARDS
    document.getElementById("ingresosCard").textContent ="$" + formatearNumero(resultado.ingresos);

    document.getElementById("gastosCard").textContent ="$" + formatearNumero(resultado.gastos);

    document.getElementById("ahorroCard").textContent ="$" + formatearNumero(resultado.ahorroMensual);

    // ✅ Calcular tasa
    let tasa = 0;
    if (resultado.ingresos > 0) {
        tasa = ((resultado.ahorroMensual / resultado.ingresos) * 100).toFixed(1);
    }

    document.getElementById("tasaCard").textContent = tasa + "%";
};
function formatearNumero(numero) {
    return numero.toLocaleString("es-AR");
}

window.agregarMovimiento = function () {

    const tipo = document.getElementById("tipo").value;
    const monto = Number(document.getElementById("monto").value);
    const categoria = document.getElementById("categoria").value;
    const frecuencia = document.getElementById("frecuencia").value;

    // Validación
    if (monto <= 0 || isNaN(monto)) {
        alert("Ingresá un monto válido");
        return;
    }

    // Crear objeto movimiento
    const movimiento = {
        monto,
        categoria,
        frecuencia
    };

    // Guardar en ingresos o gastos
    if (tipo === "ingreso") {
        finanzas.ingresos.push(movimiento);
    } else {
        finanzas.gastos.push(movimiento);
    }

    // Calcular totales
    const totalIngresos = finanzas.ingresos.reduce(
        (acc, item) => acc + item.monto,
        0
    );

    const totalGastos = finanzas.gastos.reduce(
        (acc, item) => acc + item.monto,
        0
    );

    const saldo = totalIngresos - totalGastos;

    // Actualizar datos financieros
    document.getElementById("ingresos").textContent =
        formatearNumero(totalIngresos);

    document.getElementById("gastos").textContent =
        formatearNumero(totalGastos);

    document.getElementById("saldo").textContent =
        formatearNumero(saldo);

    // Agregar movimiento a la lista
    const lista = document.getElementById("listaMovimientos");

    const item = document.createElement("div");

    item.classList.add("movimiento");

    item.innerHTML = `
        <p>
            <strong>${tipo.toUpperCase()}</strong> -
            ${categoria}
        </p>

        <p>
            $${formatearNumero(monto)} | ${frecuencia}
        </p>
    `;

    // Agrega el más reciente arriba
    lista.prepend(item);

    // Limpiar formulario
    document.getElementById("monto").value = "";
};