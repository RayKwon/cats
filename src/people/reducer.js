import _ from 'lodash'

const initialState = {
  isLoading: false,
  pets: { male : [], female : [] }
}

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case 'FETCH_PEOPLE' :
      const pets = _.flatMap(action.people, person => { 
        return _.map(person.pets, pet => ({ 
            gender: person.gender, 
            name: pet.name,
            type: pet.type 
        })) 
      })

      const male = _.filter(pets, pet => pet.gender === 'Male' && pet.type === 'Cat')
      const female = _.filter(pets, pet => pet.gender === 'Female' && pet.type === 'Cat')

      const nextState = { 
        ...state, 
        pets: {
          male: _.orderBy(male, ['name'], ['asc']),
          female: _.orderBy(female, ['name'], ['asc'])
        },
        isLoading: action.isLoading
      }
      
      return nextState;

    default :
      return state;
  }
}