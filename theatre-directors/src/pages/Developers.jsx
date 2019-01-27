import React from 'react';
import DeveloperCard from '../components/DevelopersCard';

const developersArr = [
  { name: 'Гущо Анастасия', github: '375291601334', img: 'AnastasiyaHushcha.jpg' },
  { name: 'Юлиан', github: 'juliankov', img: 'JulianKov.jpg' },
  { name: 'Харитончук Алена', github: 'alenakharytonchyk', img: 'AlenaKharytonchyk.jpg' },
  { name: 'Виктория', github: 'victoriathebrave', img: 'VictoriaTheBrave.jpg' },
];

function Developers() {
  function renderDevelopers() {
    const developerCards = [];
    for (let i = 0; i < developersArr.length; i++) {
      developerCards.push(<DeveloperCard devInfo={developersArr[i]} />);
    }
    return developerCards;
  }

  return (
    <div className="App developers-container">
      {renderDevelopers() }
    </div>
  );
}

export default Developers;
