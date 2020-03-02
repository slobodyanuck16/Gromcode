import { pickProps } from './index'

it('should return onject only with the keys that are in the array', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);

    expect(result).toEqual({ a: 1, c: 3 })
});

it('if the key value is not in the array do not write to the object', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);

    expect(result).toEqual({ a: 1, c: 3 })
});