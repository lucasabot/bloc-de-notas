import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

const History = () => {
  console.log('boca');
  return <div className={styles.container}>HISTORY</div>;
};

export default connect()(History);
