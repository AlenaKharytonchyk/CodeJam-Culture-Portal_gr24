import React from 'react';
import DeveloperCard from '../components/DevelopersCard';

const developersArr = [
  { name: 'Гущо Анастасия', github: '375291601334', img: 'AnastasiyaHushcha.jpg' },
  { name: 'Ковалев Юлиан', github: 'juliankov', img: 'JulianKov.jpg' },
  { name: 'Харитончик Алена', github: 'alenakharytonchyk', img: 'AlenaKharytonchyk.jpg' },
  { name: 'Лихута Виктория', github: 'victoriathebrave', img: 'VictoriaTheBrave.jpg' },
];

function Developers() {
  return (
    <div className="App developers-container">
      {
        developersArr.map(item => (
          <DeveloperCard key={item.name} devInfo={item} />
        ))
      }
    </div>
  );
}

export default Developers;
