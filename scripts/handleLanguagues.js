let languague;
let lang;

function defineTextLanguague() {
    lang = localStorage.getItem("lang");
    if (lang) {
        switch (lang) {
            case "es":
                languague = {
                    "weather": "&lang=es",
                    "bubbleAnimation": "Burbujas",
                    "treeAnimation": "Árboles",
                    "noneAnimation": "Ninguna",
                    "weatherPlaceholder": "Clima de la ciudad...",
                    "imagePlaceholder": "Fondo de pantalla",
                    "creatorsStamp": "Por: Tomás Vidal",
                    "clockSwitchLabel": "¿Activar animación del reloj?",
                    "animationsSelectorLabel": "Seleccione una animación:",
                    "clockHoursSizeLabel": "Horas",
                    "clockMinutesSizeLabel": "Minutos",
                    "clockSecondsSizeLabel": "Segundos",
                    "clockThicknessLabel": "Grosor",
                    "fontSizeLabel": "Tamaños de las fuentes",
                    "clockFontSizeLabel": "Hora",
                    "dateFontSizeLabel": "Fecha",
                    "clocksColorSelectionLabel": "Selección de los colores del reloj",
                    "clockSettingsTitle": "Configuración del reloj",
                    "numbersColorTitle": "Colores de la hora, fecha y descripción",
                    "timeColorLabel": "Color de la hora",
                    "dateColorLabel": "Color de la fecha",
                    "descriptionColorLabel": "Color de la descripción",
                    "weatherDescriptionLabel": "Activar la descripción del clima?: "
                }
            break;
            case "en":
                languague = {
                    "weather": '&lang=en',
                    "bubbleAnimation": "Bubbles",
                    "treeAnimation": "Trees",
                    "noneAnimation": "None",
                    "weatherPlaceholder": "City's weather...",
                    "imagePlaceholder": "Background image",
                    "creatorsStamp": "By: Tomás Vidal",
                    "clockSwitchLabel": "Activate clock's animation?",
                    "animationsSelectorLabel": "Select an animation:",
                    "clockHoursSizeLabel": "Hours",
                    "clockMinutesSizeLabel": "Minutes",
                    "clockSecondsSizeLabel": "Seconds",
                    "clockThicknessLabel": "Thickness",
                    "fontSizeLabel": "Font sizes",
                    "clockFontSizeLabel": "Time",
                    "dateFontSizeLabel": "Date",
                    "clocksColorSelectionLabel": "Selection for the clock's colors",
                    "clockSettingsTitle": "Clock's settings",
                    "numbersColorTitle": "Time and date colors",
                    "timeColorLabel": "Time color",
                    "dateColorLabel": "Date color",
                    "descriptionColorLabel": "Weather description color",
                    "weatherDescriptionLabel": "Activate weather description?: "
                }
            break;    
        }
    } else {
        localStorage.setItem("lang", 'es');
        languague = {
            "weather": "&lang=es",
            "bubbleAnimation": "Burbujas",
            "treeAnimation": "Árboles",
            "noneAnimation": "Ninguna",
            "weatherPlaceholder": "Clima de la ciudad...",
            "imagePlaceholder": "Fondo de pantalla",
            "creatorsStamp": "Por: Tomás Vidal",
            "clockSwitchLabel": "¿Activar animación del reloj?",
            "animationsSelectorLabel": "Seleccione una animación:",
            "clockHoursSizeLabel": "Horas",
            "clockMinutesSizeLabel": "Minutos",
            "clockSecondsSizeLabel": "Segundos",
            "clockThicknessLabel": "Grosor",
            "fontSizeLabel": "Tamaños de las fuentes",
            "clockFontSizeLabel": "Hora",
            "dateFontSizeLabel": "Fecha",
            "clocksColorSelectionLabel": "Selección de los colores del reloj",
            "clockSettingsTitle": "Configuración del reloj",
            "numbersColorTitle": "Colores de la hora, fecha y descripción",
            "timeColorLabel": "Color de la hora",
            "dateColorLabel": "Color de la fecha",
            "descriptionColorLabel": "Color de la descripción",
            "weatherDescriptionLabel": "Activar la descripción del clima?: "
        }
    }    
}

defineTextLanguague();

