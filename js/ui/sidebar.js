export function inicializarSidebar() {
    const botonSidebar = document.getElementById('toggleButton');/*Busca el elemento con id "toggleButton*/
    const sidebar = document.getElementById('sidebar');

    botonSidebar.addEventListener('click', function () {/*Cuando el usuario haga CLICK en el botonSidebar*/
        
        toggleEvents(sidebar, botonSidebar);/*hace que el sidebar se abra o cierre*/
    });
}

function toggleEvents(node, button) {
    if (node.classList.contains('showed')) {/*si el sidebar ya esta abierto*/
        node.classList.remove('showed');
        button.classList.remove('active');
    } else {
        node.classList.add('showed');
        button.classList.add('active');
    }
}

export function resaltarPaginaActual() {
    const links = document.querySelectorAll("aside ul li a");/*Guardá todos los links del menú lateral 
                                                             en la variable*/

    const currentPage =
        window.location.pathname.split("/").pop() || "inicio.html";/*Obtiene el nombre del archivo de la
                                                                   página actual, si no hay ninguno usa
                                                                   inicio.html*/

    links.forEach(link => {
        const linkPath = link.getAttribute("href");/*Obtiene el valor de href*/

        if (linkPath === currentPage) {/*Si el href del link es igual a la página actual*/
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}