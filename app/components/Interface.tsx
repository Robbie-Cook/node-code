/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import Editor from './Editor';
import Pane from './Pane';
import Output from './Output';

/**
  Interface for Interface props
*/
interface InterfaceProps {
  children?: any;
}

let consoleReference = console.log;

let outputStore = '';

/**
  A Interface component.
*/
const Interface: React.FC<InterfaceProps> = (props) => {
  const [text, setText] = React.useState(`console.log('hello')`);
  const [output, setOutput] = React.useState<string>();

  const execFunc = (text: string) => {
    outputStore = '';

    let func: Function | null = null;
    try {
      func = new Function(text);
    } catch (e) {
      setOutput(e.toString());
      return;
    }

    try {
      console.log = (string: string) => (outputStore += `${string}\n`);
      func?.();
    } catch (e) {
      setOutput(e.toString());
      console.log = consoleReference;
      return;
    }

    console.log = consoleReference;

    setOutput(outputStore);
  };

  React.useEffect(() => {
    execFunc(text);
  }, []);

  return (
    <section
      css={css`
        width: 100vw;
        display: flex;
        height: calc(100vh - 50px);
      `}
    >
      <Pane
        css={css`
          width: 50%;
        `}
      >
        <Editor
          onChange={(myText) => {
            execFunc(myText);
            setText(myText);
          }}
          value={text}
        />
      </Pane>
      <Pane
        css={css`
          width: 50%;
        `}
      >
        <Output>{output}</Output>
      </Pane>
    </section>
  );
};

export default Interface;
