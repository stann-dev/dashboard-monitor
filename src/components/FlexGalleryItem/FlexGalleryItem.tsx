import React from 'react';
import styles from './styles.module.scss';
import { ShortApplicationInfo, ToggleMonitored } from '../../types/applicationsTypes';

export type Props = {
  data: ShortApplicationInfo;
  handleMonitoringClick: ToggleMonitored;
}
export const FlexGalleryItem: React.FC<Props> = ({
  data,
  handleMonitoringClick
}) => {
  return(
    <div className={styles.base}>
      <div className={styles.title}>
        {data.name}
      </div>
      <div className={styles.desc}>
        {data.company}
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleMonitoringClick(data)}>Monitoruj</button>
      </div>
    </div>
  )
}