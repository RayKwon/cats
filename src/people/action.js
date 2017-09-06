import fetch from 'isomorphic-fetch'

export const fetchPeople = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_PEOPLE', isLoading: true })    

    return fetch('http://agl-developer-test.azurewebsites.net/people.json')
      .then( response => response.json() )
      .then(people => {
        dispatch({ type: 'FETCH_PEOPLE', isLoading: false, people: people })
      })
  }
}