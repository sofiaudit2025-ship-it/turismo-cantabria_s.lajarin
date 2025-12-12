

 /* Pantalla de carga con java puro
     window.onload = function() {
        setTimeout(function() {
            const loader = document.getElementById("loader");
            if (loader) {
                loader.style.top = "-100%";
            }
        }, 2000);
    
    */

/*pantalla carga con jquery*/ 
    setTimeout(function() {
    $("#loader").css("top", "-100%");
    }, 2000);


/*Menu hamburguesa con java puro */
    /* Abre el menú 
    function openMenu() {
        document.querySelector(".menu-movil").classList.add("activo");
        document.body.style.overflow = "hidden";
    }*/

    /* Cierra el menú 
    function closeMenu() {
        document.querySelector(".menu-movil").classList.remove("activo");
        document.body.style.overflow = "";
    }*/

    /* Deslizar hacia abajo (si existe el icono) 
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
*/

/*menu hamburguesa jquery*/
$("#hamburger").click(function() {
    $(".menu-movil").addClass("activo");
    $("body").css("overflow", "hidden");
});
$(".btn-cerrar").click(function() {
    $(".menu-movil").removeClass("activo");
    $("body").css("overflow", "");
});

/*scroll flecha en java script puro porque el jquery daba problemas en el funcionamiento*/
document.addEventListener("DOMContentLoaded", () => {
    const scrollIcons = document.querySelectorAll(".scroll-down");

    scrollIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            // Buscar la siguiente sección visible
            let next = icon.closest("section").nextElementSibling;
            while(next && !(next.tagName === "SECTION" || next.tagName === "DIV")) {
                next = next.nextElementSibling;
            }
            if(next) {
                next.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

/*hora y temperatura java puro 
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
});*/




$(document).ready(function() {
    function actualizarHora() {
        const ahora = new Date();
        const hora = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        $("#hora").text(`Hora: ${hora}:${minutos}`);
    }

    // Inicializa la hora
    actualizarHora();
    // Actualiza cada minuto
    setInterval(actualizarHora, 60000);
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

//carrusel jquerie
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

// Datos reales gráfica
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const data = {
    labels: labels,
    datasets: [{
        label: 'Visitas al Parque',
        data: [250, 400, 350, 500, 600, 450, 700, 750, 600, 500, 450, 300], // visitas simuladas
        fill: true,
        borderColor: 'green',
        backgroundColor: 'rgba(0,128,0,0.2)', // verde semi-transparente
        tension: 0.4 // suaviza la curva
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Visitas mensuales al Parque',
                font: { size: 20 }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

//Chart.js

function cargaGraficoBarras() {
    // Datos para generar el gráfico, hay que definir las etiquetas y
    // los datasets. Hay que definir un color para cada dataset
    var datos = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
            label: "Número de visitas al parque en 2024",
            backgroundColor: "#1F5148",
            data: [15.000, 14.000, 60.089, 35.000, 64.095, 70.000, 120.000, 164.159, 65.000, 30.000, 33.147, 31.204]
        }],
    };

    // Configuración del gráfico. Debe incluir imprescindiblemente el
    // tipo de gráfico y los datos que hemos definido previamente.
    // Se pueden añadir opciones para personalizar el gráfico
    var config = {
        type: "bar",
        data: datos,
        options: {
            scales: {
                x: {
                    border: {
                        color: "#F5F1EE",
                        width: 2
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 200.000,
                    title: {
                        display: true,
                        text: "Cantidad de visitantes mensuales en miles"
                    },
                    border: {
                        color: "#F5F1EE",
                        width: 2
                    }
                }
            }
        }
    };

    // Para crear el gráfico, se busca el elemento canvas por su id
    // y se le pasa la configuración en JSON que hemos definido
    var grafico = $("#barras")[0].getContext("2d");
    new Chart(grafico, config);
}



$(document).ready(function () {
    cargaGraficoBarras();

});
