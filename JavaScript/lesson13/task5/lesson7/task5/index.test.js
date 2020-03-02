import { squareArray } from './index'

it('should return array with squared numbers', () => {
    const result = squareArray([1, 2, 3]);

    expect(result).toEqual([1, 4, 9]);
})
it('should return null if array is not array', () => {
    const result = squareArray('1,2,3');

    expect(result).toEqual(null);
})
it('should return NaN if one of arguments not a number', () => {
    const result = squareArray([1,2,3,'four']);

    expect(result).toEqual([1,4,9,NaN]);
})