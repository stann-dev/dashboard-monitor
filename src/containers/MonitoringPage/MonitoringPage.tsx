import React, { useEffect, useState } from 'react';
import { getAppList } from '../../api/applications';
import { FlexGallery } from '../../components/FlexGallery/FlexGallery';
import { ApplicationsList, ShortApplicationInfo } from '../../types/applicationsTypes';
import styles from './styles.module.scss';

export const MonitoringPage: React.FC = () => {
  const [appList, setAppList] = useState<ApplicationsList>();
  const [monitored, setMonitored] = useState<ApplicationsList>([]);

  const updateAppList = async () => {
    const { data } = await getAppList();
    setAppList(data);
  };
  const isMonitored = (singleApp: ShortApplicationInfo) => {
    return monitored.some((monitored) => monitored.id === singleApp.id);
  }
  const toggleMonitoredApp = (singleApp: ShortApplicationInfo) => {
    if(isMonitored(singleApp)){
      const filtered = monitored.filter((monitored) => monitored.id !== singleApp.id);
      setMonitored(filtered);
    } else {
      setMonitored([...monitored, singleApp]);
    }
  }

  useEffect(() => {
    updateAppList();
  }, []);

  return (
    <div className={styles.base}>
      <h1>Currently monitoring</h1>
      {monitored && <FlexGallery data={monitored} handleMonitoringClick={toggleMonitoredApp} />}
      <h1>All apps</h1>
      {appList && <FlexGallery data={appList} handleMonitoringClick={toggleMonitoredApp} />}
    </div>
  );
};