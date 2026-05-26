// historial.js

// 📌 Calcula la evolución real del ahorro en el tiempo
export function calcularHistorial(finanzas) {
    // Unificamos ingresos y gastos en un solo array
    let movimientos = [
        ...finanzas.ingresos.map(i => ({ ...i, tipo: "ingreso" })),
        ...finanzas.gastos.map(g => ({ ...g, tipo: "gasto" }))
    ];

// ✅ 👉 MODO PRUEBA (si no hay datos reales)
    if (movimientos.length === 0) {
        return {
            modoPrueba: true,
            etiquetas: [
                "01 May", "05 May", "10 May", "15 May",
                "20 May", "25 May", "30 May"
            ],
            datos: [
                -50000, 1000, 30000, 60000,
                120000, 140000, 160000
            ]
        };
    }

    // ⚠️ Filtrar los que no tengan fecha (por si hay datos viejos)
    movimientos = movimientos.filter(m => m.fecha);

    // 🧠 Ordenar por fecha (importante para la línea progresiva)
    movimientos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    let acumulado = 0;

    let etiquetas = [];
    let datos = [];

    movimientos.forEach(mov => {
        let fecha = new Date(mov.fecha);

        // 🧾 Formato de fecha (podés cambiarlo)
        let etiqueta = fecha.toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "short"
        });

        // 💰 lógica de acumulado
        if (mov.tipo === "ingreso") {
            acumulado += mov.monto;
        } else {
            acumulado -= mov.monto;
        }

        etiquetas.push(etiqueta);
        datos.push(acumulado);
    });

    return {
        etiquetas,
        datos,
        totalMovimientos: movimientos.length,
        ahorroFinal: acumulado
    };
}


// 📊 Agrupa por día (para análisis más limpio opcional)
export function agruparPorDia(finanzas) {
    let mapa = {};

    let movimientos = [
        ...finanzas.ingresos.map(i => ({ ...i, tipo: "ingreso" })),
        ...finanzas.gastos.map(g => ({ ...g, tipo: "gasto" }))
    ];

    movimientos.forEach(mov => {
        if (!mov.fecha) return;

        let fecha = new Date(mov.fecha).toLocaleDateString("es-AR");

        if (!mapa[fecha]) {
            mapa[fecha] = 0;
        }

        if (mov.tipo === "ingreso") {
            mapa[fecha] += mov.monto;
        } else {
            mapa[fecha] -= mov.monto;
        }
    });

    return mapa;
}


// 📅 Agrupa por semana (modo PRO)
export function agruparPorSemana(finanzas) {
    let mapa = {};

    let movimientos = [
        ...finanzas.ingresos.map(i => ({ ...i, tipo: "ingreso" })),
        ...finanzas.gastos.map(g => ({ ...g, tipo: "gasto" }))
    ];

    movimientos.forEach(mov => {
        if (!mov.fecha) return;

        let fecha = new Date(mov.fecha);
        let inicio = new Date(fecha.getFullYear(), 0, 1);
        let dias = Math.floor((fecha - inicio) / (1000 * 60 * 60 * 24));

        let semana = "Semana " + Math.floor(dias / 7);

        if (!mapa[semana]) {
            mapa[semana] = 0;
        }

        if (mov.tipo === "ingreso") {
            mapa[semana] += mov.monto;
        } else {
            mapa[semana] -= mov.monto;
        }
    });

    return mapa;
}


// 🤖 Genera mensajes inteligentes tipo feedback
export function generarMensajeHistorial(datos) {
    if (datos.length < 2) return "No hay suficientes datos para analizar.";

    let ultimo = datos[datos.length - 1];
    let anterior = datos[datos.length - 2];

    if (ultimo > anterior) {
        return "✅ Estás mejorando tu ahorro.";
    } else if (ultimo < anterior) {
        return "⚠️ Estás gastando más de lo que ahorrás últimamente.";
    } else {
        return "➖ Mantienes un nivel de ahorro constante.";
    }
}