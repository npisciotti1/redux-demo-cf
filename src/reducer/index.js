import {combineReducers} from 'redux'

import cardReducer from './cards'
import categoryReducer from './category'

export default combineReducers({
  cards: cardReducer,
  categories: categoryReducer
})
