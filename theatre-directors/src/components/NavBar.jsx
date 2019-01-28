import React from 'react';
import { translate, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes, i18n } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Trans i18nKey="main.title" />
          </Typography>
          <Button color="inherit" onClick={() => i18n.changeLanguage('en')}>En</Button>
          <Button color="inherit" onClick={() => i18n.changeLanguage('ru')}>Ru</Button>
          <Button color="inherit" onClick={() => i18n.changeLanguage('by')}>By</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  i18n: PropTypes.shape({}).isRequired,
};

export default translate('common')(withStyles(styles)(NavBar));
