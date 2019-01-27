import React from 'react';
import PropTypes from 'prop-types';
import directorsArr from '../../assets/textInfo/ru/directorsInfo';

export default function GeneralInfo(props) {
  const { result } = props;
  const mainPhotoPath = `../assets/images/directors/${directorsArr.indexOf(result.name) + 1}.jpg`;
  return (
    <div className="title">
      <h2>{result.name}</h2>
      <img src={mainPhotoPath} alt={result.name} />
    </div>);
}

GeneralInfo.propTypes = {
  result: PropTypes.shape({}).isRequired,
};
