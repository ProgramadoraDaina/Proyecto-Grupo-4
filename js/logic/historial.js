export function calcularHistorial(finanzas) {

    let movimientos = [
        ...finanzas.ingresos.map(i => ({ ...i, tipo: "ingreso" })),
        ...finanzas.gastos.map(g => ({ ...g, tipo: "gasto" }))
    ];

    // ✅ MODO DEFAULT
    if (movimientos.length === 0) {
        return {
            modoDefault: true,
            etiquetas: ["Día 1", "Día 2", "Día 3", "Día 4", "Día 5"],
            datosDiarios: [0, 2000, 1500, 4000, 6500],
            racha: 5,
            ahorroFinal: 14000
        };
    }

    // ✅ Filtrar
    movimientos = movimientos.filter(m => m.fecha);

    // ✅ Ordenar
    movimientos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    // ✅ Agrupar por día
    let mapa = {};

    movimientos.forEach(mov => {
        const fechaKey = new Date(mov.fecha).toISOString().split("T")[0];

        if (!mapa[fechaKey]) {
            mapa[fechaKey] = 0;
        }

        if (mov.tipo === "ingreso") {
            mapa[fechaKey] += mov.monto;
        } else {
            mapa[fechaKey] -= mov.monto;
        }
    });

    let fechasOrdenadas = Object.keys(mapa)
        .map(f => new Date(f))
        .sort((a, b) => a - b);

    let etiquetas = [];
    let datosDiarios = [];

    fechasOrdenadas.forEach((fecha, index) => {

        let key = fecha.toISOString().split("T")[0];
        let valorDia = mapa[key];

        let etiqueta;

        if (index === fechasOrdenadas.length - 1) {
            etiqueta = "Hoy";
        } else {
            etiqueta = fecha.toLocaleDateString("es-AR", {
                day: "2-digit",
                month: "short"
            });
        }

        etiquetas.push(etiqueta);
        datosDiarios.push(valorDia);
    });

    // ✅ RACHA (como vos querías: cantidad de días)
    let racha = datosDiarios.length;

    // ✅ AHORRO TOTAL
    let ahorroFinal = datosDiarios.reduce((a, b) => a + b, 0);

    return {
        etiquetas,
        datosDiarios,
        racha,
        ahorroFinal
    };
}
