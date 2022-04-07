import React from 'react';
import loading from '../../img/loading.svg';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img src={loading} alt='loading' className={StyleSheet.loader} />
    </div>
  );
};

export default Loading;
