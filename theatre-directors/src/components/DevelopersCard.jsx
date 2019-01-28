import React from 'react';
import PropTypes from 'prop-types';
import GitHub from './GithubIcon';

function DeveloperCard(props) {
  const { devInfo } = props;
  
  const devHref = `https://github.com/${devInfo.github}`;
  const url = require(`../assets/images/developers/${devInfo.img}`);
  const SIZE = 190;
  return (
    <div className="developer-card">
      <img src={url} alt="foto" width={SIZE} height={SIZE} />
      <h2>{devInfo.name}</h2>
      <a href={devHref}>
        <GitHub />
        {devInfo.github}
      </a>
    </div>
  );
}

DeveloperCard.propTypes = {
  devInfo: PropTypes.shape({}).isRequired,
};

export default DeveloperCard;
