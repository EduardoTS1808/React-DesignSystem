// src/components/Alert/Alert.js
import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ message, type }) => {
  return <div className={`alert alert--${type}`}>{message}</div>;
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
};

Alert.defaultProps = {
  type: 'success',
};

export default Alert;
