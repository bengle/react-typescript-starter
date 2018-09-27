import { combineReducers } from 'redux';
import {TestReducer} from './test.reducer';

const rootStore = combineReducers({
    test: TestReducer
});

export default rootStore;
