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
    // CARRUSEL
    let $track = $('.carrusel-track');
    let width = $('.carrusel-item').outerWidth(true);

    $('.carrusel-next').click(function() {
        $track.animate({ scrollLeft: '+=' + width }, 500);
    });

    $('.carrusel-prev').click(function() {
        $track.animate({ scrollLeft: '-=' + width }, 500);
    });

    // MODAL
    let items = $(".carrusel-item img"); 
    let indexActual = 0;

    const infoAnimales = {
        "Águila": "Las águilas son rapaces majestuosas con una visión excepcional.",
        "Búho real": "El búho real es una de las aves nocturnas más grandes del mundo.",
        "Buitre": "Los buitres cumplen una función esencial como carroñeros.",
        "Ciervo": "El ciervo es uno de los mamíferos más representativos de Cabárceno.",
        "Ciervos": "Manadas de ciervos pueden verse en zonas amplias del parque.",
        "Eland": "El eland es el antílope más grande del mundo.",
        "Lago": "El lago de Cabárceno es uno de los paisajes más icónicos del parque.",
        "León": "El león, el rey de la sabana, vive en semilibertad en Cabárceno.",
        "Lince": "El lince ibérico es uno de los felinos más amenazados del mundo.",
        "Mono": "Los primates del parque muestran una gran variedad de comportamientos.",
        "Pantera": "La pantera negra es una variación melanística de varios leopardos."
    };

    // ABRIR MODAL
    items.click(function () {
        indexActual = items.index(this);
        mostrarImagen(indexActual);
        $("#modalAnimal").fadeIn().css("display", "flex");
    });

    // CERRAR MODAL
    $(".modal-close, .modal").click(function (e) {
        if (e.target !== this) return;
        $("#modalAnimal").fadeOut();
    });

    // MOSTRAR FOTO + TEXTO
    function mostrarImagen(index) {
        let img = items.eq(index);
        let nombre = img.attr("alt");

        $("#modalImg").attr("src", img.attr("src"));
        $("#modalTitulo").text(nombre);
        $("#modalTexto").text(infoAnimales[nombre] || "Información no disponible.");
    }

    // SIGUIENTE / ANTERIOR
    $(".modal-next").click(function (e) {
        e.stopPropagation();
        indexActual = (indexActual + 1) % items.length;
        mostrarImagen(indexActual);
    });

    $(".modal-prev").click(function (e) {
        e.stopPropagation();
        indexActual = (indexActual - 1 + items.length) % items.length;
        mostrarImagen(indexActual);
    });
});