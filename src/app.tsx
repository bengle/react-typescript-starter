import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './configureStore';
const store = configureStore({});
import PrimaryLayout from './container';
import './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PrimaryLayout></PrimaryLayout>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
