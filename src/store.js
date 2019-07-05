import { createStore, combineReducers } from 'redux';

import stateReducer from './reducers/statereducer'
import cityReducer from './reducers/cityreducer'
import grainReducer from './reducers/grainreducer';

const store = createStore(combineReducers({
   states:stateReducer,
   city:cityReducer,
   grain:grainReducer
}),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;