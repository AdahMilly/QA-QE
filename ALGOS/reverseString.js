// array methods
function reverseStr(s) {
    return s.split("").reverse().join("")
}
console.log(reverseStr("amilo"))
// for loop
function reverseS(str) {
    let res = ""

    for (let a = 0; a < str.length; a++) {
        const v = str[a];
        res = v + res
    }
    return res
}
console.log(reverseS("desky"))

// reduce array method
function reverseString(str) {
    return str.split("").reduce((output, char) => {
        output = char + output;
        return output
    }, "")
}
console.log(reverseString("okinyo"))
// time complexity is o(n), space complexity is o(n)