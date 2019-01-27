import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export default function Youtube(props) {
  const { videoUrl } = props;
  return (
    <div className="video">
      <h3>Видео</h3>
      <ReactPlayer url={videoUrl} controls={true} playing={false} />
    </div>
  );
}

Youtube.propTypes = {
  videoUrl: PropTypes.shape({}).isRequired,
};
