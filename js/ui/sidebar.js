export function inicializarSidebar() {
    const boton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');

    boton.addEventListener('click', function () {
        toggleEvents(sidebar, boton);
    });
}

function toggleEvents(node, button) {
    if (node.classList.contains('showed')) {
        node.classList.remove('showed');
        button.classList.remove('active');
    } else {
        node.classList.add('showed');
        button.classList.add('active');
    }
}

export function resaltarLinkActivo() {
    const links = document.querySelectorAll("aside ul li a");

    const currentPage =
        window.location.pathname.split("/").pop() || "inicio.html";

    links.forEach(link => {
        const linkPath = link.getAttribute("href");

        if (linkPath === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}