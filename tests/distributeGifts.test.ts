import { describe, expect, it } from "vitest";
import { distributeGifts } from '../functions/distributeGifts'
/*
You receive a Christmas gifts pack that Santa Claus wants to deliver to the children.
 Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name.
  Santa Claus's sleigh can only carry a weight limit.

Santa Claus also has a list of reindeer able to help him to deliver the gifts.
 Each reindeer has a maximum weight limit that it can carry.
  The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a gifts pack and a
 list of reindeer and returns the maximum number of gifts packs that Santa Claus can deliver. You can't split gifts packs.

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2
Things to keep in mind:

The gifts pack can't be splitted.
Gifts and reindeers' names length will always be greater than 0.
*/
describe('distributeGifts', () => {
  it('Should be a function', () => {
    expect(typeof distributeGifts).toBe('function')
  })
  it('Should throw an error if not receive two arrays', () => {
    expect(() => distributeGifts([], {})).toThrow(/array/)
    expect(() => distributeGifts(123, true)).toThrow(/array/)
    expect(() => distributeGifts("asd", [])).toThrow(/array/)
    expect(() => distributeGifts(true, [])).toThrow(/array/)
  })
  it('Should throw an error if not have strings inside ther array', () => {
    expect(() => distributeGifts(['asd'], [123])).toThrow(/string/)
    expect(() => distributeGifts([true], ['asd'])).toThrow(/string/)
    expect(() => distributeGifts(['asd'], [{name: "mauro"}])).toThrow(/string/)
    expect(() => distributeGifts([321], ['asd'])).toThrow(/string/)
    expect(() => distributeGifts(['asd'], [false])).toThrow(/string/)
  })
  it('Should return a number', () => {
    expect(typeof distributeGifts([],[])).toBe('number')
  })
  it('Should return an integer number', () => {
    expect(distributeGifts(['videogames', 'console'],['midu'])).toBe(0)
  })
  // TEST DEPRECATED
  /* it('Should return the pack weight', () => {
    expect(distributeGifts(["book", "doll", "ball"],[])).toBe(12)
  }) */
  // TEST DEPRECATED
  /* it('Should return the reindeers max weight', () => {
    expect(distributeGifts([],["dasher", "dancer"])).toBe(24)
  }) */
  it('Should return the maximum number of gifts packs that Santa Claus can deliver', () => {
    expect(distributeGifts(["book", "doll", "ball"],["dasher", "dancer"])).toBe(2)
  })
})