// reads the same forward as backwards
// return str===str.split("").reverse().join("")
function palindrome(str) {
    str = str.toLowerCase()
    const reversedV = str.split("").reverse().join("")
    if (str === reversedV) {
        return true
    } else {
        return false
    }
}
palindrome("racecar")

// time complexity of o(n), we have to go over every character in input string to reverse string