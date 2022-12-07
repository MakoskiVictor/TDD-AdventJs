export function distributeGifts (packOfGifts: Array<string>, reindeers: Array<string>) {
    if(Array.isArray(packOfGifts) !== true) throw new Error('Params should be an array')
    if(Array.isArray(reindeers)  !== true) throw new Error('Params should be an array')
    if(packOfGifts.some(elem => typeof elem !== 'string')) throw new Error('The arrays shouls have only strings')
    if(reindeers.some(elem => typeof elem !== 'string')) throw new Error('The arrays shouls have only strings')
    let packWeight = 0
    packOfGifts.forEach(el => packWeight += el.length)
    let reindeerMaxWeight = 0
    reindeers.forEach(el => reindeerMaxWeight += (el.length * 2))
    const maxGiftsPacks = Math.floor(reindeerMaxWeight / packWeight)
    return maxGiftsPacks
  }