import { createLogger } from './index'

it('should return result', () => {
    const calculator = createLogger();
    let result = calculator.getMemo();

    expect(result).toEqual(0);
});

it('should return sum', () => {
    const calculator = createLogger();
    calculator.add(25)
    let result = calculator.getMemo();

    expect(result).toEqual(25);
});

it('should return decrease', () => {
    const calculator = createLogger();
    calculator.decrease(20)
    let result = calculator.getMemo();

    expect(result).toEqual(-20);
});
it('should return reset calculator', () => {
    const calculator = createLogger();
    calculator.reset()
    let result = calculator.getMemo();

    expect(result).toEqual(0);
});