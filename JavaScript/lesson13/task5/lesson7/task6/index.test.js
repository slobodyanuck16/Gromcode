import { reverseArray } from './index';

it('should return reverse array', () => {
    const result = reverseArray([1, 2, 3]);

    expect(result).toEqual([3, 2, 1]);
})
it('should return null if array is not array', () => {
    const result = reverseArray('1,2,3');

    expect(result).toEqual(null);
})
it('should create new array', () => {
    const result = reverseArray([1,2,3]);

    expect(result).toEqual([3,2,1]);
})