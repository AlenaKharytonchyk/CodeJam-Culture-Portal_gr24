import React from 'react';
import directorsArr from '../assets/textInfo/ru/directorsInfo';

function CurrentDirector(name) {
  const mainPhotoPath = `../assets/images/directors/${directorsArr.indexOf(name) + 1}.jpg`;
  return (
    <div className="App">
      <h2>{name}</h2>
      <img src={mainPhotoPath} alt={name} />
      <div>
        <h3>Биография</h3>
        <div></div>
      </div>
      <div>
        <h3>Список произведений</h3>
        <div></div>
      </div>
      <div>
        <h3>Фото</h3>
        <div></div>
      </div>
      <div>
        <h3>Видео</h3>
        <div></div>
      </div>
      <div>
        <h3>Место основной деятельности</h3>
        <div></div>
      </div>
    </div>);
}

export default CurrentDirector;
