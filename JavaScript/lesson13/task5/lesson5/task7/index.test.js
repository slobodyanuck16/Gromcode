import { increaser } from './index'

it('should increment the first argument by the value of the second argument',() => {
    const result = increaser(4, 2);

    expect(result).toEqual(6);
});
it('should return first argument if first arg > second argument',() => {
    const result = increaser(2, 4);

    expect(result).toEqual(2);
});