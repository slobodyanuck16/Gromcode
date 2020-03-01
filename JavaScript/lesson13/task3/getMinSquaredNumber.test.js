import getMinSquaredNumber from './getMinSquaredNumber.js'

it ('should return null (from []' , () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
})

it ('should return null (from ""' , () => {
    const result = getMinSquaredNumber("");

    expect(result).toEqual(null);
})

it ('should return squared min module number from array' , () => {
    const result = getMinSquaredNumber([-2,-3,4,6,-10]);

    expect(result).toEqual(4);
})