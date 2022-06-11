import { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction } from 'react';

export type ShortApplicationInfo = {
  id: number;
  name: string;
  company: string;
  monitored?: boolean;
}

type AdminData = {
  email: string;
  first_name: string;
  last_name: string;
}
export type ApplicationDetails = {
  admin: AdminData;
  company: string;
  id: number;
  logo: string;
  name: string;
  number_of_active_users: number;
  number_of_users: number;
  server_address: string;
}

export type ApplicationsList = ShortApplicationInfo[];
export type ToggleMonitored = (appId: ShortApplicationInfo['id']) => void;
export type ShowDetails = Dispatch<SetStateAction<ShortApplicationInfo['id'] | null | undefined>>;

export type GetAppList = () => Promise<AxiosResponse<ApplicationsList>>;
export type GetAppDetails = ({ id }: { id: ShortApplicationInfo['id'] }) => Promise<AxiosResponse<ApplicationDetails>>;