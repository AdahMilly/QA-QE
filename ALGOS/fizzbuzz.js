// for loop
for (a = 1; a < 100; a++) {
    if (a % 15 === 0) {
        console.log("FIZZBUZZ")
    } else if (a % 3 === 0) {
        console.log("FIZZ")
    } else if (a % 5 === 0) {
        console.log("BUZZ")
    } else (
        console.log(a)
    )
}

// whileloop

let a = 1
while (a < 20) {
    a++;
    if (a % 15 === 0) {
        console.log("FIZZBUZZ")
    } else if (a % 3 === 0) {
        console.log("FIZZ")
    } else if (a % 5 === 0) {
        console.log("BUZZ")
    } else (
        console.log(a)
    )
}

// do while
let b = 1;
do {
    if (b % 15 === 0) {
        console.log("FIZZBUZZ")
    } else if (b % 3 === 0) {
        console.log("FIZZ")
    } else if (b % 5 === 0) {
        console.log("BUZZ")
    } else (
        console.log(b)
    )
    b++
}
while (b < 100)