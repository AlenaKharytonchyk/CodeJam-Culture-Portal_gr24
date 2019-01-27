import React from 'react';
import PropTypes from 'prop-types';
import GeneralInfo from './GeneralInfo';
import TimeLine from './TimeLine';
import Map from './Map';
import Compositions from './Compositions';
import Gallery from './Gallery';
import Youtube from './Youtube';

export default function DirectorDetails(props) {
  const { result } = props;
  if (result === null) {
    return null;
  }

  return (
    <section className="full-info">
      <GeneralInfo result={result} />
      <TimeLine />
      <Compositions result={result} />
      <Gallery result={result} />
      <Youtube videoUrl={result.video} />
      <Youtube />
      <Map coordinates={result.coordinates} />
    </section>
  );
}

DirectorDetails.propTypes = {
  result: PropTypes.shape({}).isRequired,
};
