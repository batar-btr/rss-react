import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import searchValueReducer from './searchValueSlice';
import { imgApi } from './api';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    searchValue: searchValueReducer,
    [imgApi.reducerPath]: imgApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imgApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
