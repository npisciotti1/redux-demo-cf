//Simplified 'from-scratch' Redux

//takes in a reducer and returns a store
//a store is an object that has three methods:
//getState(), dispatch(), subscribe()

function createStore(reducer) {
  var listeners = [];

  //get initial state from reducer
  var state = reducer(undefined, {type: null})

  return {
    getState: function(){
      return state;
    },
    dispatch: function(action){
      state = reducer(state, action)
      listeners.forEach(function(cb){ cb() })
    },
    subscribe: function(cb){
      listeners.push(cb)
    }
  }
}
