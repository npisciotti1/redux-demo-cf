// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './component/app';
//
// ReactDOM.render(<App/>, document.getElementById('root'));

import {createStore} from 'redux';
import categoryReducer from './reducer/category.js';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  categoryReset
} from './action/category-actions';

const store = createStore(categoryReducer);

console.log('store:', store);

store.dispatch(categoryCreate({title: 'coolbeans'}))

console.log('state', store.getState())
