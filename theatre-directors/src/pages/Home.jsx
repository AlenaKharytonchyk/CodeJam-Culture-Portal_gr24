import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
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
            <h1>
              <Trans i18nKey="main.title" />
            </h1>
            <article>
              <p>
                <Trans i18nKey="main.p1" />
              </p>
              <p>
                <Trans i18nKey="main.p2" />
              </p>
              <p>
                <Trans i18nKey="main.p3" />
              </p>
              <p>
                <Trans i18nKey="main.p4" />
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

export default translate('common')(Home);
