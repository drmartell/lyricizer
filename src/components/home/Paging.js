import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ onIncrement, onDecrement, page, count }) => {
  const maxPage = Math.max(Math.floor(count / 25), 1);
  return (
    <>
      <button onClick={onDecrement}>&larr;</button>
      <span>{page} / {maxPage}</span>
      <button onClick={onIncrement}>&rarr;</button>
    </>
  );};

Paging.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};

export default Paging;
