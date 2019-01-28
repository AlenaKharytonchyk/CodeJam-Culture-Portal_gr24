import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import YouTubePlayer from 'react-player/lib/players/YouTube';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    padding: 0,
    boxShadow: theme.shadows[5],
    outline: 'none',
  },
  container: {
    display: 'inline-block',
    position: 'relative',
    'text-align': 'center',
    'text-justify': 'center',
  },
});

class Youtube extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderOverlay = () => {
    const ovrlStyles = {
      overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    };
    return (
      <div
        style={ovrlStyles.overlay}
        onClick={this.handleOpen}
        onKeyPress={this.handleOpen}
        role="button"
        tabIndex="0"
      />
    );
  }

  render() {
    const { classes, videoUrl } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div className={classes.container}>
          <YouTubePlayer
            url={videoUrl}
            playing={false}
            onClick={this.handleOpen}
          />
          {this.renderOverlay()}
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <YouTubePlayer
              url={videoUrl}
              playing
              controls
            />
          </div>
        </Modal>
      </div>
    );
  }
}

Youtube.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  videoUrl: PropTypes.string.isRequired,
};


export default withStyles(styles)(Youtube);
