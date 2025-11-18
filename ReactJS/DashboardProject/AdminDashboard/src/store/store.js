//Creating the Store
import { createStore } from 'redux';

const initailState = { count : 0 }; //Initial State

function counterReducer(state = initailState , action){
    switch(action.type){
        case 'INCREMENT':
            return { ...state, count : state.count + 1};
        case 'DECREMENT':
            return {...state , count : state.count - 1};
        default:
            return state;
    }
}

const store = createStore(counterReducer);