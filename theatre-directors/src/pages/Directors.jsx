import React, { Component } from 'react';
import SearchResultList from '../components/DirectorsList_Search/SearchResultList';

class Directors extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [{}, {}] };
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
