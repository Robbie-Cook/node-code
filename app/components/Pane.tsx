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
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      `}
    >
      Pane component
    </section>
  );
};

export default Pane;
