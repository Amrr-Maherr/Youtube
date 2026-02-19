import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Check, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { timeAgo } from "@/lib/video";

type NotificationType = "all" | "unread" | "seen" | "mentions";

interface Notification {
  id: string;
  type: "video" | "channel" | "comment" | "like" | "mention";
  read: boolean;
  title: string;
  description: string;
  thumbnail?: string;
  channelName?: string;
  channelAvatar?: string;
  time: string;
  videoId?: string;
  channelId?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "video",
    read: false,
    title: "New video from MrBeast",
    description: "I Gave My 100,000,000th Subscriber An Island",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    channelName: "MrBeast",
    channelAvatar: "https://yt3.ggpht.com/ytc/default.jpg",
    time: "2 hours ago",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "2",
    type: "like",
    read: false,
    title: "John Doe liked your video",
    description: "My Amazing Travel Vlog 2024",
    thumbnail: "https://i.ytimg.com/vi/abc123/mqdefault.jpg",
    channelName: "John Doe",
    channelAvatar: "",
    time: "5 hours ago",
    videoId: "abc123",
  },
  {
    id: "3",
    type: "comment",
    read: false,
    title: "Jane Smith commented on your video",
    description: "Great content! Keep it up 🔥",
    thumbnail: "https://i.ytimg.com/vi/xyz789/mqdefault.jpg",
    channelName: "Jane Smith",
    channelAvatar: "",
    time: "1 day ago",
    videoId: "xyz789",
  },
  {
    id: "4",
    type: "channel",
    read: true,
    title: "Marques Brownlee uploaded a video",
    description: "iPhone 16 Pro Review: The Truth!",
    thumbnail: "https://i.ytimg.com/vi/mkb123/mqdefault.jpg",
    channelName: "Marques Brownlee",
    channelAvatar: "",
    time: "2 days ago",
    videoId: "mkb123",
  },
  {
    id: "5",
    type: "mention",
    read: true,
    title: "Tech Channel mentioned you",
    description: "@You Check out this amazing tutorial!",
    thumbnail: "",
    channelName: "Tech Channel",
    channelAvatar: "",
    time: "3 days ago",
    channelId: "tech123",
  },
  {
    id: "6",
    type: "video",
    read: true,
    title: "PewDiePie uploaded a video",
    description: "Minecraft Episode 100 - FINALE",
    thumbnail: "https://i.ytimg.com/vi/pew456/mqdefault.jpg",
    channelName: "PewDiePie",
    channelAvatar: "",
    time: "1 week ago",
    videoId: "pew456",
  },
];

export default function Notifications() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<NotificationType>("all");
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === "unread") return !n.read;
    if (activeTab === "seen") return n.read;
    if (activeTab === "mentions") return n.type === "mention";
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Notifications</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {unreadCount > 0 ? `${unreadCount} unread` : "No unread notifications"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {notifications.length > 0 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="hidden sm:flex"
                >
                  <Check className="mr-2 size-4" />
                  Mark all as read
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={deleteAllNotifications}
                  className="hidden sm:flex"
                >
                  <Trash2 className="mr-2 size-4" />
                  Delete all
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={deleteAllNotifications}
                  className="sm:hidden"
                >
                  <Trash2 className="size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={markAllAsRead}
                  className="sm:hidden"
                >
                  <Check className="size-5" />
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 mt-4 overflow-x-auto scrollbar-thin">
          {[
            { id: "all", label: "All" },
            { id: "unread", label: "Unread" },
            { id: "seen", label: "Seen" },
            { id: "mentions", label: "Mentions" },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.id as NotificationType)}
              className="rounded-full whitespace-nowrap"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-w-4xl mx-auto">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="flex size-20 items-center justify-center rounded-full bg-muted mb-4">
              <Bell className="size-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground">
              {activeTab === "unread"
                ? "No unread notifications"
                : activeTab === "mentions"
                ? "No mentions yet"
                : "No notifications yet"}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 text-center">
              {activeTab === "unread"
                ? "You're all caught up!"
                : "When you get notifications, they'll show up here"}
            </p>
          </div>
        ) : (
          <div className="divide-y">
            {filteredNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onMarkAsRead={() => markAsRead(notification.id)}
                onDelete={() => deleteNotification(notification.id)}
                onChannelClick={(channelId) => navigate(`/channel?channelId=${channelId}`)}
                onVideoClick={(videoId) => navigate(`/watch?v=${videoId}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: () => void;
  onDelete: () => void;
  onChannelClick: (channelId: string) => void;
  onVideoClick: (videoId: string) => void;
}

function NotificationItem({
  notification,
  onMarkAsRead,
  onDelete,
  onChannelClick,
  onVideoClick,
}: NotificationItemProps) {
  const {
    type,
    read,
    title,
    description,
    thumbnail,
    channelName,
    channelAvatar,
    time,
    videoId,
  } = notification;

  const getNotificationIcon = () => {
    switch (type) {
      case "video":
        return (
          <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Bell className="size-5 text-blue-500" />
          </div>
        );
      case "like":
        return (
          <div className="size-10 rounded-full bg-red-500/20 flex items-center justify-center">
            <Check className="size-5 text-red-500" />
          </div>
        );
      case "comment":
        return (
          <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <Check className="size-5 text-green-500" />
          </div>
        );
      case "mention":
        return (
          <div className="size-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <span className="text-purple-500 font-bold">@</span>
          </div>
        );
      default:
        return (
          <div className="size-10 rounded-full bg-gray-500/20 flex items-center justify-center">
            <Bell className="size-5 text-gray-500" />
          </div>
        );
    }
  };

  return (
    <div
      className={`flex gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/50 transition-colors cursor-pointer ${
        !read ? "bg-accent/30" : ""
      }`}
      onClick={() => videoId && onVideoClick(videoId)}
    >
      {/* Icon/Avatar */}
      <div className="shrink-0">
        {channelAvatar ? (
          <img
            src={channelAvatar}
            alt={channelName}
            className="size-10 sm:size-12 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              onChannelClick("channel123");
            }}
          />
        ) : (
          getNotificationIcon()
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground line-clamp-2">
              {title}
            </p>
            {description && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {description}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">{timeAgo(time)}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 shrink-0">
            {!read && (
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onMarkAsRead();
                }}
              >
                <Check className="size-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>

        {/* Thumbnail */}
        {thumbnail && (
          <div
            className="mt-3 relative aspect-video w-full sm:w-40 overflow-hidden rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
              if (videoId) onVideoClick(videoId);
            }}
          >
            <img
              src={thumbnail}
              alt={description}
              className="size-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
