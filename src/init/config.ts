/* eslint-disable @typescript-eslint/no-explicit-any */
import get from 'get-value';
import config from '@/configs';

const getConfig = (key: string, option?: any): unknown =>
  get(config, key, option);
const getEnv = (key: string, option?: any): unknown =>
  get(import.meta.env, key, option);

const isDevelopment = (): boolean => getEnv('NODE_ENV') === 'development';
const isProduction = (): boolean => getEnv('NODE_ENV') === 'production';

export default config;
export { get as getValue, getConfig, getEnv, isDevelopment, isProduction };
