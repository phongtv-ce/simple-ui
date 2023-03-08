import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification } from 'interfaces/notification.interface';

const initialState: INotification = {
  type: 'alert',
  message: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notification: (state, action: PayloadAction<INotification>) =>
      action.payload,
    clearNotification: (state) => initialState,
  },
});

export const { actions: notificationActions, reducer: notificationReducer } =
  notificationSlice;
