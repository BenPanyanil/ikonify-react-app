import React from 'react';

export default function HeaderText({ text, dark }) {
  const textArray = text.split('');
  const lastCharacter = textArray.pop();

  const newText = textArray.join('');

  return (
    <div>
      <h2
        style={{
          color: dark ? 'var(--main-dark-blue)' : 'var(--main-white)',
          fontSize: '2.5rem',
        }}
      >
        {newText}
        <span style={{ color: 'var(--main-turquoise)' }}>{lastCharacter}</span>
      </h2>
    </div>
  );
}
