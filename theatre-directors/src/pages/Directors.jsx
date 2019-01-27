import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';
import { Button } from '@material-ui/core';
import SearchResultList from '../components/DirectorsList_Search/SearchResultList';
import { directorsInfo } from '../assets/textInfo/ru/directorsInfo';
import SearchBar from '../components/DirectorsList_Search/SearchComponent';

class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: directorsInfo,
      selectedResult: null,
      newData: directorsInfo.slice(0),
    };
  }

  updateData = (value) => {
    const { results } = this.state;
    const updatedRes = [];
    value.forEach((el) => {
      results.forEach((dir) => {
        if (dir.name === el) updatedRes.push(dir);
      });
    });
    this.setState({ newData: updatedRes });
  }

  handleResultSelect(result) {
    this.setState({ selectedResult: result });
  }

  render() {
    const { selectedResult } = this.state;
    const isSelected = !!selectedResult;
    const { newData } = this.state;
    return (
      <div>
        <Slide in={!isSelected} direction="right" mountOnEnter unmountOnExit>
          <div id="search-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SearchBar updatedata={this.updateData} />
            <SearchResultList results={newData} selectResult={e => this.handleResultSelect(e)} />
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
