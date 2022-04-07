import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default SubmitButton;
