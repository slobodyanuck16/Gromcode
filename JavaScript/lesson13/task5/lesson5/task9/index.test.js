import { findDivCount } from './index'

it('should return values of numbers which % (third argument) === 0', () => {
    const result = findDivCount(1, 4, 2);

    expect(result).toEqual(2);
});
it('should return null if third argument === 0', () => {
    const result = findDivCount(1, 4, 0);

    expect(result).toEqual(0);
});
it('should return second argument if first argument > second argument', () => {
    const result = findDivCount(4, 1, 2);

    expect(result).toEqual(1);
});