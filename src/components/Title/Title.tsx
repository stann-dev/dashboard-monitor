import React from 'react';
import styles from './styles.module.scss';

type Props = {
  children: string;
}
export const Title: React.FC<Props> = ({
  children
}) => (
  <h1 className={styles.base}>{children}</h1>
)