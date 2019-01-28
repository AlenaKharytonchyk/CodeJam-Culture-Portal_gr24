import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import GitHub from '../components/GithubIcon';
import AnastasiyaHushcha from '../assets/images/developers/AnastasiyaHushcha.jpg';
import JulianKov from '../assets/images/developers/JulianKov.jpg';
import AlenaKharytonchyk from '../assets/images/developers/AlenaKharytonchyk.jpg';
import VictoriaTheBrave from '../assets/images/developers/VictoriaTheBrave.jpg';

const developersArr = [
  { github: '375291601334', img: AnastasiyaHushcha },
  { github: 'juliankov', img: JulianKov },
  { github: 'alenakharytonchyk', img: AlenaKharytonchyk },
  { github: 'victoriathebrave', img: VictoriaTheBrave },
];

function Developers(props) {
  const { t } = props;
  const SIZE = 190;
  const developersList = developersArr.map((item) => {
    const devName = `developers.${item.github}`;
    const devHref = `https://github.com/${item.github}`;
    return (
      <div className="developer-card" key={item.github}>
        <img src={item.img} alt="developer" width={SIZE} height={SIZE} />
        <h2>{t(devName, { framework: 'react-i18next' })}</h2>
        <a href={devHref}>
          <GitHub />
          {item.github}
        </a>
      </div>
    );
  });
  return (
    <div className="App developers-container">
      {developersList}
    </div>
  );
}

// function DeveloperCard(props) {
//   const { devInfo } = props;
//   const devHref = `https://github.com/${devInfo.github}`;
//   const url = require(`../assets/images/developers/${devInfo.img}`);
//   const SIZE = 190;
//   return (
//     <div className="developer-card">
//       <img src={url} alt="foto" width={SIZE} height={SIZE} />
//       <h2>{devInfo.name}</h2>
//       <a href={devHref}>
//         <GitHub />
//         {devInfo.github}
//       </a>
//     </div>
//   );
// }

// DeveloperCard.propTypes = {
//   devInfo: PropTypes.shape({}).isRequired,
// };

Developers.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('common')(Developers);
