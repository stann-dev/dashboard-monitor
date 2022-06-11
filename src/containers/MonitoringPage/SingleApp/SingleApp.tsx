import React from 'react';
import styles from './styles.module.scss';
import { ShortApplicationInfo, ShowDetails, ToggleMonitored } from '../../../types/applicationsTypes';
import { Button } from '../../../components/Button/Button';

type Props = {
  data: ShortApplicationInfo;
  toggleMonitoredApp: ToggleMonitored;
  setSelectedAppId: ShowDetails;
}
export const SingleApp: React.FC<Props> = ({
  data,
  toggleMonitoredApp,
  setSelectedAppId,
}) => {
  const handleMonitoringClick = () => toggleMonitoredApp(data.id);
  const handleShowDetailsClick = () => setSelectedAppId(data.id);

  return (
    <div className={`${styles.base} ${data.monitored && styles.monitored}`}>
      <div className={styles.name}>
        {data.name}
      </div>
      <div className={styles.company}>
        {data.company}
      </div>
      <div className={styles.buttons}>
        <Button onClick={handleMonitoringClick}>
          {data.monitored ? 'Unwatch' : 'Watch'}
        </Button>
        <Button onClick={handleShowDetailsClick}>
          Details
        </Button>
      </div>
    </div>
  );
};