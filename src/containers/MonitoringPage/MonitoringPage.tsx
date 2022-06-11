import React, { useEffect, useState } from 'react';
import { getAppList } from '../../api/applications';
import { FlexGallery } from '../../components/FlexGallery/FlexGallery';
import { ApplicationsList, ShortApplicationInfo } from '../../types/applicationsTypes';
import styles from './styles.module.scss';
import { FlexGalleryItem } from '../../components/FlexGalleryItem/FlexGalleryItem';
import { SingleApp } from './SingleApp/SingleApp';
import { Title } from '../../components/Title/Title';
import { AppDetails } from './AppDetails/AppDetails';

export const MonitoringPage: React.FC = () => {
  const [appList, setAppList] = useState<ApplicationsList>();
  const [selectedAppId, setSelectedAppId] = useState<ShortApplicationInfo['id'] | null>();

  const updateAppList = async () => {
    try {
      const { data } = await getAppList();
      data.forEach((el) => ({
        ...el,
        monitored: false,
      }));
      setAppList(data);
    } catch (err) {
      // Some err handling, best if query handling separated into hook
    }
  };

  const toggleMonitoredApp = (appId: ShortApplicationInfo['id']) => {
    if (appList) {
      const tempAppList = [...appList];
      const appIndex = tempAppList.findIndex((el) => (el.id === appId));
      tempAppList[appIndex].monitored = !tempAppList[appIndex].monitored;

      tempAppList.sort((a) => (a.monitored ? -1 : 1));
      setAppList(tempAppList);
    }
  };

  useEffect(() => {
    updateAppList();
  }, []);

  return (
    <div className={styles.base}>
      <Title>App monitoring</Title>
      <AppDetails id={selectedAppId} />
      <FlexGallery>
        {/* Code below could be exported into separated component, in example MonitoringList */}
        {appList && appList.map((singleApp) => (
          <FlexGalleryItem key={singleApp.id}>
            <SingleApp
              data={singleApp}
              toggleMonitoredApp={toggleMonitoredApp}
              setSelectedAppId={setSelectedAppId}
            />
          </FlexGalleryItem>
        ))}
      </FlexGallery>
    </div>
  );
};