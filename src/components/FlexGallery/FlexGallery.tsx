import { ApplicationsList, ShowDetails, ToggleMonitored } from '../../types/applicationsTypes';
import styles from './styles.module.scss';
import { FlexGalleryItem } from '../FlexGalleryItem/FlexGalleryItem';

type Props = {
  data: ApplicationsList;
  handleMonitoringClick: ToggleMonitored;
  // handleDetailsClick: ShowDetails;
}
export const FlexGallery: React.FC<Props> = ({
  data,
  handleMonitoringClick,
}) => {
  return (
    <div className={styles.base}>
      {data.map((singleCompany) => (
        <FlexGalleryItem
          key={singleCompany.id}
          data={singleCompany}
          handleMonitoringClick={handleMonitoringClick}
        />
      ))}
    </div>
  );
};