let chartHistorial = null;

export function dibujarGraficoHistorial(labels, data) {

    const ctx = document.getElementById("graficoHistorial").getContext("2d");

    if (chartHistorial) {
        chartHistorial.destroy();
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(34,197,94,0.4)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    chartHistorial = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
    // 🔥 1. GLOW (SIEMPRE VA PRIMERO)
    
{
    data: data,
    borderWidth: 3,
    tension: 0.25,
    fill: true,
    spanGaps: true,

    // 🔥 COLOR REAL POR TRAMO
    segment: {
        borderColor: ctx => {
            const v = ctx.p1.parsed.y;
            if (v < 10000) return "#ff4d4d";     // rojo
            if (v <= 100000) return "#facc15"; // amarillo
            return "#4ade80";                // verde
        }
    },

backgroundColor: (ctx) => {
    const { chart } = ctx;
    const { ctx: canvas } = chart;

    // 👉 agarramos el valor del punto
    const value = ctx.dataset.data[ctx.dataIndex];

    // 🔴 si es negativo → SIN estela
    if (value < 10000) return "rgba(0,0,0,0)";

    // 🟡 si es intermedio → SIN estela
    if (value <= 100000) return "rgba(0,0,0,0)";

    // 🟢 SOLO verde tiene estela
    const gradient = canvas.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(74,222,128,0.35)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    return gradient;
},

    pointRadius: 6,
    pointBackgroundColor: ctx => {
        const v = ctx.raw;
        if(v < 10000) return "#ff4d4d";
        if(v <= 100000) return "#facc15";
        return "#4ade80";
    },

    pointBorderColor: "#fff",
    pointBorderWidth: 2,
}

]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: { display: false }
            },

            scales: {
                x: {
                    ticks: { color: "#cbd5f5" },
                    grid: { color: "rgba(255,255,255,0.05)" }
                },
                y: {
                    ticks: { color: "#9ca3af" },
                    grid: { color: "rgba(255,255,255,0.05)" }
                }
            }
        }
    });
}