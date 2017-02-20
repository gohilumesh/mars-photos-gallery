import React from 'react';

const PhotoItem = ({photo}) => (
  <li className="photo-group-item" key={photo.id}>
    <figure>
      <img src={photo.img_src} alt="" />
      <figcaption>{photo.id}</figcaption>
    </figure>
  </li>
);

export default PhotoItem;
