import React from 'react';

export default function HeaderText(props) {
  return (
    <div>
      <h2
        style={{
          color: props.dark ? 'var(--main-dark-blue)' : 'var(--main-white)',
          fontSize: '2.5rem',
        }}
      >
        {props.text}
      </h2>
    </div>
  );
}
