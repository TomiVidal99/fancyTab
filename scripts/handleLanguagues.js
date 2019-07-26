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
                    "creatorsStamp": "Por: Tomás Vidal"
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
                    "creatorsStamp": "By: Tomás Vidal"
                }
            break;    
        }
    } else {
        localStorage.setItem("lang", 'es');
        languague = {
            "weather": '&lang=es',
            "bubbleAnimation": "Burbujas",
            "treeAnimation": "Árboles",
            "noneAnimation": "Ninguna",
            "weatherPlaceholder": "Clima de la ciudad...",
            "imagePlaceholder": "Fondo de pantalla",
            "creatorsStamp": "Por: Tomás Vidal"
        }
    }    
}

defineTextLanguague();

