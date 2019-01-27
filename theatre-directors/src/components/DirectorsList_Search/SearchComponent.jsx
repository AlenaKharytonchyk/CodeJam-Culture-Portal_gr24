import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Sort from '@material-ui/icons/Sort';
import InputAdornment from '@material-ui/core/InputAdornment';
import { directorsArr } from '../../assets/textInfo/ru/directorsInfo';

class AutocompleteInput extends Component {
  state = {
    inputVal: '',
  }

  render() {
    const { inputVal } = this.state;
    const { updatedata } = this.props;
    return (
      <div>
        <TextField
          id="outlined-password-input"
          label="Search Director"
          type="text"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            this.setState({ inputVal: e.target.value });
            setTimeout(() => {
              const matches = [];
              directorsArr.forEach((name) => {
                if (name.toLowerCase().includes(inputVal)) matches.push(name);
              });
              updatedata(matches);
            });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Menu">
                  <Sort />
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{ width: 600 }}
        />
      </div>
    );
  }
}

AutocompleteInput.propTypes = {
  updatedata: PropTypes.func.isRequired,
};

export default AutocompleteInput;
