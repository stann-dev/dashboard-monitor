import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
}
export const SimplePageTemplate: React.FC<Props> = ({
  children
}) => {
  return(
    <div className={styles.base}>
      {children}
    </div>
  )
}