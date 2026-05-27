import { glowPointsPlugin } from "../utils/plugins.js";
import { formatearNumero } from "../utils/formateo.js";
let grafico = null;/*Variable para almacenar el gráfico actual*/

const getElemento = (id) => document.getElementById(id);

export function mostrarTiempoEstimado(texto) {/*Función que recibe un texto y muestra cuánto tiempo falta
                                         para completar la meta*/
    getElemento("resultadoSim").textContent = texto;
}

export function dibujarGrafico(labels, data) {
    const ctx = getElemento("grafico").getContext("2d");/*Prepara el espacio donde se va a
                                                                  dibujar el gráfico*/
    if (grafico) grafico.destroy();
    grafico = new Chart(ctx, {
        type: "line",/*tipo de gráfico (línea)*/
        data: {
            labels: labels,/*Define las etiquetas del eje X (Mes 1, Mes 2, etc.)*/
            datasets: [{
                label: "Ahorro acumulado",
                data: data,
                borderColor: "#22c55e", // verde fintech
                backgroundColor: "rgba(34, 197, 94, 0.15)", // relleno suave
                borderWidth: 4,
                tension: 0.1,

                pointBackgroundColor: "#22c55e",
                pointBorderColor: "#ffffff",
                pointRadius: 7,
                pointHoverRadius: 6,
                fill: true
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: "#e5e7eb" // color del texto de la leyenda
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: "#ffffff" // color eje X
                    },
                    grid: {
                        color: "#22c55e38" // líneas suaves
                    }
                },
                y: {
                    beginAtZero: true,
                    
ticks: {
        color: "#9ca3af",
        callback: function(value) {
            return "$" + value.toLocaleString("es-AR");
        }

                    },
                    grid: {
                        color: "#22c55e38"
                    }
                }
            },
            animations: {
                
                x: {
                    duration: 1800
                },
                y: {
                    duration: 2500
                }
            }
        },
        plugins: [glowPointsPlugin]
    }
    );
}