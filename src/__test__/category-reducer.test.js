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
    let result = categoryReducer(undefined, action)
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  })
})
