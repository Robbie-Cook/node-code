import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Interface from './Interface';
import { Global, css } from '@emotion/core';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Global
        styles={css`
          html,
          body {
            background-color: #1f1f1f;
            color: white;
            font-family: Monaco, sans-serif; 
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Interface></Interface>
      {/* <Link to={routes.COUNTER}>to Counter</Link> */}
    </div>
  );
}
