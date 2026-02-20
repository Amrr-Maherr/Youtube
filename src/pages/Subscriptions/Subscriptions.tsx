import { useNavigate } from "react-router-dom";
import { useSubscribe } from "@/hooks/useSubscribe";
import { Bell, Video, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Avatar from "@/components/Avatar";

export default function Subscriptions() {
  const navigate = useNavigate();
  const { subscriptions, unsubscribe } = useSubscribe();

  const handleChannelClick = (channelId: string) => {
    navigate(`/channel?channelId=${channelId}`);
  };

  const handleUnsubscribe = (channelId: string) => {
    unsubscribe(channelId);
  };

  if (subscriptions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="flex size-20 items-center justify-center rounded-full bg-muted mx-auto mb-4">
            <Users className="size-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground">No subscriptions yet</h3>
          <p className="text-muted-foreground text-sm mt-2 mb-4">
            Subscribe to channels to see their latest videos here
          </p>
          <Button onClick={() => navigate("/")}>
            Explore Channels
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary">
              <Bell className="size-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Subscriptions
              </h1>
              <p className="text-sm text-muted-foreground">
                {subscriptions.length} {subscriptions.length === 1 ? 'channel' : 'channels'} subscribed
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Subscriptions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subscriptions.map((subscription) => (
            <div
              key={subscription.channelId}
              className="group cursor-pointer rounded-xl border bg-card p-4 hover:bg-accent transition-all"
            >
              {/* Channel Info */}
              <div className="flex items-start gap-3 mb-4">
                <Avatar
                  src={subscription.channelAvatar}
                  alt={subscription.channelName}
                  size="lg"
                  className="size-16"
                />
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-semibold text-foreground truncate hover:underline cursor-pointer"
                    onClick={() => handleChannelClick(subscription.channelId)}
                  >
                    {subscription.channelName}
                  </h3>
                  {subscription.subscribedAt && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Subscribed {new Date(subscription.subscribedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-full"
                  onClick={() => handleChannelClick(subscription.channelId)}
                >
                  <Video className="size-4 mr-2" />
                  View Channel
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  onClick={() => handleUnsubscribe(subscription.channelId)}
                >
                  Unsubscribe
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Total Subscriptions</p>
                <p className="text-xs text-muted-foreground">
                  You're subscribed to {subscriptions.length} {subscriptions.length === 1 ? 'channel' : 'channels'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (confirm('Are you sure you want to unsubscribe from all channels?')) {
                  subscriptions.forEach((sub) => unsubscribe(sub.channelId));
                }
              }}
            >
              Unsubscribe All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
