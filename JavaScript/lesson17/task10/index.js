
const a = 10;
const b = 5

export function calculator(a, b) {
    switch(this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return NaN;
    }
}


/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
// ...your code here

export const multiplier = calculator.bind({operation: '*'}, a, b);
console.log(multiplier());

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
// ...your code here

export const summator = calculator.bind({operation: '+'}, a, b);
console.log(summator());

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
// ...your code here

export const twice = calculator.bind({operation: '*'}, a, 2);
console.log(twice());