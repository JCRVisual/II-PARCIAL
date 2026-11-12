export const getData = (page) => {
    let contextData = {};

    switch (page) {
        default:
            contextData = { ...contextData };
    }

    return { ...contextData, ...getAllPageContext() };
};

function getAllPageContext() {
    return {

        nombreHotel: "Paraíso Playa",
        textoReserva: "Reservar Ahora",

        menu: [
            { nombre: "Inicio", enlace: "#inicio" },
            { nombre: "Precios", enlace: "#precios" },
            { nombre: "Contacto", enlace: "#contacto" }
        ],

        imagenHero: "https://picsum.photos/1920/1080?random=1",
        tituloHero: "Bienvenido al Paraíso",
        subtituloHero: "Descubre la mejor playa de Honduras",
        descripcionHero: "Experimenta el lujo tropical en nuestro exclusivo hotel frente al mar. Arena blanca, aguas cristalinas y servicios de primera clase te esperan.",
        botonExplorar: "Explorar Ahora",
        botonVideo: "Ver Video",

        tituloPrecios: "Planes y Tarifas",
        subtituloPrecios: "Elige el plan perfecto para tus vacaciones",

        planes: [
            {
                nombre: "Escapada Básica",
                moneda: "L",
                precio: "2,500",
                periodo: "/noche",
                clase: "",
                destacado: false,
                caracteristicas: [
                    "Habitación Estándar",
                    "Desayuno incluido",
                    "WiFi gratis",
                    "Acceso a la playa",
                    "Estacionamiento"
                ],
                boton: "Seleccionar Plan"
            },
            {
                nombre: "Experiencia Premium",
                moneda: "L",
                precio: "4,200",
                periodo: "/noche",
                clase: "featured",
                destacado: true,
                etiqueta: "Más Popular",
                caracteristicas: [
                    "Habitación Deluxe con vista al mar",
                    "Desayuno y cena incluidos",
                    "WiFi de alta velocidad",
                    "Acceso VIP a la playa",
                    "Spa y masajes (2 sesiones)",
                    "Actividades acuáticas"
                ],
                boton: "Seleccionar Plan"
            },
            {
                nombre: "Suite de Lujo",
                moneda: "L",
                precio: "6,800",
                periodo: "/noche",
                clase: "",
                destacado: false,
                caracteristicas: [
                    "Suite Presidencial frente al mar",
                    "Todas las comidas incluidas",
                    "Minibar premium",
                    "Mayordomo personal 24/7",
                    "Spa ilimitado",
                    "Todas las actividades incluidas",
                    "Transfer aeropuerto"
                ],
                boton: "Seleccionar Plan"
            }
        ],

        tituloContacto: "Contáctanos",
        subtituloContacto: "¿Tienes alguna pregunta? Estamos aquí para ayudarte",
        tituloInformacion: "Información de Contacto",

        informacionContacto: [
            {
                icono: "📞",
                titulo: "Teléfonos",
                detalles: [
                    "+504 2234-5678",
                    "+504 9876-5432"
                ]
            },
            {
                icono: "✉️",
                titulo: "Email",
                detalles: [
                    "info@paraisoplaya.hn",
                    "reservas@paraisoplaya.hn"
                ]
            },
            {
                icono: "📍",
                titulo: "Dirección",
                detalles: [
                    "Km 15 Carretera a Tela",
                    "Atlántida, Honduras"
                ]
            },
            {
                icono: "⏰",
                titulo: "Horarios",
                detalles: [
                    "Lunes a Domingo",
                    "24 horas"
                ]
            }
        ],

        asuntos: [
            { valor: "", nombre: "Selecciona un asunto" },
            { valor: "reservacion", nombre: "Reservación" },
            { valor: "informacion", nombre: "Información General" },
            { valor: "eventos", nombre: "Eventos y Bodas" },
            { valor: "quejas", nombre: "Quejas o Sugerencias" },
            { valor: "otro", nombre: "Otro" }
        ],

        botonEnviar: "Enviar Mensaje",

        descripcionFooter: "Tu destino de lujo frente a la mejor playa de Honduras. Experiencias inolvidables te esperan.",

        seccionesFooter: [
            {
                titulo: "Contacto",
                elementos: [
                    "📞 +504 2234-5678",
                    "📱 +504 9876-5432",
                    "✉️ info@paraisoplaya.hn",
                    "📍 Km 15 Carretera a Tela",
                    "Atlántida, Honduras"
                ]
            },
            {
                titulo: "Horarios",
                elementos: [
                    "Check-in: 3:00 PM",
                    "Check-out: 12:00 PM",
                    "Restaurante: 6:00 AM - 11:00 PM",
                    "Recepción: 24/7"
                ]
            }
        ],

        redesSociales: [
            { nombre: "Facebook", enlace: "#", clase: "facebook" },
            { nombre: "Instagram", enlace: "#", clase: "instagram" },
            { nombre: "Twitter", enlace: "#", clase: "twitter" },
            { nombre: "YouTube", enlace: "#", clase: "youtube" }
        ],

        copyright: "© 2025 Hotel Paraíso Playa. Todos los derechos reservados."
    };
}