import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import HomeComponent from './home/home-component';
import GalleryContainer from './gallery/container/gallery-container';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomeComponent} />
    <Route path="/gallery" component={GalleryContainer} />
  </Route>
);
