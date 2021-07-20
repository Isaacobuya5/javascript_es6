function sum(...numbers) {
    if (numbers.length === 1) return numbers;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(sum(2));
console.log(sum(2,4,3,5));

let numbers = [2,3,4,5];
console.log(sum(...numbers));