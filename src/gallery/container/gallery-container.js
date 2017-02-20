import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GalleryPhotosComponent from './../component/gallery-photos-component';
import SearchComponent from './../../shared/search-component';
import { bindActionCreators } from 'redux';
import { filterPhotos } from './../actions/gallery-actions';

class GalleryContainer extends Component {

  filterPhotos = (photos, filter) => {
    if (filter.query == null) {
      return photos;
    } else {
      return photos.filter(photo => (photo.id+'').indexOf(filter.query) > -1);
    }
  }

  render() {
    let photos = this.filterPhotos(this.props.gallery.photos, this.props.filter);

    let gallery = Object.assign({}, this.props.gallery, {photos});

    const search = '';
    return (
      <div className="gallery-container">
        <section className="search-section">
          <SearchComponent search={search} handleSearchChanged={value => this.props.filterPhotos(value)} />
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
  filterPhotos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
