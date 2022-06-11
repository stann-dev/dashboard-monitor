import styles from './styles.module.scss';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export const FlexGallery: React.FC<Props> = ({
  children,
}) => {
  return (
    <div className={styles.base}>
      {children}
    </div>
  );
};