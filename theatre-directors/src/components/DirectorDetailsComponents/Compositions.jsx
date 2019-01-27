import React from 'react';
import FormattedMessage from 'react-intl';
import PropTypes from 'prop-types';

export default function Compositions(props) {
  const { result } = props;
  const listItems = result.compositions.map(item => <li key={item}>{item}</li>);
  return (
    <div className="compositions">
      <h3>
        <FormattedMessage
          id="DirectorDetails.compositions.Title"
          defaultMessage="Произведения автора"
        />
      </h3>
      <ul>{ listItems }</ul>
    </div>
  );
}

Compositions.propTypes = {
  result: PropTypes.shape({}).isRequired,
};
