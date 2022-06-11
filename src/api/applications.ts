import axiosInstance from './config';
import { GetAppDetails, GetAppList } from '../types/applicationsTypes';

export const getAppList: GetAppList = async () => {
  return await axiosInstance.get('/list');
}

export const getAppDetails: GetAppDetails = async ({ id }) => {
  return await axiosInstance.get(`/list/${id}`);
}