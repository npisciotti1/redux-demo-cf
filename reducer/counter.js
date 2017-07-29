'use strict'

//redux reducers define the state, and its interactions.
//basic function signature of a redux reducer (oldState, action) => newState

//reducers have no state themselves, I.E. a 'pure function.'

//an action is an object with two properties, 'type' and 'payload.'
//it gets passed into a reducer and the reducer can use it to modify the state.

var initialState = 0;

export default (state = initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }

  return state;
}
