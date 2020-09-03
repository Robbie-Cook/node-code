/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

/**
  Interface for Pane props
*/
interface PaneProps {
  children?: any;
  className?: string;
}

/**
 * A Pane component.
 */
const Pane: React.FC<PaneProps> = (props) => {
  return (
    <section
      className={props.className}
      css={css`
        /* border-left: 1px solid black;
        border-right: 1px solid black; */
        /* display: flex; */
      `}
    >
      {props.children}
    </section>
  );
};

export default Pane;
