// src/components/Container/Container.js
import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ children, fluid }) => {
  return <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};

export default Container;
