import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, height, borderRadius }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
};

Image.defaultProps = {
  width: '100%',
  height: 'auto',
  borderRadius: '0px',
};

export default Image;
