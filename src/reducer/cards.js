let validateCard = (card) => {
  if(!card.id || !card.content || !card.categoryID)
    throw new Error('VALIDATION ERROR: card should have an id, content and categoryID')
}

let validateCategory = (category) => {
  if(!category.id || !category.title || !category.timestamp) {
    throw new Error('VALIDATION ERROR: category must have id, title and timestamp')
  }
}

let intialState = {}

export default (state=intialState, action) => {
  let {type, payload} = action

  switch(type){
    case 'CATEGORY_CREATE':
      validateCategory(payload);
      return {...state, [payload.id]: []};

    case 'CATEGORY_DELETE':
      return {...state, [payload.id]: undefined}

    case 'CARD_CREATE':
      validateCard(payload);
      let {categoryID} = payload;
      let categoryCards = state[categoryID];
      return {...state, [categoryID]: [...categoryCards, payload]}

    case 'CARD_UPDATE':
      validateCard(payload);
      let {categoryID} = payload;
      let categoryCards = state[categoryID];
      return {...state, [categoryID]: categoryCards.map( card => {
        card.id === payload.id ? payload : card;
      })}

    case 'CARD_DELETE':
      validateCard(payload);
      let {categoryID} = payload;
      let categoryCards = state[categoryID];
      return {...state, [categoryID]: categoryCards.filter( card =>
        card.id !== payload.id;
      )}

    default:
      return state;
  }
}
