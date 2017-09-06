import {createStore, applyMiddleware} from 'redux'
import reporter from '../lib/redux-reporter';

let mockStoreCreate = () => {
  let reducer = (state=0, action) => {
    switch(action.type) {
      case('ERROR'):
        throw new Error('test error')
      case('INC'):
        return state+1
      default:
        return state
    }
  }
  return createStore(reducer, applyMiddleware(reporter))
}

describe('redux reporter', () => {
  test('it should return the action by default', () => {
    let mockStore = mockStoreCreate();
    let action = {type: 'TEST_ACTION', payload: [1,2,3]}
    let result = mockStore.dispatch(action)

    expect(result).toEqual(action);
    expect(mockStore.getState()).toEqual(0)

    action = {type: 'INC'}
    result = mockStore.dispatch(action)

    expect(result).toEqual(action);
    expect(mockStore.getState()).toEqual(1)
  })
})
