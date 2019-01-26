import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchResultCard from './SearchResultCard';

const styles = {
  display: 'flex',
  flexDirection: 'column',
};

function SearchResultList(props) {
  const { results } = props;
  return (
    <div>
      {
       results.map(res => <SearchResultCard result={res} />)
     }
    </div>
  );
}
SearchResultList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default withStyles(styles)(SearchResultList);
