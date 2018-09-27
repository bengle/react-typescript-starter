import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootStore from './stores';
console.log('root:',rootStore);
export default function configureStore(initialState:any) {
    return createStore(
        rootStore,
        initialState,
        applyMiddleware(thunkMiddleware),
    );
}

