function firstNonRepeatingLetter(s) {
    var result
    const charSet = new Set();

    for (const char of s) {
        if (charSet.has(char)) {
            result = char
        }
        charSet.add(char)
    }
    console.log(charSet)
}

firstNonRepeatingLetter("stress")