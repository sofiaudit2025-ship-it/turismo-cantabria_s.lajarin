/* Abre el menú */
function openMenu() {
  document.querySelector(".menu-movil").classList.add("activo");
  document.body.style.overflow = "hidden"; // Evita scroll detrás del menú
}

/* Cierra el menú */
function closeMenu() {
  document.querySelector(".menu-movil").classList.remove("activo");
  document.body.style.overflow = ""; // Restablece el scroll
}

/*carrusel funcional*/
$(document).ready(function () {

    let index = 0;
    const total = $(".carrusel img").length;

    function calcularPaso() {
        return $(".carrusel img").outerWidth(true);
    }

    // Cuando cargan todas las imágenes, calculamos ancho
    let paso = calcularPaso();

    $(window).on("resize", function () {
        paso = calcularPaso();
        mover();
    });

    $(".puntos span").click(function () {
        index = $(this).index();
        mover();
    });

    function mover() {
        $(".carrusel").css("transform", "translateX(" + (-paso * index) + "px)");
        $(".puntos span").removeClass("activo");
        $(".puntos span").eq(index).addClass("activo");
    }

});

