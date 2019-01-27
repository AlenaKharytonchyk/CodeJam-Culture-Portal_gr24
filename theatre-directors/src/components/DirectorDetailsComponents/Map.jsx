/* eslint-disable no-unused-vars */
/* global google */
import React, { Component } from 'react';
import FormattedMessage from 'react-intl';
import PropTypes from 'prop-types';

function initMap(coordinates) {
  const map = new google.maps.Map(
    document.getElementById('map'), { zoom: 7, center: coordinates },
  );
  const marker = new google.maps.Marker({ position: coordinates, map });
}

export default class Map extends Component {
  componentDidUpdate() {
    const { coordinates } = this.props;
    initMap(coordinates);
  }

  render() {
    return (
      <div className="map">
        <h3>
          <FormattedMessage
            id="DirectorDetails.compositions.Title"
            defaultMessage="Место основной деятельности"
          />  
        </h3>
        <div id="map" />
      </div>
    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.shape({}).isRequired,
};
