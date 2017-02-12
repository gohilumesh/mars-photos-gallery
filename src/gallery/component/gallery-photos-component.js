import React, { PropTypes } from 'react';


const GalleryPhotosComponent = ({photos}) => {
  return (
    <ul className="photo-group">
    {
      photos.map(photo =>
        <li className="photo-group-item" key={photo.id}>
          <figure>
            <img src={photo.img_src} alt="" />
            <figcaption>{photo.id}</figcaption>
          </figure>
        </li>
      )
    }
    </ul>
  );
};


GalleryPhotosComponent.propTypes = {
  photos: PropTypes.array.isRequired
};

export default GalleryPhotosComponent;
