import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

export type Props = {
  children: ReactNode
}
export const FlexGalleryItem: React.FC<Props> = ({
  children
}) => {
  return(
    <div className={`${styles.base}`}>
      {children}
    </div>
  )
}