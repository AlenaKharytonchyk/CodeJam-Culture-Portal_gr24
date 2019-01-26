import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: '2vh',
  },
});

class PageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes, children, labels } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={(e, v) => this.handleChange(e, v)}>
            {labels.map(label => <Tab key={label} label={label} />)}
          </Tabs>
        </AppBar>
        {children.map((child, i) => value === i
          && <TabContainer key={labels[i]}>{child}</TabContainer>)}
      </div>
    );
  }
}

PageContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(PageContainer);
