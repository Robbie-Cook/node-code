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
  return (
    <section>
      <Pane
        css={css`
          width: 50%;
        `}
      >
        <Editor />
      </Pane>
      <Pane
        css={css`
          width: 50%;
        `}
      ></Pane>
    </section>
  );
};

export default Interface;
