let validateCard = (card) => {
  if(!card.id || !card.content || !card.categoryID)
    throw new Error('VALIDATION ERROR: card should have an id, content and categoryID')
}

let intialState = {}

export default (state=intialState, action) => {
  let {type, payload} = action

  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]: []}

    case 'CATEGORY_DELETE':
      return {...state, [payload.id]: undefined}

    case 'CARD_CREATE':
      let {categoryID} = payload
      let categoryCards = state[categoryID]
      return {...state, [categoryID]: [...categoryCards, payload]}

    default:
      return state;
  }
}
