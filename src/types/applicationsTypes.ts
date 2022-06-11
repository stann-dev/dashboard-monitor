import { AxiosResponse } from 'axios';

export type ShortApplicationInfo = {
  id: number;
  name: string;
  company: string;
}

export type ApplicationsList = ShortApplicationInfo[];
export type ToggleMonitored = (monitored: ShortApplicationInfo) => void;
export type ShowDetails = (id: ShortApplicationInfo['id']) => void;

export type GetAppList = () => Promise<AxiosResponse<ApplicationsList>>;
export type GetAppDetails = ({ id }: { id: ShortApplicationInfo['id'] }) => Promise<AxiosResponse<ApplicationsList>>;