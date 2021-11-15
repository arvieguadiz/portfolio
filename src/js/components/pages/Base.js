import React from 'react';

const Base = (props) => {
  const { children } = props;

  return (
    <main>
      { children }
    </main>
  );
}

export default Base;