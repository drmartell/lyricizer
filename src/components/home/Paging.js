import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ onIncrement, onDecrement, page, count }) => (
  <>
    <button onClick={onDecrement}>&larr;</button>
    <span>{page} / {Math.floor(count / 25)}</span>
    <button onClick={onIncrement}>&rarr;</button>
  </>
);

Paging.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};

export default Paging;
