import React from 'react';
import PropTypes from 'prop-types';
import {BiUpArrowAlt} from 'react-icons/bi';

const Arrow = ({rotation, size, className, style}) => {
  return (<BiUpArrowAlt
    className={className}
    size={size}
    style={{transform: `rotate(${rotation}deg)`,
      ...style}}
  />);
};

export default Arrow;

Arrow.propTypes = {
  rotation: PropTypes.number,
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};
