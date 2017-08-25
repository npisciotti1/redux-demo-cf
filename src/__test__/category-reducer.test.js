import categoryReducer from '../reducer/category';

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: 'default', payload: null})
    expect(result).toEqual([]);
  });

  test('created object should update state', () => {
    let newItem = {title: 'test'};
    let result = categoryReducer(undefined, {type: 'CATEGORY_CREATE', payload: newItem})
    expect(result).toEqual()
  })
})
