/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { store, history } from './store/configure-store';
import { Provider } from 'react-redux';
import App from './app';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadPhotos } from './gallery/actions/gallery-actions';

store.dispatch(loadPhotos());

function scrollToTop() {
  window.scrollTo(0, 0);
}
ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={scrollToTop()} history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
