import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/api/authentication';
import { tableDataApi } from './services/api/tableData';
import authReducer from './services/api/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [tableDataApi.reducerPath]: tableDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, tableDataApi.middleware),
});
