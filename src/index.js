// function sum(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }
// module.exports = multiply;

export function multiply(a, b) {
    return a * b;
}

export function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        result = isPrime
            ? `Число ${num} - простое число`
            : `Число ${num} - составное число`;
    } else if (num > 1000 || num <= 1 ) {
        result = "Данные неверны";
    }
    return result;
}

export function reversString(string) {
    let newStr = '';
    let n = string.length - 1;
    for (let i = 0; i <= n; i++) {
        newStr += string[n - i];
    }
    return newStr;
}