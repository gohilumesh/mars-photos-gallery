import React from 'react';
import { Link } from 'react-router';

const HomeComponent = () =>
  <section className="intro">
    <h1>Welcome to Mars Photo Gallery</h1>
    <p>Please enjoy the app and if there are any suggestation, please do email it to gohilumesh@hotmail.com </p>
    <Link to="gallery" className="btn btn-primary btn-lg">visit Gallery</Link>
  </section>;

export default HomeComponent;
