function handleTimeDisplay(time, color, size) {
    // this function will handle the changes inside the div of the time
    const timeElement = document.getElementById("time_display");
    if (time  && timeElement) {
        timeElement.innerHTML = time;
        timeElement.style.color = color;
        timeElement.style.fontSize = size + "vh";
        /* console.log("Font size was set to: ", size); */
    }
}

function handleDateDisplay(date, color, size) {
    // this function will handle the changes inside the div of the date
    const dateElement = document.getElementById("date_display");
    if (date  && dateElement) {
        dateElement.innerHTML = date;
        dateElement.style.color = color;
        dateElement.style.fontSize = size + "vh";
    }
}

function handleDescriptionDisplay(description, color, size) {
    // this function will handle the changes inside the div of the weather description
    const descriptionElement = document.getElementById("weather_description_display");
    if (description  && descriptionElement) {
        descriptionElement.innerHTML = description;
        descriptionElement.style.color = color;
        descriptionElement.style.fontSize = size + "vh";
    }
}