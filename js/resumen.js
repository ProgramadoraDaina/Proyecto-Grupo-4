import { cargarMovimientosSesion } from "./storage.js";
import { formatearNumero } from "./utils/formateo.js";

function formatearFecha(timestamp) {
    if (!timestamp || isNaN(timestamp)) {
        return "Sin fecha";
    }

    const fecha = new Date(timestamp);

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

function obtenerMovimientosRecientes() {
    const datosSesion = cargarMovimientosSesion();

    // Combinar todos los movimientos con su tipo
    const movimientosRecientes = [
        ...datosSesion.ingresos.map(mov => ({ ...mov, tipo: "ingreso" })),
        ...datosSesion.gastos.map(mov => ({ ...mov, tipo: "gasto" }))
    ];

    return movimientosRecientes;
}

function filtrarYOrdenarMovimientos(movimientosRecientes, filtros) {
    let movimientosFiltrados = movimientosRecientes;

    // Filtrar por tipo
    if (filtros.tipo !== "todos") {
        movimientosFiltrados = movimientosFiltrados.filter(mov => mov.tipo === filtros.tipo);
    }

    // Filtrar por categoría
    if (filtros.categoria !== "todos") {
        movimientosFiltrados = movimientosFiltrados.filter(mov => mov.categoria === filtros.categoria);
    }

    // Ordenar
    switch(filtros.orden) {
        case "fecha_asc":
            movimientosFiltrados.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
            break;
        case "monto_desc":
            movimientosFiltrados.sort((a, b) => Number(b.monto || 0) - Number(a.monto || 0));
            break;
        case "monto_asc":
            movimientosFiltrados.sort((a, b) => Number(a.monto || 0) - Number(b.monto || 0));
            break;
        case "fecha_desc":
        default:
            movimientosFiltrados.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }

    return movimientosFiltrados;
}

function renderizarListaResumen(movimientosRecientes, filtros) {
    const listaResumen = document.getElementById("listaResumen");
    const resumenTotal = document.getElementById("resumenTotal");

    if (!listaResumen) return;

    const movimientosFiltrados = filtrarYOrdenarMovimientos(movimientosRecientes, filtros);

    listaResumen.innerHTML = "";

    if (movimientosFiltrados.length === 0) {
        listaResumen.innerHTML = "<p style='color: var(--texto-secundario); text-align: center; padding: 20px;'>No hay movimientos para mostrar</p>";
        if (resumenTotal) resumenTotal.textContent = "Total visible: $0";
        return;
    }

    // Calcular total visible
    const totalVisible = movimientosFiltrados.reduce((acc, mov) => {
        const monto = Number(mov.monto || 0);
        return mov.tipo === "gasto" ? acc - monto : acc + monto;
    }, 0);

    // Renderizar movimientos
    movimientosFiltrados.forEach(mov => {
        const item = document.createElement("div");
        item.classList.add("movimiento");

        const colorClase = mov.tipo === "ingreso" ? "ingreso" : "gasto";
        const simbolo = mov.tipo === "ingreso" ? "+" : "-";
        const categoriaClase = `categoria-${(mov.categoria || "sin-categoria").toLowerCase().replace(/\s+/g, "-")}`;

        item.classList.add(colorClase);
        item.innerHTML = `
            <div class="movimiento-icono ${categoriaClase}"></div>
            <div class="movimiento-contenido">
                <div class="movimiento-info">
                    <div>
                        <div class="movimiento-categoria">${mov.categoria || "Sin categoría"}</div>
                        <span class="movimiento-frecuencia">${mov.tipo} • ${mov.frecuencia || "único"}</span>
                    </div>
                </div>
                <div class="movimiento-monto ${colorClase}">
                    ${simbolo}$${formatearNumero(mov.monto)}
                </div>
            </div>
            <div class="movimiento-fecha">${formatearFecha(mov.timestamp)}</div>
        `;
        listaResumen.appendChild(item);
    });

    if (resumenTotal) {
        const simbolo = totalVisible >= 0 ? "+" : "";
        const color = totalVisible >= 0 ? "color: #22c55e;" : "color: #ef4444;";
        resumenTotal.innerHTML = `<span style="${color}">Total visible: ${simbolo}$${formatearNumero(totalVisible)}</span>`;
    }
}

function inicializarResumen() {
    const tipoFiltro = document.getElementById("tipoFiltro");
    const categoriaFiltro = document.getElementById("categoriaFiltro");
    const ordenFiltro = document.getElementById("orden");

    const movimientosRecientes = obtenerMovimientosRecientes();
    function calcularMetricasGlobales() {
        const datosSesion = cargarMovimientosSesion();
        

        const totalIngresos = datosSesion.ingresos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
        const totalGastos = datosSesion.gastos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
        const balanceNeto = totalIngresos - totalGastos;


        const txtIngresos = document.getElementById("resumen-ingresos");
        const txtGastos = document.getElementById("resumen-gastos");
        const txtBalance = document.getElementById("resumen-balance");

        if (txtIngresos) txtIngresos.textContent = `$${formatearNumero(totalIngresos)}`;
        if (txtGastos) txtGastos.textContent = `$${formatearNumero(totalGastos)}`;
        if (txtBalance) {
            txtBalance.textContent = `$${formatearNumero(balanceNeto)}`;

            txtBalance.style.color = balanceNeto >= 0 ? "#22c55e" : "#ef4444";
        }

        const txtTasa = document.getElementById("txt-tasa-ahorro");
        if (txtTasa) {
            if (totalIngresos <= 0 || balanceNeto <= 0) {
                txtTasa.textContent = "0%";
            } else {
                const porcentajeTasa = (balanceNeto / totalIngresos) * 100;
                txtTasa.textContent = `${porcentajeTasa.toFixed(1)}%`;
            }
        }
    }

    function actualizarVista() {
        const filtros = {
            tipo: tipoFiltro?.value || "todos",
            categoria: categoriaFiltro?.value || "todos",
            orden: ordenFiltro?.value || "fecha_desc"
        };
        renderizarListaResumen(movimientosRecientes, filtros);
    }
    calcularMetricasGlobales();

    // Mostrar movimientos iniciales
    actualizarVista();

    // Agregar listeners a los filtros
    if (tipoFiltro) tipoFiltro.addEventListener("change", actualizarVista);
    if (categoriaFiltro) categoriaFiltro.addEventListener("change", actualizarVista);
    if (ordenFiltro) ordenFiltro.addEventListener("change", actualizarVista);
}

document.addEventListener("DOMContentLoaded", inicializarResumen);
