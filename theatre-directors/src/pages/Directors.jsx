import React, { Component } from 'react';
import SearchResultList from '../components/DirectorsList_Search/SearchResultList';
import { directorsInfo } from '../assets/textInfo/ru/directorsInfo';

class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = { results: directorsInfo };
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <div id="search-section">
          <SearchResultList results={results} />
        </div>
        <div id="director-details" />
      </div>
    );
  }
}

export default Directors;
