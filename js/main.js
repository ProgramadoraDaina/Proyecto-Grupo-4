import { Finanzas } from "./Finanzas.js";
import { calcularTiempoMeta } from "./logica/simulador.js";
import { mostrarTiempoEstimado, dibujarGrafico } from "./ui/grafico.js";

import { actualizarCards } from "./ui/cards.js";
import { inicializarSidebar, resaltarPaginaActual } from "./ui/sidebar.js";

const btnIngreso = document.getElementById("btnIngreso");
const btnGasto = document.getElementById("btnGasto");
const tipoInput = document.getElementById("tipo");
const metaInput = document.getElementById("metaInput");
const metaTexto = document.getElementById("metaTexto");
const listaMovimientos = document.getElementById("listaMovimientos");
const alertas = document.getElementById("alertas");
const SESSION_KEY = "movimientosFinanzas";

const finanzas = new Finanzas();

function cargarMovimientosSesion() {
    const datos = sessionStorage.getItem(SESSION_KEY);
    if (!datos) return;
    try {
        const objeto = JSON.parse(datos);
        finanzas.ingresos = Array.isArray(objeto.ingresos) ? objeto.ingresos : [];
        finanzas.gastos = Array.isArray(objeto.gastos) ? objeto.gastos : [];
    } catch (error) {
        console.warn("No se pudo leer sessionStorage:", error);
    }
}

function guardarMovimientosSesion() {
    const datos = {
        ingresos: finanzas.ingresos,
        gastos: finanzas.gastos,
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(datos));
}

function actualizarEncabezado() {
    const ingresos = finanzas.ingresos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
    const gastos = finanzas.gastos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
    const saldo = ingresos - gastos;

    const ingresosEl = document.getElementById("ingresos");
    const gastosEl = document.getElementById("gastos");
    const saldoEl = document.getElementById("saldo");

    if (ingresosEl) ingresosEl.textContent = formatearNumero(ingresos);
    if (gastosEl) gastosEl.textContent = formatearNumero(gastos);
    if (saldoEl) saldoEl.textContent = formatearNumero(saldo);
}

function actualizarMovimientos() {
    if (!listaMovimientos) return;
    listaMovimientos.innerHTML = "";

    const pushMovimiento = (tipo, mov) => {
        const item = document.createElement("div");
        item.classList.add("movimiento");
        item.innerHTML = `
            <p>
                <strong>${tipo.toUpperCase()}</strong> - ${mov.categoria}
            </p>
            <p>$${formatearNumero(mov.monto)} | ${mov.frecuencia}</p>
        `;
        listaMovimientos.prepend(item);
    };

    finanzas.ingresos.forEach((mov) => pushMovimiento("ingreso", mov));
    finanzas.gastos.forEach((mov) => pushMovimiento("gasto", mov));
}

function cargarMeta() {
    const metaGuardada = localStorage.getItem("metaAhorro");
    if (metaGuardada && metaInput) {
        metaInput.value = metaGuardada;
    }
}

function actualizarMetaUI() {
    const valorMeta = Number(metaInput?.value || 0);
    if (metaTexto) metaTexto.textContent = `$${formatearNumero(valorMeta)}`;
}

function inicializarUI() {
    cargarMovimientosSesion();
    cargarMeta();
    actualizarEncabezado();
    actualizarMovimientos();
    actualizarMetaUI();
}

function showMessage(text, type = "success") {
    if (!alertas) return;
    const mensaje = document.createElement("div");
    mensaje.textContent = text;
    mensaje.className = `mensaje mensaje-${type}`;
    alertas.appendChild(mensaje);
    setTimeout(() => {
        mensaje.classList.add("ocultar");
        setTimeout(() => mensaje.remove(), 300);
    }, 2200);
}

if (btnIngreso && btnGasto && tipoInput) {
    btnIngreso.addEventListener("click", () => {
        tipoInput.value = "ingreso";
        btnIngreso.classList.add("activo");
        btnGasto.classList.remove("activo");
        btnIngreso.setAttribute("aria-pressed", "true");
        btnGasto.setAttribute("aria-pressed", "false");
    });

    btnGasto.addEventListener("click", () => {
        tipoInput.value = "gasto";
        btnGasto.classList.add("activo");
        btnIngreso.classList.remove("activo");
        btnGasto.setAttribute("aria-pressed", "true");
        btnIngreso.setAttribute("aria-pressed", "false");
    });
}

function agregarMovimiento() {
    const tipo = tipoInput ? tipoInput.value : "ingreso";
    const monto = Number(document.getElementById("monto")?.value);
    const categoria = document.getElementById("categoria")?.value || "Sin categoría";
    const frecuencia = document.getElementById("frecuencia")?.value || "unico";
    
    const movimiento = {
        monto,
        categoria,
        frecuencia,
    };

    if (monto === 0 || monto === "") {
        console.log(monto)
        showMessage("Por favor ingresa un monto válido", "error");
        return;
    } 

    if (tipo === "ingreso") {
        finanzas.ingresos.push(movimiento);
    } else {
        finanzas.gastos.push(movimiento);
    }

    guardarMovimientosSesion();
    actualizarEncabezado();
    actualizarMovimientos();
    showMessage("Movimiento guardado");

}

function guardarMeta() {
    const metaValor = Number(metaInput?.value || 0);
    if (metaValor <= 0 || isNaN(metaValor)) {
        showMessage("Ingresá una meta válida", "error");
        return;
    }
    if (metaTexto) metaTexto.textContent = `$${formatearNumero(metaValor)}`;
    localStorage.setItem("metaAhorro", metaValor.toString());
    showMessage("Meta guardada");
}

function borrarTodo() {
    finanzas.ingresos = [];
    finanzas.gastos = [];
    sessionStorage.removeItem(SESSION_KEY);
    actualizarEncabezado();
    actualizarMovimientos();
    showMessage("Datos borrados");
}

window.calcularTiempoMeta = function () {
    const resultado = calcularTiempoMeta(finanzas);

    mostrarTiempoEstimado(resultado.resultado);
    dibujarGrafico(resultado.etiquetas, resultado.datos);

    actualizarCards(resultado);
    document.querySelector(".chart-container").classList.remove("oculto");/*Muestra el "Evolución del ahorro
                                                                       en el tiempo" eliminando la clase
                                                                       que lo mantiene oculto*/

};

function tasaText(resultado) {
    let tasa = 0;
    if (resultado.ingresos > 0) {
        tasa = ((resultado.ahorroMensual / resultado.ingresos) * 100).toFixed(1);
    }
    return `${tasa}%`;
}

window.agregarMovimiento = agregarMovimiento;
window.guardarMeta = guardarMeta;
window.borrarTodo = borrarTodo;

inicializarUI();

function formatearNumero(numero) {
    return Number(numero).toLocaleString("es-AR");
}
