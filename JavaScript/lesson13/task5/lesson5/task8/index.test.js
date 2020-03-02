import { sum, compareSums } from './index'

it('should get sum of numbers', () => {
    const result = sum(4, 5);

    expect(result).toEqual(9);
});

it('should return true if sum of 1,2 arguments > sum of 3,4 arguments', () => {
    const result = compareSums(4, 5, 2, 3);

    expect(result).toEqual(true);
});

it('should return false if sum of 1,2 arguments < sum of 3,4 arguments', () => {
    const result = compareSums(2, 3, 4, 5);

    expect(result).toEqual(false);
});