// array methods
function reverseStr(s) {
    return s.split("").reverse().join("")
}

// for loop
function reverseS(str) {
    let res = ""

    for (let a = 0; a < str.length; a++) {
        const v = str[i];
        res = v + res
    }
    return res
}

// reduce array method
function reverseString(str) {
    return str.split("").reduce((output, char) => {
        output = char + output;
        return output
    }, "")
}

// time complexity is o(n), space complexity is o(n)