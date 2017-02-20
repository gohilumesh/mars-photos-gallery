import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GalleryPhotosComponent from './../component/gallery-photos-component';
import SearchComponent from './../../shared/search-component';
import SelectComponent from './../../shared/select-component';
import { bindActionCreators } from 'redux';
import { filterByQuery, filterByCamera } from './../actions/gallery-actions';
import CameraOptions from './camera-options';

class GalleryContainer extends Component {

  filterPhotos = (photos, filter) => {
    if (filter.query == null && filter.camera == null) {
      return photos;
    }

    if (filter.query && filter.camera) {
      return photos.filter(photo => (photo.id+'').indexOf(filter.query) > -1 && photo.camera.name === filter.camera);
    } else if (filter.query) {
      return photos.filter(photo => (photo.id+'').indexOf(filter.query) > -1);
    } else if (filter.camera){
      return photos.filter(photo => photo.camera.name === filter.camera);
    }
    return photos;
  }

  render() {
    let photos = this.filterPhotos(this.props.gallery.photos, this.props.filter);

    let gallery = Object.assign({}, this.props.gallery, {photos});

    const search = '';
    return (
      <div className="gallery-container">
        <section className="search-section">
          <SearchComponent search={search} placeholder="Filter photos" handleSearchChanged={value => this.props.filterByQuery(value)} />
          <SelectComponent selectedText="Filter By Camera" options={CameraOptions} onSelect={value => this.props.filterByCamera(value)} />
        </section>
        <section className="photo-section">
          <GalleryPhotosComponent {...gallery} />
        </section>
      </div>
    );
  }
}

GalleryContainer.propTypes = {
  gallery: PropTypes.object.isRequired,
  filter: PropTypes.object,
};

const mapStateToProps = state => ({
  gallery: state.gallery,
  filter: state.filter
});

const mapDispatchToProps = dispatch => bindActionCreators({
  filterByQuery,
  filterByCamera
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
