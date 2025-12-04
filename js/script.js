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