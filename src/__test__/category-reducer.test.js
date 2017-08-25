import categoryReducer from '../reducer/category';

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: 'default', payload: null})
    expect(result).toEqual([]);
  });

  test('created object should update state', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'test'
    }
    let state = categoryReducer(undefined, action)
    expect(state.length).toBe(1);
    expect(state[0]).toBe(action.payload);

    state = categoryReducer(state, action)
    expect(state.length).toBe(2);

  })
})
