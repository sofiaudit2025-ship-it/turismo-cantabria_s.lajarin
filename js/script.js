window.onload = function() {

    /* Pantalla de carga */
    setTimeout(function() {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.top = "-100%";
        }
    }, 2000);

    /* Abre el menú */
    function openMenu() {
        document.querySelector(".menu-movil").classList.add("activo");
        document.body.style.overflow = "hidden";
    }

    /* Cierra el menú */
    function closeMenu() {
        document.querySelector(".menu-movil").classList.remove("activo");
        document.body.style.overflow = "";
    }

    /* Deslizar hacia abajo (si existe el icono) */
    const scrollIcon = document.querySelector(".scroll-down");
    if (scrollIcon) {
        scrollIcon.addEventListener("click", function () {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        });
    }

};


/*hora y temperatura*/ 
document.addEventListener("DOMContentLoaded", () => {
    // Función para actualizar la hora
    function actualizarHora() {
        const ahora = new Date();
        const hora = ahora.getHours().toString().padStart(2,'0');
        const minutos = ahora.getMinutes().toString().padStart(2,'0');
        document.getElementById('hora').textContent = `Hora: ${hora}:${minutos}`;
    }

    // Actualizar cada minuto
    actualizarHora();
    setInterval(actualizarHora, 60000);

    // Simulación de temperatura (puedes conectar con API real más adelante)
    document.getElementById('temperatura').textContent = `Temperatura: 18°C`;
});

/*menu hamburguesa*/

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menuMovil = document.getElementById("menuMovil");

    // Abrir menú al hacer click
    hamburger.addEventListener("click", () => {
        menuMovil.style.left = "0";
    });
});

// Función para cerrar menú
function closeMenu() {
    document.getElementById("menuMovil").style.left = "-100%";
}

//carrusel

$(document).ready(function() {
    let width = $('.carrusel-item').outerWidth(true);
    $('#next').click(function() {
        $('.carrusel-track').animate({scrollLeft: '+= ' + width}, 500);
    });
    $('#prev').click(function() {
        $('.carrusel-track').animate({scrollLeft: '-= ' + width}, 500);
    });
});