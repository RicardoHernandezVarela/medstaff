import React from 'react';
import ReactDOM from 'react-dom';
import  { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

/* Import reducers */
import reducers from './reducers';

/* Import components */
import App from './App';

import './index.css';

/* Create stote */
const store = createStore(
    reducers, // reducers
	{}, // initial state
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);