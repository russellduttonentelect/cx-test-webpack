import axios, { AxiosInstance } from 'axios';
import { useEnvContext } from './EnvProvider';
import { createContext, FC, useContext } from 'react';

type Services = {
  api: AxiosInstance;
};

const ServiceContext = createContext<Services | undefined>(undefined);

export const ServiceProvider: FC = ({ children }) => {
  const { apiUrl } = useEnvContext();

  const api = axios.create({
    baseURL: apiUrl,
  });

  return <ServiceContext.Provider value={{ api }}>{children}</ServiceContext.Provider>;
};

export const useServiceProvider = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error('Cannot use Service Provider outside Service Provider Context');
  }

  return context;
};
