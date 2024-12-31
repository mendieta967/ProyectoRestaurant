const menu = document.querySelector(".icon-navegacion");
const navegacion = document.querySelector(".navegacion");
const imagenes = document.querySelectorAll("img");
const contenedorPlatos = document.querySelector(".platillos");
const btnTodos = document.querySelector(".todos");
const btnEnsaladas = document.querySelector(".ensaladas");
const btnPastas = document.querySelector(".pastas");
const btnPizza = document.querySelector(".pizza");
const btnPostre = document.querySelector(".postres");

document.addEventListener("DOMContentLoaded", () => {
  eventos();
});

const eventos = () => {
  menu.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  navegacion.classList.remove("ocultar");
  botonCerrar();
};

const botonCerrar = () => {
  const btnCerrar = document.createElement("p");
  btnCerrar.classList.add("btnCerrar");
  btnCerrar.textContent = "x";

  const overlay = document.createElement("div");
  overlay.classList.add("pantallaCompleta");

  const body = document.querySelector("body");
  if (document.querySelectorAll(".pantallaCompleta").length > 0) return;
  body.appendChild(overlay);

  navegacion.appendChild(btnCerrar, overlay);
  cerrarMenu(btnCerrar, overlay);

  // Añadir eventos a los enlaces de la barra de navegación
  const enlaces = document.querySelectorAll(".navegacion a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      cerrarNavegacion(btnCerrar, overlay);
    });
  });
};

const cerrarMenu = (boton, overlay) => {
  boton.addEventListener("click", () => cerrarNavegacion(boton, overlay));

  overlay.onclick = function () {
    cerrarNavegacion(boton, overlay);
  };
};

const cerrarNavegacion = (boton, overlay) => {
  navegacion.classList.add("ocultar");
  overlay.remove();
  boton.remove();
};

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imagen = entry.target;
          imagen.src = imagen.dataset.src;
          observer.unobserve(imagen);
        }
      });
    },
    {
      rootMargin: "200px", // Carga las imágenes 200px antes de que entren en el viewport
    }
  );

  const imagenes = document.querySelectorAll("[data-src]"); // Asegúrate de seleccionar correctamente las imágenes
  imagenes.forEach((imagen) => {
    observer.observe(imagen);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const platillos = () => {
    let platilloArreglo = [];
    const platillos = document.querySelectorAll(".platillo");
    platillos.forEach((platillo) => {
      platilloArreglo = [...platilloArreglo, platillo];
    });

    // Filtrar categorías
    const ensaladas = platilloArreglo.filter(
      (platillo) => platillo.getAttribute("data-platillo") === "ensaladas"
    );
    const pastas = platilloArreglo.filter(
      (platillo) => platillo.getAttribute("data-platillo") === "pastas"
    );
    const pizzas = platilloArreglo.filter(
      (platillo) => platillo.getAttribute("data-platillo") === "pizza"
    );
    const postres = platilloArreglo.filter(
      (platillo) => platillo.getAttribute("data-platillo") === "postres"
    );

    mostrarPlatos(ensaladas, pastas, pizzas, postres);
  };

  const mostrarPlatos = (ensaladas, pastas, pizzas, postres) => {
    btnEnsaladas.addEventListener("click", () => {
      limpiarPantalla(contenedorPlatos);
      ensaladas.forEach((ensalada) => {
        contenedorPlatos.appendChild(ensalada);
      });
    });
    btnPastas.addEventListener("click", () => {
      limpiarPantalla(contenedorPlatos);
      pastas.forEach((pasta) => {
        contenedorPlatos.appendChild(pasta);
      });
    });
    btnPizza.addEventListener("click", () => {
      limpiarPantalla(contenedorPlatos);
      pizzas.forEach((pizza) => {
        contenedorPlatos.appendChild(pizza);
      });
    });
    btnPostre.addEventListener("click", () => {
      limpiarPantalla(contenedorPlatos);
      postres.forEach((postre) => {
        contenedorPlatos.appendChild(postre);
      });
    });
    btnTodos.addEventListener("click", () => {
      limpiarPantalla(contenedorPlatos);
      [...ensaladas, ...pastas, ...pizzas, ...postres].forEach((platillo) => {
        contenedorPlatos.appendChild(platillo);
      });
    });
  };

  const limpiarPantalla = (contenedor) => {
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
  };
  // Llama a la función principal
  platillos();
});

//creamos la funcion para nuestro formulario

document.addEventListener("DOMContentLoaded", function () {
  const contactoFormulario = document.getElementById("formulario");
  const name = document.getElementById("nombre");
  const apellido = document.getElementById("Apellidos");
  const gmailform = document.getElementById("correo");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  contactoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    if (name.value.trim() === "") {
      alert("Por favor ingrese su nombre");
      name.focus();
      isValid = false;
    } else if (apellido.value.trim() === "") {
      alert("Por favor ingrese su apellido");
      apellido.focus();
      isValid = false;
    } else if (!validateEmail(gmailform.value)) {
      alert("Por favor ingrese su email valido!");
      gmailform.focus();
      isValid = false;
    } else if (telefono.value.trim() === "") {
      alert("Por favor ingrese su telefono valido!");
      telefono.focus();
      isValid = false;
    } else if (mensaje.value.trim() === "") {
      alert("Por favor ingrese su mensaje valido!");
      mensaje.focus();
      isValid = false;
    }

    if (isValid) {
      contactoFormulario.reset();
      alert("Formulario enviado con exito!");
    }
  });
});

function validateEmail(gmailform) {
  const emailValido =
    /^[a-zA-Z0-9]+([._%+-]*[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return emailValido.test(gmailform);
}
