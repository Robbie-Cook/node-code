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
  return <div css={css``}>Pane component</div>;
};

export default Pane;
