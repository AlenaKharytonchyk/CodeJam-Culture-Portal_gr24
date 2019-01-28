import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: '10px',
    marginBottom: '5vh',
  },
  media: {
    objectFit: 'cover',
  },
  directorName: {
    height: '2.4em',
  },
};

function DirectorCard(props) {
  const { classes, result, onClick } = props;
  return (
    <Card className={classes.card} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={result.name}
          className={classes.media}
          height="140"
          image={result.img}
          title={result.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.directorName}>
            {result.name}
          </Typography>
          <Typography component="p" noWrap>
            {result.info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

DirectorCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func,
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

DirectorCard.defaultProps = {
  onClick: () => {},
};

export default withStyles(styles)(DirectorCard);
