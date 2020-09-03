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
      <Pane>
        <Editor />
      </Pane>
      <Pane></Pane>
    </section>
  );
};

export default Interface;
