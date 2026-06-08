import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Subscription {
  channelId: string;
  channelName: string;
  channelAvatar?: string;
  isSubscribed: boolean;
  subscribedAt?: string;
}

export interface SubscribeState {
  subscriptions: Subscription[];
  subscribedChannelIds: Record<string, boolean>;
}

const initialState: SubscribeState = {
  subscriptions: [],
  subscribedChannelIds: {},
}

export const SubscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    subscribe: (state, action: PayloadAction<Subscription>) => {
      const subscription = action.payload;
      state.subscriptions.push(subscription);
      state.subscribedChannelIds[subscription.channelId] = true;
    },
    unsubscribe: (state, action: PayloadAction<string>) => {
      const channelId = action.payload;
      state.subscriptions = state.subscriptions.filter(
        (sub) => sub.channelId !== channelId
      );
      delete state.subscribedChannelIds[channelId];
    },
    toggleSubscribe: (state, action: PayloadAction<Subscription>) => {
      const subscription = action.payload;
      const isCurrentlySubscribed = state.subscribedChannelIds[subscription.channelId];
      
      if (isCurrentlySubscribed) {
        state.subscriptions = state.subscriptions.filter(
          (sub) => sub.channelId !== subscription.channelId
        );
        delete state.subscribedChannelIds[subscription.channelId];
      } else {
        state.subscriptions.push({ ...subscription, isSubscribed: true, subscribedAt: new Date().toISOString() });
        state.subscribedChannelIds[subscription.channelId] = true;
      }
    },
    setSubscriptions: (state, action: PayloadAction<Subscription[]>) => {
      state.subscriptions = action.payload;
      state.subscribedChannelIds = action.payload.reduce(
        (acc, sub) => {
          acc[sub.channelId] = sub.isSubscribed;
          return acc;
        },
        {} as Record<string, boolean>
      );
    },
  },
})

export const { subscribe, unsubscribe, toggleSubscribe, setSubscriptions } = SubscribeSlice.actions

export default SubscribeSlice.reducer