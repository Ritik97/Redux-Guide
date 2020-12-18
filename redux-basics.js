/** This is our redux file. We haven't included it in our react project as redux works independent of react.
 * We'll be executing this file through node.js.
 * Things we have to setup before starting to use Redux:-
 * 1. Store
 * 2. Reducer
 * 3. Dispatching Action
 * 4. Subscription
 */

 const redux = require('redux');
 const createStore = redux.createStore; //creating the central store

const initialState = {
    counter: 0
}


 //Reducer
 const rootReducer = ( currentState = initialState, action ) => currentState 
 /** The reducer will always receive an Action and the old state. For now, it is simply returning the same state. 
  * To initialise the state for the time when the store is created, and Reducer executes for the 1st time, we can set an
  * initial state.  
 */

 //Store
 const store = createStore(rootReducer);
console.log(store.getState());
