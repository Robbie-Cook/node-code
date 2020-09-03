/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

/**
  Interface for Pane props
*/
interface PaneProps {
  children?: any;
}

/**
 * A Pane component.
 */
const Pane: React.FC<PaneProps> = (props) => {
  return (
    <section
      css={css`
        border-left: 1px solid black;
        border-right: 1px solid black;
        display: flex;
        padding: 30px;
      `}
    >
      {props.children}
    </section>
  );
};

export default Pane;
