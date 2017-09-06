import { combineReducers } from 'redux';
import { initialReducer } from './initial.reducer';
import { helloReducer } from './hello.reducer';
import { worldReducer } from './world.reducer';
import { numReducer } from './num.reducer';

export default combineReducers({
    hello: helloReducer,
    world: worldReducer,
    num: numReducer
});
