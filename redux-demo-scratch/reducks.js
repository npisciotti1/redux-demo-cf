//Simplified 'from-scratch' Redux

//takes in a reducer and returns a store
//a store is an object that has three methods:
//getState(), dispatch(), subscribe()


function createStore(reducer) {
  var subscribers = [];

  var state = reducer(undefined, {type: null})

  return {
    getState: function() {
      return state
    },
    dispatch: function(action) {
      state = reducer(state, action)
      subscribers.forEach(function(cb){ cb() })
      return action;
    },
    subscribe: function(cb) {
      subscribers.push(cb)
    }
  }
}
