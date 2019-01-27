import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

const directorsArr = ['Александровская Лариса Помпеевна', 'Буйницкий Игнат Терентьевич', 'Дервоед Роман Алексеевич', 'Лев Михайлович Эльстон', 'Леон Гдальевич Рахленко'];

const citiesArr = ['Минск', 'Полочаны', 'Орша', 'Гомель'];


class AutocompleteInput extends Component {
  state = {
    inputVal: '',
  }

  render() {
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
                if (name.toLowerCase().includes(this.state.inputVal)) matches.push(name);
              });
              this.props.updatedata(matches);
            });
          }}
        />
      </div>
    );
  }
}

export default AutocompleteInput;
