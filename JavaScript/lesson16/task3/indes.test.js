import { createArrayOfFunctions } from './index';

it('should return 1', () => {
    const result = createArrayOfFunctions(1)[0];

    expect(result).toEqual(1);
});

it('should return null if argument not a number', () => {
    const result = createArrayOfFunctions('2');

    expect(result).toEqual(null);
})

it('should return empty array, if argument is not defined', () => {
    const result = createArrayOfFunctions();

    expect(result).toEqual([]);
})