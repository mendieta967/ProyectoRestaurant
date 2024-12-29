const themeButton = document.querySelector(".theme-togle");
const body = document.querySelector("body");

themeButton.addEventListener("click", () => {
  // Alternar el tema
  body.classList.toggle("theme-togle");

  // Cambiar el ícono dependiendo del tema
  if (body.classList.contains("theme-togle")) {
    themeButton.innerHTML = '<i class="fas fa-moon"></i>'; // Ícono de sol para el modo claro
  } else {
    themeButton.innerHTML = '<i class="fas fa-sun"></i>'; // Ícono de luna para el modo oscuro
  }

  // Guardar la preferencia del tema en localStorage
  store(body.classList.contains("theme-togle") ? "true" : "false");
});

function load() {
  const darkmode = localStorage.getItem("theme-togle");

  // Si el tema es oscuro, añadir la clase y actualizar el ícono
  if (darkmode === "true") {
    body.classList.add("theme-togle");
    themeButton.innerHTML = '<i class="fas fa-moon"></i>'; // Modo claro, ícono de sol
  } else {
    body.classList.remove("theme-togle");
    themeButton.innerHTML = '<i class="fas fa-sun"></i>'; // Modo oscuro, ícono de luna
  }
}

function store(value) {
  // Guardar la preferencia del tema en localStorage
  localStorage.setItem("theme-togle", value);
}

// Cargar la preferencia del tema cuando la página se carga
document.addEventListener("DOMContentLoaded", load);
