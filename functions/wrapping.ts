export function wrapping(gifts /* : Array<string> */): Array<string> {
    if (Array.isArray(gifts) === false)
      throw new Error('The param should be an array');
    if (gifts.some(e => typeof e !== 'string'))
      throw new Error('The content of array should be an string');
    let gift = [];
    let wrap = '*';
    for (let i = 0; i < gifts.length; i++) {
      let wrapped =
        wrap.repeat(gifts[i].length) +
        `**\n*${gifts[i]}*\n**` +
        wrap.repeat(gifts[i].length);
      gift.push(wrapped);
    }
    return gift;
  }