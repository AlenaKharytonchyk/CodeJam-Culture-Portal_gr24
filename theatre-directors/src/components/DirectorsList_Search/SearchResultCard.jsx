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
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="DirectorGeneralInfo"
          className={classes.media}
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="DirectorGeneralInfo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Director name
          </Typography>
          <Typography component="p">
          director general info
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

DirectorCard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(DirectorCard);
