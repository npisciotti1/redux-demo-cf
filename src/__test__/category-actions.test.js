import {
  categoryCreate,
  categoryUpdate,
  categoryDelete
} from '../action/category-actions';

describe('testing category actions', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({title: 'test'})

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy()
    expect(action.payload.timestamp).toBeTruthy()
    expect(action.payload.title).toEqual('test');
  })

  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let action = categoryUpdate({title: 'update test'})

    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload.title).toEqual('update test');
  })

  test('categoryDelete returns a CATEGORY_DELETE action', () => {
    let action = categoryDelete({title: 'delete test'});

    expect(action.type).toEqual('CATEGORY_DELETE');
    expect(action.payload.title).toEqual('delete test');
  })
})
