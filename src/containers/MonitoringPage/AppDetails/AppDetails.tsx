import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ApplicationDetails, ShortApplicationInfo } from '../../../types/applicationsTypes';
import { getAppDetails } from '../../../api/applications';
import { InfoWithLabel } from '../../../components/InfoWithLabel/InfoWithLabel';
import { Title } from '../../../components/Title/Title';

type Props = {
  id?: ShortApplicationInfo['id'] | null;
}

export const AppDetails: React.FC<Props> = ({
  id
}) => {
  const [appDetails, setAppDetails] = useState<ApplicationDetails>();

  const updateAppDetails = async (id: ShortApplicationInfo['id']) => {
    const { data } = await getAppDetails({ id });
    setAppDetails(data);
  }

  useEffect(() => {
    if(id !== undefined && id !== null) {
      updateAppDetails(id);
    }
  }, [id]);

  if(!appDetails){
    return null;
  }

  return (
    <div className={styles.base}>
      <Title>{appDetails.name}</Title>
      <div className={styles.appDetails}>
        <InfoWithLabel label={'Company'}>{appDetails.company}</InfoWithLabel>
        <InfoWithLabel label={'Server address'}>{appDetails.server_address}</InfoWithLabel>
        <InfoWithLabel label={'Active users'}>{appDetails.number_of_active_users}</InfoWithLabel>
        <InfoWithLabel label={'All users'}>{appDetails.number_of_users}</InfoWithLabel>
        <InfoWithLabel label={'Admin'}>{appDetails.admin.first_name} {appDetails.admin.last_name}, {appDetails.admin.email}</InfoWithLabel>
      </div>
    </div>
  )
}