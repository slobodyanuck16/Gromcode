import { getAdults } from './index'

it('should return obj with names over 18', () => {
    const result = getAdults({'Nikita': 18,'Artem':21,'Vlad':99,'Egor':12 });

    expect(result).toEqual({ 'Nikita': 18,'Artem':21,'Vlad':99});
})
it('if the age is less than 18, do not write the name in the object', () => {
    const result = getAdults({'Nikita': 18,'Artem':21,'Vlad':99,'Egor':12 });

    expect(result).toEqual({ 'Nikita': 18,'Artem':21,'Vlad':99});
})