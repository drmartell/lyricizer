import React from 'react';
import queryString from 'query-string';

export default function Recording() {
  const { artist } = queryString.parse(this.props.location.search);

  return (

    <>
      <p>This is the recording page</p>
    </>
  );
}
