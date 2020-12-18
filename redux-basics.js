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
 const rootReducer = ( currentState = initialState, action ) => {

    if ( action.type === 'INC_COUNTER' ) {
        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    }

    if ( action.type === 'ADD_COUNTER' ) {
        return {
            ...currentState,
            counter: currentState.counter + action.value
        }
    }
    return currentState;
 } 
 

 //Store
 const store = createStore(rootReducer);
console.log(store.getState());


//Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());