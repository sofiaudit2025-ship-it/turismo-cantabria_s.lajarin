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

/* Carrusel simple infinito */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".ciudades-track");
    const items = document.querySelectorAll(".ciudades-item");
    const prev = document.querySelector(".ciudades-prev");
    const next = document.querySelector(".ciudades-next");

    let index = 0;

    function move() {
        const width = items[0].offsetWidth;
        track.style.transform = `translateX(${-index * width}px)`;
    }

    next.addEventListener("click", () => {
        index++;
        if (index >= items.length) index = 0;
        move();
    });

    prev.addEventListener("click", () => {
        index--;
        if (index < 0) index = items.length - 1;
        move();
    });

    window.addEventListener("resize", move);

    move();
});

