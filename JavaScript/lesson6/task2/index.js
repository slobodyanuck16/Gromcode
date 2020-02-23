const numbers = [1, 2, 3, 4, 5, 6]

function getSum(numbers) {
    let sumOfNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers += numbers[i];
    if (!Array.isArray(numbers)) {
            return null;
        }
    }
    return sumOfNumbers;

}