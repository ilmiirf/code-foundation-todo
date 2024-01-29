import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getConfig } from './config';

const dataBaseQuery = fetchBaseQuery({
  baseUrl: getConfig('apiUrl.todoData'),
});

const authBaseQuery = fetchBaseQuery({
  baseUrl: getConfig('apiUrl.authUser'),
});

export { dataBaseQuery, authBaseQuery };
