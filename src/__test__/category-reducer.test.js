import categoryReducer from '../reducer/category';

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: 'default', payload: null})
    expect(result).toEqual([]);
  });

  test('CATEGORY_CREATE should add an item and update the state', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '123',
        title: 'test',
        timestamp: new Date()
      }
    }
    let state = categoryReducer(undefined, action)
    expect(state.length).toBe(1);
    expect(state[0]).toBe(action.payload);

    state = categoryReducer(state, action)
    expect(state.length).toBe(2);

    let action2 = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '321',
        title: 'test2',
        timestamp: new Date()
      }
    }

    state = categoryReducer(state, action2);
    expect(state.length).toBe(3);
    expect(state[2]).toBe(action2.payload)
  })

  test('CATEGORY_UPDATE should update an item and return the updated state', () => {
    let action = {
      type: 'CATEGORY_UPDATE',
      payload: {title: 'im updated', id: 2}
    }

    let state = [{category: 'test', id: 1}, {category: 'thing', id: 2}];

    state = categoryReducer(state, action);
    expect(state[1]).toBe(action.payload);

    let updated = state[1];
    expect(updated.category).toBe('im updated')
  })

  test('CATEGORY_DELETE should delete an item in state', () => {
    let action = {
      type: 'CATEGORY_DELETE',
      payload: {title: 'test', id: 1}
    }
    let state = [{category: 'test', id: 1}, {category: 'thing', id: 2}];

    state = categoryReducer(state, action)
    expect(state.length).toBe(1);
    expect(state[0]).toEqual({category: 'thing', id: 2})
  })

  test('CATEGORY_RESET should return a resetted state --> []', () => {
    let action = {
      type: 'CATEGORY_RESET',
      payload: {}
    }
    let state = [{category: 'test', id: 1}, {category: 'thing', id: 2}];

    state = categoryReducer(state, action);

    expect(state.length).toBe(0);
    expect(state).toEqual([]);
  })
})
