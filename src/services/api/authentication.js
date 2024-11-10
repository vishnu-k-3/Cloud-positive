import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://uat-api.cloudpositive.io/' }),
  endpoints: (builder) => ({
    getAuthToken: builder.mutation({
      query: ({ username, password, client_id }) => ({
        url: 'auth/token',
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username, password, client_id, grant_type: 'password' }),
      }),
    }),
  }),
});

export const { useGetAuthTokenMutation } = authApi;
