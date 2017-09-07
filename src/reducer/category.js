let validateCategory = (category) => {
  if(!category.id || !category.title || !category.timestamp) {
    throw new Error('VALIDATION ERROR: category must have id, title and timestamp')
  }
}

let intialState = []

export default (state=intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      validateCategory(payload);
      return [...state, payload]

    case 'CATEGORY_UPDATE':
      validateCategory(payload);
      return state.map(category =>
        category.id == payload.id ? payload : category)

    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id)

    case 'CATEGORY_RESET':
      return intialState

    default:
      return state
  }
}
