/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

/**
 * Interface for Output props
 */
interface OutputProps {
  children?: string;
}

/**
 *  A Output component.
 */
const Output: React.FC<OutputProps> = (props) => {
  return (
    <div
      css={css`
        padding: 10px 30px;
      `}
    >
      {props.children}
    </div>
  );
};

export default Output;
