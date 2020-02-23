const numbers = [3, 4, 5, 6, 7, 8];

function squareArray(numbers) {
    let sumOfNumbers = [];
    for (let i = [0]; i < numbers.length; i++) {
        sumOfNumbers += (numbers[i] * numbers[i]);
        console.log(sumOfNumbers);
    if (!Array.isArray(numbers)) {
            return null;
        }
    }
    return sumOfNumbers;
}