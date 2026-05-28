import { Finanzas } from "./Finanzas.js";
import { calcularTiempoMeta } from "./logica/simulador.js";
import { mostrarTiempoEstimado, dibujarGrafico } from "./ui/grafico.js";
import { formatearNumero } from "./utils/formateo.js";

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

function formatearFecha(timestamp) {
    // Validar que timestamp sea válido
    if (!timestamp || isNaN(timestamp)) {
        return "Sin fecha";
    }
    
    const fecha = new Date(timestamp);
    
    // Verificar si es una fecha válida
    if (isNaN(fecha.getTime())) {
        return "Sin fecha";
    }
    
    const hoy = new Date();
    const ayer = new Date(hoy);
    ayer.setDate(ayer.getDate() - 1);
    
    const esHoy = fecha.toDateString() === hoy.toDateString();
    const esAyer = fecha.toDateString() === ayer.toDateString();
    
    if (esHoy) {
        return fecha.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
    } else if (esAyer) {
        return "Ayer";
    } else {
        return fecha.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
    }
}

function actualizarMovimientos() {
    if (!listaMovimientos) return;
    listaMovimientos.innerHTML = "";

    // Combinar todos los movimientos con su tipo
    const movimientosUnificados = [
        ...finanzas.ingresos.map(mov => ({ ...mov, tipo: "ingreso" })),
        ...finanzas.gastos.map(mov => ({ ...mov, tipo: "gasto" }))
    ];

    // Ordenar por timestamp descendente (más reciente primero)
    movimientosUnificados.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    // Tomar solo los últimos 5 movimientos recientes
    const movimientosRecientes = movimientosUnificados.slice(0, 5);

    // Agrupar por categoría
    const movimientosPorCategoria = {};
    movimientosRecientes.forEach(mov => {
        if (!movimientosPorCategoria[mov.categoria]) {
            movimientosPorCategoria[mov.categoria] = [];
        }
        movimientosPorCategoria[mov.categoria].push(mov);
    });

    // Renderizar cada categoría como sección
    Object.keys(movimientosPorCategoria).forEach(categoria => {
        // Crear encabezado de categoría
        const categoriaClase = `categoria-${categoria.toLowerCase().replace(/\s+/g, "-")}`;

        const encabezadoCategoria = document.createElement("div");
        encabezadoCategoria.classList.add("categoria-encabezado");
        encabezadoCategoria.innerHTML = `
            <h3><span class="categoria-icono ${categoriaClase}"></span>${categoria}</h3>
        `;
        listaMovimientos.appendChild(encabezadoCategoria);

        // Crear movimientos de la categoría
        movimientosPorCategoria[categoria].forEach(mov => {
            const item = document.createElement("div");
            item.classList.add("movimiento");
            
            const colorClase = mov.tipo === "ingreso" ? "ingreso" : "gasto";
            const simbolo = mov.tipo === "ingreso" ? "+" : "-";
            
            item.classList.add(colorClase);
            item.innerHTML = `
                <div class="movimiento-contenido">
                    <div class="movimiento-info">
                        <strong class="categoria-icono ${categoriaClase}"></strong>
                        <span class="movimiento-frecuencia">${mov.frecuencia}</span>
                    </div>
                    <div class="movimiento-monto ${colorClase}">
                        ${simbolo}$${formatearNumero(mov.monto)}
                    </div>
                </div>
                <div class="movimiento-fecha">${formatearFecha(mov.timestamp)}</div>
            `;
            listaMovimientos.appendChild(item);
        });
    });
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
        timestamp: new Date().getTime(),
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
    const resultado = calcularTiempoMeta({
    ingresos: finanzas.ingresos,
    gastos: finanzas.gastos,
    metaAhorro: Number(localStorage.getItem("metaAhorro")) || 0
});

    mostrarTiempoEstimado(resultado.resultado);
    dibujarGrafico(resultado.etiquetas, resultado.datos);

    actualizarCards(resultado);
    document.querySelector(".chart-container").classList.remove("oculto");/*Muestra el "Evolución del ahorro
                                                                       en el tiempo" eliminando la clase
                                                                       que lo mantiene oculto*/
mostrarToast("✅ Estimación exitosa");
};
function mostrarToast(mensaje) {
    const toast = document.getElementById("toast");

    toast.textContent = mensaje;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

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