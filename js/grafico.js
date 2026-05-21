let grafico = null;/*Variable para almacenar el gráfico actual*/

export function mostrarResultado(texto) {/*Función que recibe un texto y muestra cuánto tiempo falta
                                         para completar la meta*/
    document.getElementById("resultadoSim").textContent = texto;
}

export function dibujarGrafico(labels, data) {
    let ctx = document.getElementById("grafico").getContext("2d");/*Prepara el espacio donde se va a
                                                                  dibujar el gráfico*/

    if (grafico != null) {/*Si ya existe un gráfico, lo elimina antes de dibujar uno nuevo*/
        grafico.destroy();
    }

    grafico = new Chart(ctx, {
        type: "line",/*tipo de gráfico (línea)*/
        data: {
            labels: labels,/*Define las etiquetas del eje X (Mes 1, Mes 2, etc.)*/
            datasets: [{
                label: "Ahorro acumulado",/*Nombre de la serie de datos (aparece en la leyenda)*/

                data: data,/*Datos numéricos (valores del ahorro mes a mes)*/

                borderColor: "cyan",
                backgroundColor: "rgba(255, 255, 255, 0)",
                borderWidth: 2,
                tension: 0.2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true/*Hace que el eje Y comience desde 0*/
                }
            }
        }
    });
}