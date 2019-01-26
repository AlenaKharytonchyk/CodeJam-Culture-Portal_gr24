/* eslint-disable no-unused-vars */
/* global google */

export default function initMap(coordinates) {
  const map = new google.maps.Map(
    document.getElementById('map'), { zoom: 7, center: coordinates },
  );
  const marker = new google.maps.Marker({ position: coordinates, map });
}
