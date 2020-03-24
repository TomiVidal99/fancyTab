function handleLanguage(langObj) {
    // this function is for defining the documents text depending on the obj given     
    for (let item in langObj) {
        if (document.getElementById(item)) {
            document.getElementById(item).innerHTML = langObj[item];
            document.getElementById(item).placeholder = langObj[item];
        } 
    }

    // handle language selection for the options of select tag of the date's format
    for (let i = 1; i < 9; i++) {
        let s = "format_" + i.toString();
        document.getElementById(s).innerHTML = langObj[s];
    }
}