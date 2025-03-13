function getAsciiValues(str) {
    let asciiValues = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let asciiValue = char.charCodeAt(0);
        asciiValues.push({ char: char, ascii: asciiValue });
    }
    return asciiValues;
}

// Test the function
console.log("Google")
console.log(getAsciiValues("taras.musiiko@gmail.com"))

console.log("Email")
console.log(getAsciiValues("tаras.musiiko@gmail.com"))
