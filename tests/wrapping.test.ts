import { describe, expect, it } from 'vitest';
import { wrapping } from '../functions/wrapping'
/*
The elves bought a gift-wrapping machine this year. But it's not programmed! We need to create an algorithm
 that helps it in the task.

The machine receives an array of gifts. Each gift is a string.
 We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the * symbol, and in order to wrap a gift, you need to place it surrounding the string.
 For example:

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
 [
  "******\n*book*\n******",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] 
As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps,
 the corners are also covered with wrapping paper.

Note:The \n represents a line break.

Watch out! Make sure you put the right number of * symbols to wrap completely the string.

And do not mutate the original array!
*/

describe('wrapping', (): void => {
  it('Should be a function', (): void => {
    expect(typeof wrapping).toBe('function');
  });
  it('Should throw an error if no recive an arrar for params', (): void => {
    expect(() => wrapping({})).toThrow(/array/);
    expect(() => wrapping(true)).toThrow(/array/);
    expect(() => wrapping('Manuela')).toThrow(/array/);
    expect(() => wrapping(1234)).toThrow(/array/);
  });
  it('Should throw an error if the elements of array are not string', (): void => {
    expect(() => wrapping(['Manu', 12, 'keyboard'])).toThrow(/string/);
    expect(() => wrapping(['Manu', false, 'keyboard'])).toThrow(/string/);
    expect(() => wrapping(['Manu', { name: 'John' }, 'keyboard'])).toThrow(
      /string/
    );
    expect(() => wrapping(['Manu', ['Excalubur'], 'keyboard'])).toThrow(
      /string/
    );
  });
  it('Should return an array', (): void => {
    expect(Array.isArray(wrapping([]))).toBe(true);
  });
  it('Should return an array with the words and a pack of *', () => {
    expect(wrapping(['cat', 'game', 'socks'])).toStrictEqual([
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ]);
  });
});
