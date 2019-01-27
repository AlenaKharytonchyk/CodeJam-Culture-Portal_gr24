import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import DirectorCard from '../components/DirectorsList_Search/SearchResultCard';
import DirectorDetails from '../components/DirectorDetailsComponents/DirectorDetails';
import { directorsInfo } from '../assets/textInfo/ru/directorsInfo';

function getRndElement(arr) {
  const dateObj = new Date();
  const day = dateObj.getDate();
  let i = day;
  while (i > arr.length) {
    i -= arr.length;
  }
  return arr[i - 1];
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }

  handleResultSelect() {
    const { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  }

  render() {
    const { isSelected } = this.state;
    return (
      <div>
        <Slide in={!isSelected} direction="right" mountOnEnter unmountOnExit>
          <div className="App">
            <h1>Театральные режиссеры Беларуси</h1>
            <article>
              <p>
            Белорусская театральная история насчитывает не одно столетие.
            Белорусский профессиональный театр развился из древних народных обрядов,
            творчества бродячих музыкантов, придворных трупп белорусских магнатов,
            деятельности любительских коллективов рубежа XIX–XX веков.
              </p>
              <p>
            Но на белорусской земле бродячие артисты не просто выступали, а постигали
            азы своего профессионального мастерства. Известно, что в Сморгони до середины
            XIX века существовала единственная в Европе медвежья академия. Отловленных
            в лесах медвежат учили танцевать, а потом скоморохи отправлялись с ними на ярмарки
            в Россию, Польшу, Венгрию, Германию.
              </p>
              <p>
            Ярчайшая страница в истории народного театрального искусства – белорусская батлейка.
            Традицию устанавливать рождественские батлейки заложил святой Франциск Ассизский в XIII
            веке в Италии. Но в Беларуси, где кроме канонических сюжетов бродячие артисты в
            начале XVI века представляли и сценки из жизни, это искусство получило народное
            признание
            и сохранилось до сегодняшнего дня. Традицию в наше время поддерживают многие кукольные
            театры республики, практически во всех костелах на Рождество также можно увидеть
            представление в жанре батлейки.
              </p>
              <p>
            Сейчас Беларусь — страна с давней и хорошо развитой театральной культурой. Свой театр
            есть в каждом областном центре. А наш сайт призван познакомить Вас с наиболее известными
            теаральными режиссерами нашей страны. Вот один из них:
              </p>
            </article>
            <DirectorCard
              result={getRndElement(directorsInfo)}
              onClick={() => this.handleResultSelect()}
            />
          </div>
        </Slide>
        <Slide in={isSelected} direction="left" mountOnEnter unmountOnExit>
          <div id="director-details">
            <Button onClick={() => this.handleResultSelect()}>Close</Button>
            <DirectorDetails result={getRndElement(directorsInfo)} />
          </div>
        </Slide>
      </div>);
  }
}

export default Home;
