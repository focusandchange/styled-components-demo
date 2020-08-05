import React from 'react';
import styled from 'styled-components';

const Thing = styled.div.attrs(() => ({
  tabIndex: 0
}))`
  color: blue;

  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }

  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 1px solid;
  }

  .something {
    border: 1px solid;
    display: block;
  }
`;

function Demo() {
  return (
    <div>
      <Thing>Hello world</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
      <Thing>
        <label htmlFor="foo-button" className="something">Mystery button</label>
        <button id="foo-button">What do I do?</button>
      </Thing>
    </div>
  )
}

export default Demo;