function defineStoredValues() {

    // define stored values from localstorage
    for (let item in initialValues) {
        // save previous state
        let newVal = localStorage.getItem(item);
        let i = document.getElementById(item);
        if (newVal) {
            initialValues[item] = newVal;
        }
        if (item === "animationsIndex") {
            const i = parseInt(initialValues[item]);
            switch(i) {
                case 1:
                    console.log("Bubbles!");
                     // bubbles animation
                    createInitialBubbles();
                break;
                case 2:
                    console.log("refractal trees!");
                    // trees animation
                    defineTreeSpots();
                    createTreeLog();
                break;
            }
        }
        if (i.type === "range") {
            i.value = parseInt(initialValues[item]);
            // add event listeners
            i.onchange = () => {
                localStorage.setItem(item, i.value.toString());
            };
            i.oninput = () => {
                initialValues[item] = i.value.toString();
            };
        } else if (i.type === "color") {
            i.value = initialValues[item];
            // add event listeners
            i.onchange = () => {
                initialValues[item] = i.value.toString();
                localStorage.setItem(item, initialValues[item]);
            };
        } else if (i.type === "select-one") {
            i.selectedIndex = initialValues[item];
            // add event listeners 
            i.onchange = () => {
                initialValues[item] = i.selectedIndex.toString();
                localStorage.setItem(item, initialValues[item]);
            }
        } else  if (i.type === "checkbox") {
            if (initialValues[item] === "true") {
                i.checked = true;
            } else {
                i.checked = false;
            }
            // add event listeners
            i.onclick = () => {
                localStorage.setItem(item, i.checked.toString());
            }
        } else {
            console.log("error")
        }
    }
    
    // selected index of language select
    if (browserLang == "es") {
        document.getElementById("language").selectedIndex = 0;
    } else if (browserLang == "en") {
        document.getElementById("language").selectedIndex = 1;
    }

}

function handleValuesChange(key, newValue) {
    // if the key given exists inside our object of values then replace it's value for the new one and save the changes
    initialValues[key] = newValue;
    localStorage.setItem(key, newValue);
}


