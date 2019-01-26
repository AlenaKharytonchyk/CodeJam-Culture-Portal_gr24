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
    marginBottom: '5vh',
  },
  media: {
    objectFit: 'cover',
  },
};

function DirectorCard(props) {
  const { classes, result } = props;
  return (
    <Card className={classes.card}>
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
          <Typography gutterBottom variant="h5" component="h2">
            {result.name}
          </Typography>
          <Typography component="p">
            {result.info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

DirectorCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(DirectorCard);
