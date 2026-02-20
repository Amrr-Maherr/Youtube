import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/Store'
import type { Subscription } from '@/store/SubscribeSlice'
import { subscribe, unsubscribe, toggleSubscribe, setSubscriptions } from '@/store/SubscribeSlice'

export function useSubscribe() {
  const dispatch = useDispatch<AppDispatch>()
  const subscriptions = useSelector((state: RootState) => state.subscribe.subscriptions)
  const subscribedChannelIds = useSelector((state: RootState) => state.subscribe.subscribedChannelIds)

  const handleSubscribe = (subscription: Subscription) => {
    dispatch(subscribe(subscription))
  }

  const handleUnsubscribe = (channelId: string) => {
    dispatch(unsubscribe(channelId))
  }

  const handleToggleSubscribe = (subscription: Subscription) => {
    dispatch(toggleSubscribe(subscription))
  }

  const handleSetSubscriptions = (subscriptions: Subscription[]) => {
    dispatch(setSubscriptions(subscriptions))
  }

  const isSubscribed = (channelId: string) => {
    return !!subscribedChannelIds[channelId]
  }

  return {
    subscriptions,
    subscribedChannelIds,
    subscribe: handleSubscribe,
    unsubscribe: handleUnsubscribe,
    toggleSubscribe: handleToggleSubscribe,
    setSubscriptions: handleSetSubscriptions,
    isSubscribed,
  }
}
