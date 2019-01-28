/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import InputAdornment from '@material-ui/core/InputAdornment';
import { directorsArr, citiesArr, dirrectorsCities } from '../../assets/textInfo/ru/directorsInfo';

class AutocompleteInput extends Component {
  state = {
    inputVal: '',
    inputState: 10,
    searchProp: 'Search by Director',
    locations: citiesArr.map(loc => <MenuItem key={loc} onClick={() => { this.setState({ inputVal: loc, displayLoc: 'none' }); this.props.updatedata(dirrectorsCities[loc]); }}>{loc}</MenuItem>),
    displayLoc: 'none',
  }

  getMarkup = (arr) => {
    const { updatedata } = this.props;
    const markup = arr.map(loc => <MenuItem onClick={() => { this.setState({ inputVal: loc, displayLoc: 'none' }); updatedata(dirrectorsCities[loc]); }}>{loc}</MenuItem>);
    return markup;
  };

  render() {
    const { inputVal, inputState, searchProp } = this.state;
    const { updatedata } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <TextField
          value={inputVal}
          id="outlined-password-input"
          label={searchProp}
          type="text"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            this.setState({ inputVal: e.target.value });
            setTimeout(() => {
              const matches = [];
              const cityMatches = [];
              if (searchProp === 'Search by Location') {
                citiesArr.forEach((city) => {
                  if (city.toLowerCase().includes(this.state.inputVal)) {
                    cityMatches.push(city);
                    dirrectorsCities[city].forEach(el => matches.push(el));
                  }
                });
              } else {
                directorsArr.forEach((name) => {
                  if (name.toLowerCase().includes(this.state.inputVal)) matches.push(name);
                });
              }
              const menuItem = this.getMarkup(cityMatches);
              if (menuItem.length !== 0) {
                this.setState({ displayLoc: 'block' });
              } else {
                this.setState({ displayLoc: 'none' });
              }
              this.setState({ locations: menuItem });
              updatedata(matches);
            }, 100);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FormControl>
                  <Select
                    value={inputState}
                    onChange={() => {
                      if (inputState === 10) {
                        this.setState({ inputState: 20, searchProp: 'Search by Location', inputVal: '' });
                        this.setState({ displayLoc: 'block' });
                      } else {
                        this.setState({ inputState: 10, searchProp: 'Search by Director', inputVal: '' });
                        this.setState({ displayLoc: 'none', locations: this.getMarkup(citiesArr) });
                      }
                    }}
                    displayEmpty
                    name="Search"
                  >
                    <MenuItem value={10}>Director</MenuItem>
                    <MenuItem value={20}>Location</MenuItem>
                  </Select>
                </FormControl>
              </InputAdornment>
            ),
          }}
          style={{ width: '80%', marginLeft: '10%' }}
        />
        <Paper style={{
          display: this.state.displayLoc,
          marginTop: -8,
          width: 200,
          position: 'absolute',
          zIndex: 3,
          left: '10.5%',
        }}
        >
          <MenuList>
            {this.state.locations}
          </MenuList>
        </Paper>
      </div>
    );
  }
}

AutocompleteInput.propTypes = {
  updatedata: PropTypes.func.isRequired,
};

export default AutocompleteInput;
