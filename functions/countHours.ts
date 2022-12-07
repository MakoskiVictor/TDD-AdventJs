export function countHours (year: string, holidays: Array<string>) {
    if(typeof year !== 'string') throw new Error('Year should be an string')
    if(Array.isArray(holidays) === false) throw new Error('Holidays should be an array')
    if(holidays.some(elem => typeof elem !== 'string')) throw new Error('Holidays should contain a string')
    const mapDateToDay = holidays.map(date => new Date(`${date}, ${year}`).getDay())
    const filteredHolidaysDays = mapDateToDay.filter(day => day !== 0 && day !== 6)
    const extraHoursToWork = filteredHolidaysDays.length * 2
    return extraHoursToWork
}