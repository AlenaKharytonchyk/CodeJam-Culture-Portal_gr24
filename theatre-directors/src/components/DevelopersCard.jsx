import React from 'react';
import PropTypes from 'prop-types';
import GitHub from './GithubIcon';

const fotos = require.context('../assets/images/developers', false, /\.jpg$/);
const fotosObj = fotos.keys()
  .reduce((imgs, key) => {
    imgs[key] = fotos(key);
    return imgs;
  }, {});

function DeveloperCard(props) {
  const { devInfo } = props;
  
  const devHref = `https://github.com/${devInfo.github}`;
  const fotoSrc = `./${devInfo.img}`;
  const SIZE = 190;
  return (
    <div className="developer-card">
      <img src={fotosObj[fotoSrc]} alt="foto" width={SIZE} height={SIZE} />
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
