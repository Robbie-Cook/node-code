/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import MonacoEditor from 'react-monaco-editor';
import React from 'react';

/**
  Interface for Editor props
*/
export interface EditorProps {
  children?: any;
  onChange: (str: string) => void;
  value?: string;
}

/**
  A Editor component.
*/
const Editor: React.FC<EditorProps> = (props) => {
  return (
    <MonacoEditor
      width="600"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={props.value}
      // options={options}
      onChange={props.onChange}
      // editorDidMount={::this.editorDidMount}
    />
  );
};

export default Editor;
