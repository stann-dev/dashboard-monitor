import React from 'react';
import styles from './styles.module.scss';

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  return (
    <button {...props} type='button' className={styles.base} />
  );
};