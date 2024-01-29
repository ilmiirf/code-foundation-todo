import { createApi } from '@reduxjs/toolkit/query/react';
import { type LoginRequestType } from 'types/userType';
import { authBaseQuery } from 'init/baseQuery';

export const authApi = createApi({
  baseQuery: authBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginRequestType) => {
        return {
          url: 'auth/login',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
