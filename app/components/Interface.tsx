/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Editor from './Editor';
import Pane from './Pane';

/**
  Interface for Interface props
*/
interface InterfaceProps {
  children?: any;
}

/**
  A Interface component.
*/
const Interface: React.FC<InterfaceProps> = (props) => {
  const [text, setText] = React.useState('Enter text here');
  return (
    <section
      css={css`
        width: 1100px;
        display: flex;
      `}
    >
      <Pane
        css={css`
          width: 600px;
        `}
      >
        <Editor onChange={setText} value={text} />
      </Pane>
      <Pane
        css={css`
          width: 50%;
        `}
      >
        {text}
      </Pane>
    </section>
  );
};

export default Interface;
