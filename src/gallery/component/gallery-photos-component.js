import React, { PropTypes } from 'react';
import PhotoItem from './gallery-photo-item-component';

const GalleryPhotosComponent = ({loading, photos}) => {
  if (loading === true) {
    return (<p className="loading-data">Loading ....</p>);
  }
  if (photos.length === 0) {
    return (<p className="no-data-display">Change your filter, No photos to display</p>);
  }
  return (
    <ul className="photo-group">
    {
      photos.map(photo =>
        <PhotoItem key={photo.id} photo={photo} />
      )
    }
    </ul>
  );
};

GalleryPhotosComponent.propTypes = {
  photos: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default GalleryPhotosComponent;
