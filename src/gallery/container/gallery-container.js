import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import GalleryPhotosComponent from './../component/gallery-photos-component';

class GalleryContainer extends Component {
  render() {
    return (
      <GalleryPhotosComponent photos={this.props.photos} />
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
