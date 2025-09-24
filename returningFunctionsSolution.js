let getDictionary = function (lang) {
    // English dictionary
    let englishDictionary = function (number) {
        switch (number) {
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            default: return "unknown";
        }
    };

    // French dictionary
    let frenchDictionary = function (number) {
        switch (number) {
            case 1: return "un";
            case 2: return "deux";
            case 3: return "trois";
            default: return "inconnu"; // "unknown" in French
        }
    };

    // Return the appropriate dictionary
    if (lang === 'E') {
        return englishDictionary;
    } else if (lang === 'F') {
        return frenchDictionary;
    }
};

// Bind the dictionaries
let english = getDictionary('E');
let french = getDictionary('F');

// DO NOT change the lines below
console.log(english(1)); // one
console.log(french(1));  // un
console.log(english(2)); // two
console.log(french(2));  // deux
console.log(english(3)); // three
console.log(french(3));  // trois
