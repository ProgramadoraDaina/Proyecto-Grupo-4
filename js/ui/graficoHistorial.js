let chartHistorial = null;

export function dibujarGraficoHistorial(labels, data) {

    const ctx = document.getElementById("graficoHistorial").getContext("2d");

    if (chartHistorial) {
        chartHistorial.destroy();
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgb(34, 197, 94)");
    gradient.addColorStop(1, "rgb(0, 247, 255)");
const glowPointsPlugin = {
    id: "glowPoints",
    beforeDatasetDraw(chart, args, pluginOptions) {
        const { ctx } = chart;

        ctx.save();

        ctx.shadowBlur = 15; // intensidad del brillo
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)"; // color del glow

    },
    afterDatasetDraw(chart) {
        chart.ctx.restore();
    }
};

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
        const { chart } = ctx;
        const { ctx: canvas } = chart;

        const p0 = ctx.p0;
        const p1 = ctx.p1;

        const y0 = p0.parsed.y;
        const y1 = p1.parsed.y;

        // función color según valor
        const getColor = (v) => {
            if (v < 10000) return "#ff4d4d";
            if (v <= 100000) return "#facc15";
            return "#4ade80";
        };

        const colorStart = getColor(y0);
        const colorEnd = getColor(y1);

        // 🔥 creamos degradado entre puntos
        const gradient = canvas.createLinearGradient(
            p0.x, p0.y,
            p1.x, p1.y
        );

        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(1, colorEnd);

        return gradient;
    }
},
backgroundColor: (ctx) => {
    const { chart } = ctx;
    const { ctx: canvas } = chart;

    // 👉 agarramos el valor del punto
    const value = ctx.dataset.data[ctx.dataIndex];

    // 🔴 si es negativo → SIN estela
    if (value < 10000) return "rgb(0, 0, 0)";

    // 🟡 si es intermedio → SIN estela
    if (value <= 100000) return "rgba(0,0,0,0)";

    // 🟢 SOLO verde tiene estela
    const gradient = canvas.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgb(74, 222, 128)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

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
    ticks: {
        color: "#9ca3af",
        callback: function(value) {
            return "$" + value.toLocaleString("es-AR");
        }
    },
    grid: { color: "rgba(255,255,255,0.05)" }
}
            }
        },
        plugins: [glowPointsPlugin]
    });
}