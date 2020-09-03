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

let consoleReference = console.log;

/**
  A Interface component.
*/
const Interface: React.FC<InterfaceProps> = (props) => {
  const [text, setText] = React.useState(`console.log('hello')`);
  const [output, setOutput] = React.useState<string>();
  
  let func: Function | null = null;
  try {
    func = new Function(text);
  } catch (e) {
    // setOutput(e.toString());
  }

  React.useEffect(() => {
    console.log = (output: string) => setOutput(output);

    func?.();

    () => (console.log = consoleReference);
  }, []);


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
        <Editor
          onChange={(text) => {
            setText(text);
            try {
              func?.();
            } catch (e) {
              setOutput(e.toString());
            }
          }}
          value={text}
        />
      </Pane>
      <Pane
        css={css`
          width: 50%;
        `}
      >
        {output}
      </Pane>
    </section>
  );
};

export default Interface;
