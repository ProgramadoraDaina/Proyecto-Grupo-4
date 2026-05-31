// Módulo de acceso a sessionStorage para movimientos
const SESSION_KEY = "movimientosFinanzas";

export function cargarMovimientosSesion() {
    const datos = sessionStorage.getItem(SESSION_KEY);
    if (!datos) return { ingresos: [], gastos: [] };
    try {
        const objeto = JSON.parse(datos);
        return {
            ingresos: Array.isArray(objeto.ingresos) ? objeto.ingresos : [],
            gastos: Array.isArray(objeto.gastos) ? objeto.gastos : []
        };
    } catch (error) {
        console.warn("No se pudo leer sessionStorage:", error);
        return { ingresos: [], gastos: [] };
    }
}

export function guardarMovimientosSesion({ ingresos = [], gastos = [] } = {}) {
    const datos = { ingresos, gastos };
    try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(datos));
    } catch (error) {
        console.warn("No se pudo guardar sessionStorage:", error);
    }
}

export function clearMovimientos() {
    try {
        sessionStorage.removeItem(SESSION_KEY);
    } catch (error) {
        console.warn("No se pudo limpiar sessionStorage:", error);
    }
}

export default {
    cargarMovimientosSesion,
    guardarMovimientosSesion,
    clearMovimientos,
};
