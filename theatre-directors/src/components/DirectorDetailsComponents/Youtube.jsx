import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import Button from '@material-ui/core/Button';

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

  render() {
    const { classes, videoUrl } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Просмотреть видео</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <YouTubePlayer
              url={videoUrl}
              playing={true}
              controls={true}
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
