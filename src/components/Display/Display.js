// src/components/Display/Display.js
import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ text, size }) => {
  return <div className={`display display--${size}`}>{text}</div>;
};

Display.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Display.defaultProps = {
  size: 'medium',
};

export default Display;
