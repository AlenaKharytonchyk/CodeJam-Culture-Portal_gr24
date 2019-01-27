import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

export default function TimeLine(props) {
  const { result } = props;
  // <li key={item}>{item}</li>
  const listItems = result.biography.dates.map((item) => {
    const keyItem = `00${item}`;
    return (
      <TimelineItem
        key={keyItem}
        dateText={item}
        style={{ color: '#3f51b5' }}
      >
        <p>{result.biography.events[item]}</p>
      </TimelineItem>
    );
  });
  return (
    <div className="biography">
      <h3>Биография</h3>
      <Timeline lineColor="#ddd">{listItems}</Timeline>
      <div />
    </div>
  );
}

TimeLine.propTypes = {
  result: PropTypes.shape({}).isRequired,
};
