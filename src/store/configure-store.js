import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import rootReducer from './../reducers';
import thunk from 'redux-thunk';

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the thunk middleware
middlewares.push(thunk);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(rootReducer, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };
