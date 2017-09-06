import reducer from '../reducer'
import data from './mock'

describe('people reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({isLoading: false, pets: {male: [], female: []}})
  })

  it('should return cats whose owner\'s gender is male', () => {
    const people = data

    expect(reducer(undefined, { type: 'FETCH_PEOPLE', people : people }).pets.male.length)
      .toEqual(4)
  })

  it('should return cats whose owner\'s gender is female', () => {
    const people = data

    expect(reducer(undefined, { type: 'FETCH_PEOPLE', people : people }).pets.female.length)
      .toEqual(3)
  })

  it('should return cats order by name', () => {
    const people = data

    const petsFemale = reducer(undefined, { type: 'FETCH_PEOPLE', people : people }).pets.female
    const petsMale = reducer(undefined, { type: 'FETCH_PEOPLE', people : people }).pets.male

    expect(petsFemale[0].name < petsFemale[petsFemale.length - 1].name).toEqual(true)
    expect(petsMale[0].name < petsMale[petsMale.length - 1].name).toEqual(true)
  })
})