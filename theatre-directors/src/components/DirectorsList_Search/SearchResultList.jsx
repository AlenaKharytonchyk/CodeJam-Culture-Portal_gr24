import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchResultCard from './SearchResultCard';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
};

function SearchResultList(props) {
  const { results, selectResult, classes } = props;
  return (
    <div
      className={classes.root} 
      style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around',
      }} 
    >
      {
       results.map(res => (
         <SearchResultCard
           key={res.name}
           result={res}
           onClick={() => selectResult(res)}
         />
       ))
     }
    </div>
  );
}
SearchResultList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectResult: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default withStyles(styles)(SearchResultList);
