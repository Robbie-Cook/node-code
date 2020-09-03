import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Interface from './Interface';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Interface></Interface>
      {/* <Link to={routes.COUNTER}>to Counter</Link> */}
    </div>
  );
}
