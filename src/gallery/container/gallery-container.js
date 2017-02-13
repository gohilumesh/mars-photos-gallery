import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GalleryPhotosComponent from './../component/gallery-photos-component';
import SearchComponent from './../../shared/search-component';

class GalleryContainer extends Component {

  handleSearchChanged(value) {
    console.log(value);
  }

  render() {
    const photos = this.props.photos;
    const search = '';
    return (
      <div className="container">
        <section className="search-section">
          <SearchComponent search={search} handleSearchChanged={this.handleSearchChanged} />
        </section>
        <section className="photo-section">
          <GalleryPhotosComponent photos={photos} />
        </section>
      </div>
    );
  }
}

GalleryContainer.propTypes = {
  photos: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
      photos: state.photos
  };
}

export default connect(mapStateToProps)(GalleryContainer);
