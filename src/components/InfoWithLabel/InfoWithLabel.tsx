import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  label: string;
  children: ReactNode | string;
}

export const InfoWithLabel: React.FC<Props> = ({
  label,
  children
}) => (
  <div className={styles.base}>
    <div className={styles.label}>
      {label}
    </div>
    <div className={styles.children}>
      {children}
    </div>
  </div>
)