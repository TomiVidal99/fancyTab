let languague;
let lang;

function defineTextLanguague() {
  lang = localStorage.getItem("lang");
  if (lang) {
    switch (lang) {
      case "es":
        languague = {
          weather: "&lang=es",
          bubbleAnimation: "Burbujas",
          treeAnimation: "Árboles",
          noneAnimation: "Ninguna",
          weatherPlaceholder: "Clima de la ciudad...",
          imagePlaceholder: "Fondo de pantalla",
          creatorsStamp: "Por: Tomás Vidal",
          clockSwitchLabel: "¿Activar animación del reloj?",
          animationsSelectorLabel: "Seleccione una animación:",
          clockHoursSizeLabel: "Horas",
          clockMinutesSizeLabel: "Minutos",
          clockSecondsSizeLabel: "Segundos",
          clockThicknessLabel: "Grosor",
          fontSizeLabel: "Tamaños de las fuentes",
          clockFontSizeLabel: "Hora",
          dateFontSizeLabel: "Fecha",
          clocksColorSelectionLabel: "Selección de los colores del reloj",
          clockSettingsTitle: "Configuración del reloj",
          numbersColorTitle: "Colores de la hora, fecha y descripción",
          timeColorLabel: "Color de la hora",
          dateColorLabel: "Color de la fecha",
          descriptionColorLabel: "Color de la descripción",
          weatherDescriptionLabel: "Activar la descripción del clima?: ",
          dateFormatSelector: "Seleccionar formato de la fecha:",
          format_1: "lunes, 13 de enero de 2020",
          format_2: "lun., 13 ene. 2020",
          format_3: "L, 13 ene. 2020",
          format_4: "L, 13 E 2020",
          format_5: "lunes, 13/1/2020",
          format_6: "lun., 13/1/2020",
          format_7: "L, 13/1/2020",
          format_8: "13/1/2020",
          weatherDescriptionFontSizeLabel: "Descripción"
        };
        break;
      case "en":
        languague = {
          weather: "&lang=en",
          bubbleAnimation: "Bubbles",
          treeAnimation: "Trees",
          noneAnimation: "None",
          weatherPlaceholder: "City's weather...",
          imagePlaceholder: "Background image",
          creatorsStamp: "By: Tomás Vidal",
          clockSwitchLabel: "Activate clock's animation?",
          animationsSelectorLabel: "Select an animation:",
          clockHoursSizeLabel: "Hours",
          clockMinutesSizeLabel: "Minutes",
          clockSecondsSizeLabel: "Seconds",
          clockThicknessLabel: "Thickness",
          fontSizeLabel: "Font sizes",
          clockFontSizeLabel: "Time",
          dateFontSizeLabel: "Date",
          clocksColorSelectionLabel: "Selection for the clock's colors",
          clockSettingsTitle: "Clock's settings",
          numbersColorTitle: "Time and date colors",
          timeColorLabel: "Time color",
          dateColorLabel: "Date color",
          descriptionColorLabel: "Weather description color",
          weatherDescriptionLabel: "Activate weather description?: ",
          dateFormatSelector: "Select date format:",
          format_1: "Monday, January 13, 2020",
          format_2: "Mon, Jan 13, 2020",
          format_3: "M, Jan 13, 2020",
          format_4: "M, J 13, 2020",
          format_5: "Monday, 1/13/2020",
          format_6: "Mon, 1/13/2020",
          format_7: "M, 1/13/2020",
          format_8: "1/13/2020",
          weatherDescriptionFontSizeLabel: "Description"
        };
        break;
    }
  } else {
    localStorage.setItem("lang", "es");
    languague = {
      weather: "&lang=es",
      bubbleAnimation: "Burbujas",
      treeAnimation: "Árboles",
      noneAnimation: "Ninguna",
      weatherPlaceholder: "Clima de la ciudad...",
      imagePlaceholder: "Fondo de pantalla",
      creatorsStamp: "Por: Tomás Vidal",
      clockSwitchLabel: "¿Activar animación del reloj?",
      animationsSelectorLabel: "Seleccione una animación:",
      clockHoursSizeLabel: "Horas",
      clockMinutesSizeLabel: "Minutos",
      clockSecondsSizeLabel: "Segundos",
      clockThicknessLabel: "Grosor",
      fontSizeLabel: "Tamaños de las fuentes",
      clockFontSizeLabel: "Hora",
      dateFontSizeLabel: "Fecha",
      clocksColorSelectionLabel: "Selección de los colores del reloj",
      clockSettingsTitle: "Configuración del reloj",
      numbersColorTitle: "Colores de la hora, fecha y descripción",
      timeColorLabel: "Color de la hora",
      dateColorLabel: "Color de la fecha",
      descriptionColorLabel: "Color de la descripción",
      weatherDescriptionLabel: "Activar la descripción del clima?: ",
      dateFormatSelector: "Seleccionar formato de la fecha:",
      format_1: "lunes, 13 de enero de 2020",
      format_2: "lun., 13 ene. 2020",
      format_3: "L, 13 ene. 2020",
      format_4: "L, 13 E 2020",
      format_5: "lunes, 13/1/2020",
      format_6: "lun., 13/1/2020",
      format_7: "L, 13/1/2020",
      format_8: "13/1/2020",
      weatherDescriptionFontSizeLabel: "Descripción"
    };
  }
}

defineTextLanguague();
