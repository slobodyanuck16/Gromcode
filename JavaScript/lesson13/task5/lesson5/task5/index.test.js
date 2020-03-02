import { getSum } from './index.js';

it('should get sum of numbers if arguments % 2 === 0' , () => {
    const result = getSum(2, 4);

    expect(result).toEqual(6);
})

it('if argument % 2 === 1 don"t sum this number', () => {
    const result = getSum(1,7);

    expect(result).toEqual(12);
})

it('should return null if all arguments are not a nubmer', () => {
    const result = getSum(2,2);

    expect(result).toEqual(2);
})