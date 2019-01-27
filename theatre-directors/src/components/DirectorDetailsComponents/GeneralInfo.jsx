import React from 'react';
import PropTypes from 'prop-types';

export default function GeneralInfo(props) {
  const { result } = props;
  return (
    <div className="title">
      <h2>{result.name}</h2>
      <img src={result.img} alt={result.name} />
    </div>);
}

GeneralInfo.propTypes = {
  result: PropTypes.shape({}).isRequired,
};
