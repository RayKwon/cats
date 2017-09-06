import { fetchPeople } from '../action'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import mockData from './mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('people action', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should trigger actions', () => {

    nock('http://agl-developer-test.azurewebsites.net/')
      .get('/people.json')
      .reply(200, mockData)

    const expectedActions = [
      { type: 'FETCH_PEOPLE', isLoading: true },
      { type: 'FETCH_PEOPLE', isLoading: false, people: mockData }
    ]

    const store = mockStore()

    return store.dispatch(fetchPeople()).then( () => {
      expect(store.getActions()).toEqual(expectedActions)  
    })

  })
})