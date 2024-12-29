const translations = {
  es: {
    // Navigation
    home: "Inicio",
    aboutUs: "Sobre Nosotros",
    menuNav: "Menú",
    chef: "Chef",
    contact: "Contactos",

    // Header & Welcome
    welcomeHeader: "Bienvenido!",
    welcomeText: "Bienvenido",
    restaurantName: "Ristorante Turilli",
    aboutText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium magni numquam quod voluptatibus! Totam, modi iure, vero aut deserunt incidunt facere rem fugiat, minus a esse consequuntur beatae placeat.",
    contactButton: "Contactar",

    // Menu Section
    menuText: "Platillos Populares",
    menuButton: "Ir a nuestro Menú",
    allButton: "Todos",
    saladsButton: "Ensaladas",
    pastaButton: "Pastas",
    pizzaButton: "Pizza",
    dessertsButton: "Postres",

    // Food Start Section
    foodStart: "Comida italiana para empezar el día",
    startDay: "Empieza tu día con un buen café",
    orderNowButton: "Ordena ahora",

    // Chef Section
    chefTitle: "Chef ejecutivo",
    chefName: "Pedro Olortegui",
    chefBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem laboriosam. Non quis quisquam animi voluptas cumque expedita laborum aliquam porro repudiandae ut, iste quas, distinctio cum minima, itaque ducimus!",

    // Contact Form
    contactHeader: "Contáctenos",
    nameLabel: "Nombre",
    lastNameLabel: "Apellidos",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    messageLabel: "Mensaje",
    sendButton: "Enviar",

    // Footer
    address: "Dirección",
    addressText: "Calle Siempre Viva",
    specialDays: "Días especiales",
    specialDaysText: "Sábado y domingos 7am a 11pm",
    hours: "Horarios",
    hoursText: "Lunes - Domingo 7am -11pm",
    news: "Noticias",
    subscribe: "Suscríbete para recibir más información",
    subscribeButton: "Suscribirse",
    rights:
      "Todos los derechos reservados &copy2024; Desarrollado por Pedro Olortegui Mendieta",
  },

  en: {
    // Navigation
    home: "Home",
    aboutUs: "About Us",
    menuNav: "Menu",
    chef: "Chef",
    contact: "Contact",

    // Header & Welcome
    welcomeHeader: "Welcome!",
    welcomeText: "Welcome",
    restaurantName: "Ristorante Turilli",
    aboutText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium magni numquam quod voluptatibus! Totam, modi iure, vero aut deserunt incidunt facere rem fugiat, minus a esse consequuntur beatae placeat.",
    contactButton: "Contact Us",

    // Menu Section
    menuText: "Popular Dishes",
    menuButton: "Go to our Menu",
    allButton: "All",
    saladsButton: "Salads",
    pastaButton: "Pasta",
    pizzaButton: "Pizza",
    dessertsButton: "Desserts",

    // Food Start Section
    foodStart: "Italian food to start the day",
    startDay: "Start your day with a good coffee",
    orderNowButton: "Order now",

    // Chef Section
    chefTitle: "Executive Chef",
    chefName: "Pedro Olortegui",
    chefBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem laboriosam. Non quis quisquam animi voluptas cumque expedita laborum aliquam porro repudiandae ut, iste quas, distinctio cum minima, itaque ducimus!",

    // Contact Form
    contactHeader: "Contact Us",
    nameLabel: "Name",
    lastNameLabel: "Last Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    messageLabel: "Message",
    sendButton: "Send",

    // Footer
    address: "Address",
    addressText: "Evergreen Terrace",
    specialDays: "Special Days",
    specialDaysText: "Saturday and Sunday 7am to 11pm",
    hours: "Hours",
    hoursText: "Monday - Sunday 7am -11pm",
    news: "News",
    subscribe: "Subscribe to receive more information",
    subscribeButton: "Subscribe",
    rights:
      "All rights reserved &copy2024; Developed by Pedro Olortegui Mendieta",
  },

  it: {
    // Navigation
    home: "Home",
    aboutUs: "Chi Siamo",
    menuNav: "Menu",
    chef: "Chef",
    contact: "Contatti",

    // Header & Welcome
    welcomeHeader: "Benvenuti!",
    welcomeText: "Benvenuti",
    restaurantName: "Ristorante Turilli",
    aboutText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusantium magni numquam quod voluptatibus! Totam, modi iure, vero aut deserunt incidunt facere rem fugiat, minus a esse consequuntur beatae placeat.",
    contactButton: "Contattaci",

    // Menu Section
    menuText: "Piatti Popolari",
    menuButton: "Vai al Menu",
    allButton: "Tutti",
    saladsButton: "Insalate",
    pastaButton: "Pasta",
    pizzaButton: "Pizza",
    dessertsButton: "Dolci",

    // Food Start Section
    foodStart: "Cucina italiana per iniziare la giornata",
    startDay: "Inizia la giornata con un buon caffè",
    orderNowButton: "Ordina ora",

    // Chef Section
    chefTitle: "Chef Esecutivo",
    chefName: "Pedro Olortegui",
    chefBio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem laboriosam. Non quis quisquam animi voluptas cumque expedita laborum aliquam porro repudiandae ut, iste quas, distinctio cum minima, itaque ducimus!",

    // Contact Form
    contactHeader: "Contattaci",
    nameLabel: "Nome",
    lastNameLabel: "Cognome",
    emailLabel: "Email",
    phoneLabel: "Telefono",
    messageLabel: "Messaggio",
    sendButton: "Invia",

    // Footer
    address: "Indirizzo",
    addressText: "strada sempre viva",
    specialDays: "Giorni Speciali",
    specialDaysText: "Sabato e Domenica dalle 7 alle 23",
    hours: "Orari",
    hoursText: "Lunedì - Domenica 7-23",
    news: "Notizie",
    subscribe: "Iscriviti per ricevere più informazioni",
    subscribeButton: "Iscriviti",
    rights:
      "Tutti i diritti riservati &copy2024; Sviluppato da Pedro Olortegui Mendieta",
  },
};

function changeLanguage(language) {
  const elementsToTranslate = [
    // Navigation
    "home",
    "aboutUs",
    "menuNav",
    "chef",
    "contact",
    // Header & Welcome
    "welcomeHeader",
    "welcomeText",
    "restaurantName",
    "aboutText",
    "contactButton",
    // Menu Section
    "menuText",
    "menuButton",
    "allButton",
    "saladsButton",
    "pastaButton",
    "pizzaButton",
    "dessertsButton",
    // Food Start Section
    "foodStart",
    "startDay",
    "orderNowButton",
    // Chef Section
    "chefTitle",
    "chefName",
    "chefBio",
    // Contact Form
    "contactHeader",
    "nameLabel",
    "lastNameLabel",
    "emailLabel",
    "phoneLabel",
    "messageLabel",
    "sendButton",
    // Footer
    "address",
    "addressText",
    "specialDays",
    "specialDaysText",
    "hours",
    "hoursText",
    "news",
    "subscribe",
    "subscribeButton",
    "rights",
  ];

  elementsToTranslate.forEach((id) => {
    const element = document.getElementById(id);
    if (element && translations[language][id]) {
      element.textContent = translations[language][id];
    }
  });

  // Update placeholders for form inputs
  const placeholders = {
    nombre: translations[language].nameLabel,
    Apellidos: translations[language].lastNameLabel,
    correo: translations[language].emailLabel,
    telefono: translations[language].phoneLabel,
    mensaje: translations[language].messageLabel,
    email: translations[language].emailLabel,
  };

  Object.entries(placeholders).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) {
      element.placeholder = text;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("language-select");
  const flagImg = document.createElement("img");
  flagImg.className = "lang-select-flag";
  select.parentNode.insertBefore(flagImg, select);

  function updateFlag() {
    const selectedOption = select.options[select.selectedIndex];
    flagImg.src = selectedOption.getAttribute("data-flag");
    flagImg.alt = selectedOption.text + " flag";
    changeLanguage(select.value);
  }

  select.addEventListener("change", updateFlag);
  updateFlag(); // Initial flag set and language change
});
