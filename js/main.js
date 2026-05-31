import { Finanzas } from "./Finanzas.js";
import { calcularTiempoMeta } from "./logica/simulador.js";
import { mostrarTiempoEstimado, dibujarGrafico } from "./ui/grafico.js";
import { formatearNumero } from "./utils/formateo.js";

import { actualizarCards } from "./ui/cards.js";
import { inicializarSidebar, resaltarPaginaActual } from "./ui/sidebar.js";
import { cargarMovimientosSesion, guardarMovimientosSesion, clearMovimientos } from "./storage.js";

const btnIngreso = document.getElementById("btnIngreso");
const btnGasto = document.getElementById("btnGasto");
const tipoInput = document.getElementById("tipo");
const metaInput = document.getElementById("metaInput");
const metaTexto = document.getElementById("metaTexto");
const listaMovimientos = document.getElementById("listaMovimientos");
const alertas = document.getElementById("alertas");

const finanzas = new Finanzas();

// Las operaciones sobre sessionStorage se delegan al módulo `js/storage.js`.

function actualizarEncabezado() {
    const ingresos = finanzas.ingresos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
    const gastos = finanzas.gastos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
    const saldo = ingresos - gastos;

    const ingresosEl = document.getElementById("ingresos");
    const gastosEl = document.getElementById("gastos");
    const saldoEl = document.getElementById("saldo");
    const resumenIngresos = document.getElementById("resumen-ingresos");
    const resumenGastos = document.getElementById("resumen-gastos");
    const resumenBalance = document.getElementById("resumen-balance");

    if (ingresosEl) ingresosEl.textContent = formatearNumero(ingresos);
    if (gastosEl) gastosEl.textContent = formatearNumero(gastos);
    if (saldoEl) saldoEl.textContent = formatearNumero(saldo);
    if (resumenIngresos) resumenIngresos.textContent = `$${formatearNumero(ingresos)}`;
    if (resumenGastos) resumenGastos.textContent = `$${formatearNumero(gastos)}`;
    if (resumenBalance) resumenBalance.textContent = `$${formatearNumero(saldo)}`;
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

    // Mostrar todos los movimientos agregados
    const movimientosRecientes = movimientosUnificados.slice(0,5);

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
                        <div>
                            <div class="movimiento-categoria">${mov.categoria}</div>
                            <span class="movimiento-frecuencia">${mov.tipo} • ${mov.frecuencia}</span>
                        </div>
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
    // Cargar movimientos desde el storage centralizado
    const datosSesion = cargarMovimientosSesion();
    if (datosSesion) {
        finanzas.ingresos = Array.isArray(datosSesion.ingresos) ? datosSesion.ingresos : [];
        finanzas.gastos = Array.isArray(datosSesion.gastos) ? datosSesion.gastos : [];
    }
    cargarMeta();
    actualizarEncabezado();
    actualizarMovimientos();
    actualizarMetaUI();

    calcularProgresoMetaNativa();  // dibuja la barra de progreso al arrancar
    inicializarSistemaTemas();     // setea l modo oscuro/claro según el localStorage
    actualizarGraficoDonaNativo(); // se levanta el gráfico de torta con los gastos que haya
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

        guardarMovimientosSesion({ ingresos: finanzas.ingresos, gastos: finanzas.gastos });
    actualizarEncabezado();
    actualizarMovimientos();
    calcularProgresoMetaNativa(true);  // re-calcula tu barra de progreso con el nuevo saldo
    actualizarGraficoDonaNativo(); // re-dibuja los tramos del gradiente cónico del grafico
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

    calcularProgresoMetaNativa(true);
    
    showMessage("Meta guardada");
}

function borrarTodo() {
    finanzas.ingresos = [];
    finanzas.gastos = [];
        clearMovimientos();
    actualizarEncabezado();
    actualizarMovimientos();
    calcularProgresoMetaNativa();  
    actualizarGraficoDonaNativo(); 
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

// barra de progreso del grafisco 
function calcularProgresoMetaNativa(dispararAlerta = false) {
    const ingresos = finanzas.ingresos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
    const gastos = finanzas.gastos.reduce((acc, mov) => acc + Number(mov.monto || 0), 0);
    const ahorroReal = ingresos - gastos;
    const objetivo = Number(localStorage.getItem("metaAhorro")) || 0;

    let porcentaje = objetivo > 0 ? Math.round((ahorroReal / objetivo) * 100) : 0;
    porcentaje = Math.max(0, Math.min(porcentaje, 100));

    const barra = document.getElementById('barra-progreso-nativa');
    const txtPorcentaje = document.getElementById('txt-meta-porcentaje');
    const txtAhorrado = document.getElementById('txt-meta-ahorrado');
    const tarjeta = document.getElementById('tarjeta-meta-ahorro');
    const txtObjetivoFijo = document.getElementById('txt-meta-objetivo-fijo');
    const contenedorAnalitica = document.getElementById('contenedor-analitica-gastos');

    if (barra) barra.value = porcentaje;
    if (txtPorcentaje) txtPorcentaje.textContent = `${porcentaje}% completado`;
    if (txtAhorrado) txtAhorrado.textContent = "$" + formatearNumero(Math.max(0, ahorroReal));
   if (txtObjetivoFijo) txtObjetivoFijo.textContent = "$" + abreviarMonto(objetivo);

    // fucion para abreviar montos exorbitantes
    function abreviarMonto(val) {
        return val >= 1000000 ? `${(val / 1000000).toFixed(1)}M` : formatearNumero(val);
    }

    if (tarjeta) tarjeta.classList.remove('meta-exito', 'meta-advertencia');
    if (contenedorAnalitica) contenedorAnalitica.classList.remove('gasto-peligro');

    if (objetivo > 0) {
        if (porcentaje >= 100) {
            tarjeta.classList.add('meta-exito');
            if (dispararAlerta)
                {showMessage("🎉 ¡Felicidades! Alcanzaste tu meta de ahorro", "success");}
            
        } 
        else if (gastos > ingresos) {
            tarjeta.classList.add('meta-advertencia');
        }

        if (gastos > ingresos) {
        if (contenedorAnalitica) contenedorAnalitica.classList.add('gasto-peligro');
        // Si la bandera es true, gatilla el cartel flotante rojo de saldo negativo
        if (dispararAlerta) {showMessage("⚠️ Alerta: Tus gastos superan tus ingresos actuales", "error");
        }
    }
        else if (ingresos > 0 && (gastos / ingresos) > 0.7) {
            if (contenedorAnalitica) contenedorAnalitica.classList.add('gasto-peligro');
            if (dispararAlerta){  showMessage("⚠️ Cuidado: Has consumido más del 70% de tus ingresos", "error");
            }
           
        }
    }
}


function inicializarSistemaTemas() {
    const switchTema = document.getElementById('input-switch-tema');
    const iconoTema = document.getElementById('icono-estado-tema'); 
    if (!switchTema) return;

    const temaGuardado = localStorage.getItem('minifinance-tema') || 'dark';
    document.documentElement.setAttribute('data-theme', temaGuardado);
    switchTema.checked = temaGuardado === 'dark';

    if (iconoTema) {
        iconoTema.textContent = temaGuardado === 'dark' ? '☾' : '☼';
    }

    switchTema.addEventListener('change', (e) => {
        const nuevoTema = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', nuevoTema);
        localStorage.setItem('minifinance-tema', nuevoTema); 
        
        if (iconoTema) {
            iconoTema.textContent = nuevoTema === 'dark' ? '☾' : '☼';
        }
        
        // alterna la switch 
        actualizarEncabezado();
        calcularProgresoMetaNativa();
        actualizarGraficoDonaNativo();
    });
}


function actualizarGraficoDonaNativo() {
    const categorizados = {};
    let totalGastos = 0;

    finanzas.gastos.forEach(mov => {
        const cat = mov.categoria || "Sin categoría";
        const monto = Number(mov.monto || 0);
        categorizados[cat] = (categorizados[cat] || 0) + monto;
        totalGastos += monto;
    });

    const totalGraficoEl = document.getElementById("monto-total-grafico");
    const leyendaEl = document.getElementById("leyenda-dinamica-gastos");
    const wrapperDona = document.querySelector(".wrapper-dona-grafica");

    if (totalGraficoEl) {
       if (totalGastos >= 1000000000) {
        totalGraficoEl.textContent = `$${(totalGastos / 1000000000).toFixed(1)}B`; // Billones (B)
    } else if (totalGastos >= 1000000) {
        totalGraficoEl.textContent = `$${(totalGastos / 1000000).toFixed(1)}M`; // Millones (M)
    } else if (totalGastos >= 10000) {
        totalGraficoEl.textContent = `$${(totalGastos / 1000).toFixed(0)}K`; // Miles (K)
    } else {
        totalGraficoEl.textContent = `$${formatearNumero(totalGastos)}`;
    }
}

const estilosRoot = getComputedStyle(document.documentElement);

const paletaColores = {
    "Comida": estilosRoot.getPropertyValue('--color-comida').trim() || "#ef4444",      
    "Ocio": estilosRoot.getPropertyValue('--color-ocio').trim() || "#a855f7",        
    "Transporte": estilosRoot.getPropertyValue('--color-transporte').trim() || "#f97316",  
    "Regalos": estilosRoot.getPropertyValue('--color-regalos').trim() || "#3b82f6",     
    "Sueldo": estilosRoot.getPropertyValue('--color-sueldo').trim() || "#22c55e"       
};

    if (wrapperDona) {
        if (totalGastos === 0) {
          wrapperDona.style.background = "var(--bg-pista-progress)";
        } else {
            let acumulado = 0;
            const tramos = [];

            Object.entries(categorizados).forEach(([categoria, monto]) => {
                const porcentaje = (monto / totalGastos) * 100;
                const color = paletaColores[categoria] || "#64748b";
                tramos.push(`${color} ${acumulado}% ${acumulado + porcentaje}%`);
                acumulado += porcentaje;
            });

           wrapperDona.style.background = `conic-gradient(${tramos.join(", ")})`;
        }
    }

    if (leyendaEl) {
        leyendaEl.innerHTML = "";
        
        Object.entries(categorizados).forEach(([categoria, monto]) => {
            const porcentaje = totalGastos > 0 ? Math.round((monto / totalGastos) * 100) : 0;
            const colorActual = paletaColores[categoria] || "#64748b";
            
            const item = document.createElement("li");
            item.style.display = "flex";
            item.style.justifyContent = "space-between";
            item.style.alignItems = "center";
            item.style.margin = "14px 0";
            item.style.fontSize = "14px";
            item.style.listStyle = "none";
            
            item.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px; flex:1;">
                    <span style="width:12px; height:12px; background:${colorActual}; border-radius:50%; display:inline-block; flex-shrink:0;"></span>
                    <span style="color:var(--texto-principal); font-weight: 500;">${categoria === "Comida" ? "Alimentación" : categoria}</span>
                </div>
                <div style="display:flex; justify-content:space-between; width:45%; align-items:center;">
                    <span style="color:var(--texto-secundario); text-align:right; flex:1; padding-right:20px;">$${formatearNumero(monto)}</span>
                    <span style="color:var(--texto-secundario); width:35px; text-align:right; font-weight:600;">${porcentaje}%</span>
                </div>
            `;
            leyendaEl.appendChild(item);
        });
    }
}

window.agregarMovimiento = agregarMovimiento;
window.guardarMeta = guardarMeta;
window.borrarTodo = borrarTodo;

document.addEventListener("DOMContentLoaded", () => {
    inicializarSidebar();
    resaltarPaginaActual();
    inicializarUI();
});