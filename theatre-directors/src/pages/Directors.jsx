import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core';
import SearchResultList from '../components/DirectorsList_Search/SearchResultList';
import { directorsInfo } from '../assets/textInfo/ru/directorsInfo';

class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = { results: directorsInfo, selectedResult: null };
  }

  handleResultSelect(result) {
    this.setState({ selectedResult: result });
  }

  render() {
    const { results, selectedResult } = this.state;
    const isSelected = !!selectedResult;
    return (
      <div>
        <Slide in={!isSelected} direction="right" mountOnEnter unmountOnExit>
          <div id="search-section">
            <SearchResultList results={results} selectResult={e => this.handleResultSelect(e)} />
          </div>
        </Slide>
        <Slide in={isSelected} direction="left" mountOnEnter unmountOnExit>
          <div id="director-details">
            <Button onClick={() => this.handleResultSelect(null)}>Close</Button>
        Тут будет интересная инфа
          </div>
        </Slide>
      </div>
    );
  }
}

export default Directors;
