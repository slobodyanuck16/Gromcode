import { calc } from './calculator';

it('should return sum from expression', () => {
    const result = calc('8 + 4');
    expect(result).toEqual('8 + 4 = 12');
});

it('should return difference from expression', () => {
    const result = calc('8 - 4');
    expect(result).toEqual('8 - 4 = 4');
});

it('should return multiplication result from expression', () => {
    const result = calc('8 * 4');
    expect(result).toEqual('8 * 4 = 32');
});

it('should return division result from expression', () => {
    const result = calc('8 / 4');
    expect(result).toEqual('8 / 4 = 2');
});

it ('should return null if argument not a string', () => {
    const result = calc(84);

    expect(result).toEqual(null);
})