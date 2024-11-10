import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tableDataApi = createApi({
    reducerPath: 'tableDataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cloudpositive-api.cloudpositive.io/v1/',
    prepareHeaders: (headers, {getState}) => {
      const token = getState().auth.token;
      const tenantId = 'd3fef9bc-c3aa-488a-bf68-2ea15532db54';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      if (tenantId) {
        headers.set('x-tenant-id', tenantId); // Add Tenant-ID to headers
      }
    return headers;
    }
    }),
  endpoints: (builder) => ({
    getCostTable: builder.query({
      query: ({ month, year }) => ({
        url: `org/summary?month=${month}&year=${year}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCostTableQuery } = tableDataApi;
