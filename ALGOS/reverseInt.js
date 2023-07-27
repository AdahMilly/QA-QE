function reverseInt(n) {
    let reversed = n.toString().split("").reverse().join("")
    reversed = parseInt(reversed)

    if (n < 0) {
        return reversed * -1
    }

    return reversed
}

console.log(reverseInt(1234))

// time complexity is o(log n), if input increases by factor 10, we do one more operation.