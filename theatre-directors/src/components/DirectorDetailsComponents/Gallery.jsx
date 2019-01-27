import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import 'react-image-gallery/styles/css/image-gallery.css';

function Gallery(props) {
  const { result } = props;
  return (
    <div>
      <ImageGallery
        showFullscreenButton={false}
        items={result.gallery}
      />
    </div>
  );
}

Gallery.propTypes = {
  result: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  classes: PropTypes.shape({}).isRequired,
};
export default Gallery;
