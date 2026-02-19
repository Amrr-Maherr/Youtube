# YouTube Clone - Full-Stack Web Application

A modern, production-ready YouTube clone built with React, TypeScript, and the YouTube Data API v3. Features a sleek dark-themed interface, real-time search, video playback, channel pages, and comprehensive category filtering.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## 🎯 Overview

This YouTube clone is a comprehensive video platform interface that replicates the core functionality and design of YouTube. Built with modern web technologies, it provides:

- **Real-time video search** with autocomplete suggestions
- **Category-based browsing** with dynamic filtering
- **Full video playback** with YouTube embed
- **Channel pages** with complete profile information
- **Responsive design** for all device sizes
- **Dark theme** optimized for video consumption

---

## ✨ Features

### 🔍 Search & Discovery
- **Real-time Search** - Instant search results as you type
- **Search Suggestions** - Autocomplete powered by Google Suggestions API
- **Search Results Page** - Dedicated page with filtered video results
- **Keyboard Navigation** - Arrow keys support in search dropdown

### 📺 Video Features
- **Video Playback** - Embedded YouTube player with full controls
- **Video Details Page** - Complete video information, stats, and metadata
- **Like/Dislike System** - Interactive engagement buttons
- **Share Functionality** - Web Share API or clipboard copy
- **Download Button** - UI for video download (placeholder)
- **Expandable Description** - Show more/less functionality
- **Duration Badge** - Video duration overlay on thumbnails
- **View Count & Publish Date** - Real-time formatted stats

### 👥 Channel Features
- **Channel Profile Page** - Complete channel information and branding
- **Channel Banner** - Custom banner image with fallback
- **Channel Avatar** - Profile picture with verified badge
- **Subscribe Button** - Toggle subscription with bell icon
- **Channel Stats** - Subscribers, total views, video count
- **Channel Tabs** - Videos, Shorts, Playlists, Community, About
- **Channel Details** - Email, country, join date, keywords
- **Related Videos** - Sidebar with related content from same category

### 🏷️ Categories & Navigation
- **Dynamic Categories** - Real-time data from YouTube API
- **Category Filter Bar** - Horizontal scrollable category chips
- **Active State Highlighting** - Visual feedback for selected category
- **Sidebar Navigation** - Collapsible navigation with sections:
  - Main (Home, Shorts, Subscriptions)
  - Library (Channel, History, Videos, Watch Later, Liked)
  - Explore (News, Learning, Fashion & Beauty)
  - Settings (Settings, Report History, Help, Feedback)

### 🎨 UI/UX
- **Dark Theme** - YouTube-inspired dark color scheme
- **Responsive Design** - Mobile-first approach with breakpoints
- **Smooth Animations** - Transitions and hover effects
- **Loading States** - Skeleton loaders and progress indicators
- **Empty States** - Meaningful messages for no content
- **Error Handling** - Graceful error states with recovery options
- **Custom Scrollbars** - Thin, styled scrollbars (YouTube-style)
- **Video Cards** - Modular component with thumbnail, title, channel, views, time

### ⚙️ Technical Features
- **TypeScript** - Full type safety across the application
- **React Query** - Efficient server state management with caching
- **Redux Toolkit** - Client state management for categories
- **React Router v7** - Client-side routing with nested routes
- **Custom Hooks** - Reusable logic (useVideoActions, etc.)
- **Component Architecture** - Modular, reusable components
- **Utility Functions** - Centralized formatting (views, dates, durations)

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | React | 19.2 |
| **Language** | TypeScript | 5.9 |
| **Build Tool** | Vite | 7.3 |
| **Styling** | Tailwind CSS | 4.1 |
| **UI Components** | shadcn/ui, Radix UI | Latest |
| **Routing** | React Router DOM | 7.13 |
| **State Management** | Redux Toolkit | 2.11 |
| **Server State** | React Query (TanStack) | 5.90 |
| **HTTP Client** | Axios | 1.13 |
| **Icons** | Lucide React | 0.574 |
| **Animations** | Motion | 12.34 |
| **Forms** | React Hook Form | 7.71 |
| **Slider** | Swiper | 12.1 |
| **Virtualization** | React Virtuoso | 4.18 |

---

## 📁 Project Structure

```
src/
├── api/                          # API integration layer
│   ├── Categories.ts             # Categories API (get, single)
│   ├── Channel.ts                # Channel details & videos API
│   ├── Search.ts                 # Search & suggestions API
│   ├── VideoDetails.ts           # Video details, comments, related
│   └── Videos.ts                 # Videos by category API
│
├── components/
│   ├── shared/                   # Reusable shared components
│   │   ├── loader.tsx            # Progress bar loader
│   │   ├── Logo.tsx              # YouTube logo
│   │   └── Slider.tsx            # Swiper slider wrapper
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── radio-group.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── switch.tsx
│   │   ├── textarea.tsx
│   │   └── tooltip.tsx
│   └── VideoCard/                # Modular video card
│       ├── index.tsx             # Main component
│       ├── VideoThumbnail.tsx    # Thumbnail with duration
│       ├── ChannelAvatar.tsx     # Channel avatar
│       ├── VideoInfo.tsx         # Title, channel, views
│       └── MoreOptionsButton.tsx # Three dots menu
│
├── hooks/                        # Custom React hooks
│   └── use-mobile.ts             # Mobile detection hook
│
├── layout/
│   ├── header/
│   │   ├── Categories.tsx        # Category filter bar
│   │   ├── Header.tsx            # Main header
│   │   └── SearchBar.tsx         # Search with dropdown
│   ├── MainLayout/
│   │   └── MainLayout.tsx        # App layout wrapper
│   ├── sideBar/
│   │   └── SideBar.tsx           # Navigation sidebar
│   └── header/
│       └── VideosSection.tsx     # Video grid section
│
├── lib/
│   ├── utils.ts                  # Utility functions (cn helper)
│   └── video.ts                  # Video formatting utilities
│       ├── formatDuration()      # PT3M54S → 3:54
│       ├── formatViews()         # 1739901 → 1.7M views
│       ├── timeAgo()             # ISO date → "6 days ago"
│       ├── getThumbnailUrl()     # Best quality thumbnail
│       ├── getChannelInitials()  # Channel name → "M"
│       ├── formatSubscriberCount()    # Short format
│       ├── formatFullSubscriberCount() # Full number
│       ├── formatFullViewCount()      # Full view count
│       ├── formatVideoCount()         # With label
│       ├── extractEmail()             # From description
│       └── formatDateLong()           # Long date format
│
├── pages/
│   ├── ChannelDetails/           # Channel page components
│   │   ├── ChannelDetails.tsx    # Main component
│   │   ├── ChannelHeader.tsx     # Header with stats
│   │   ├── ChannelAbout.tsx      # About tab content
│   │   ├── ChannelTabs.tsx       # Tab navigation
│   │   └── ChannelComponents.tsx # Shared components
│   │
│   ├── VideoDetails/             # Video page components
│   │   ├── VideoDetails.tsx      # Main component
│   │   ├── VideoActions.tsx      # Like/share/subscribe
│   │   ├── VideoDescription.tsx  # Description box
│   │   ├── VideoComments.tsx     # Comments section
│   │   ├── RelatedVideos.tsx     # Sidebar videos
│   │   └── useVideoActions.ts    # State management hook
│   │
│   ├── HomePage/
│   │   └── HomePage.tsx          # Home with categories
│   │
│   ├── SearchResults/
│   │   └── SearchResults.tsx     # Search results page
│   │
│   ├── Settings/
│   │   └── Settings.tsx          # Settings page (tabs)
│   │
│   ├── ReportHistory/
│   │   └── ReportHistory.tsx     # Report history (empty)
│   │
│   ├── Help/
│   │   └── Help.tsx              # Help center with search
│   │
│   ├── SendFeedback/
│   │   └── SendFeedback.tsx      # Feedback form
│   │
│   ├── Profile/
│   │   └── Profile.tsx           # User profile
│   │
│   └── NotFound/
│       └── NotFound.tsx          # 404 page
│
├── providers/
│   └── providers.tsx             # Redux & React Query providers
│
├── queries/                      # React Query hooks
│   ├── FetchCategories.ts        # Categories & videos queries
│   ├── FetchVideos.ts            # Videos by category
│   ├── Search.ts                 # Search & suggestions
│   └── VideoDetails.ts           # Video details & comments
│   └── Channel.ts                # Channel details & videos
│
├── routes/
│   └── AppRoutes.tsx             # Route configuration
│
├── store/                        # Redux store
│   ├── CategorySlice.ts          # Category state slice
│   └── Store.ts                  # Store configuration
│
├── types/                        # TypeScript types
│   ├── Category.ts               # Video category types
│   ├── Channel.ts                # Channel detail types
│   ├── Comment.ts                # Comment thread types
│   ├── Search.ts                 # Search result types
│   ├── Video.ts                  # Video detail types
│   └── ChildrenTypes.ts          # Children prop type
│
├── App.tsx                       # Root component
├── App.css                       # Global styles & variables
├── index.css                     # Base styles & scrollbars
├── main.tsx                      # Application entry point
└── vite-env.d.ts                 # Vite type declarations
```

---

## 🔌 API Integration

### YouTube Data API v3 Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/videoCategories` | GET | Fetch all video categories by region |
| `/videos` | GET | Get video details by ID |
| `/videos?chart=mostPopular` | GET | Get popular videos by category |
| `/search` | GET | Search videos by query |
| `/channels` | GET | Get channel details by ID |
| `/commentThreads` | GET | Get video comments |

### Google Suggestions API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/complete/search` | GET | Autocomplete suggestions for search |

### API Functions

```typescript
// Categories
GetAllCategories()
GetSingleCategory(id)
GetVideosByCategory(categoryId)

// Search
SearchVideos(query, maxResults)
GetSearchSuggestions(query)

// Video Details
GetVideoDetails(videoId)
GetRelatedVideos(videoId)
GetVideoComments(videoId)

// Channel
GetChannelDetails(channelId)
GetChannelVideos(channelId)
GetChannelByCustomUrl(customUrl)
```

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Home with categories and videos |
| `/watch?v={id}` | VideoDetails | Video playback page |
| `/channel?channelId={id}` | ChannelDetails | Channel profile page |
| `/results?search_query={q}` | SearchResults | Search results page |
| `/settings` | Settings | Settings page with tabs |
| `/report` | ReportHistory | Report history (empty state) |
| `/help` | Help | Help center |
| `/feedback` | SendFeedback | Feedback form |
| `/profile` | Profile | User profile |
| `*` | NotFound | 404 page |

---

## 🧩 Components

### Layout Components
- **Header** - Search bar, logo, action buttons
- **SideBar** - Navigation with sections
- **MainLayout** - App wrapper with sidebar

### Page Components
- **VideoCard** - Modular video thumbnail card
- **VideosSection** - Video grid with category filter
- **SearchBar** - Search input with suggestions dropdown
- **ChannelBanner** - Channel header image
- **ChannelAvatar** - Profile picture
- **VideoActions** - Like/dislike/share buttons
- **VideoDescription** - Expandable description
- **VideoComments** - Comments section

### UI Components (shadcn/ui)
- Button, Card, Input, Select, Switch
- Checkbox, RadioGroup, Label, Textarea
- Separator, Skeleton, Sheet, Sidebar
- Tooltip

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ and npm
- YouTube Data API v3 key

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amrr-Maherr/Youtube.git
   cd youtube
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file:
   ```env
   VITE_YOUTUB_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## ⚙️ Environment Setup

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_YOUTUB_API_KEY` | YouTube Data API v3 key | `AIzaSyB...` |

### Getting YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **YouTube Data API v3**
4. Create credentials → **API Key**
5. Copy the key to your `.env` file

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 💡 Future Enhancements

Based on the current API integration, here are suggested features to implement:

### 1. **Playlist Features** 📋
- **API**: `playlistItems`, `playlists`
- Create and manage playlists
- Add/remove videos from playlists
- Display playlist with video list
- Share playlists

### 2. **Comments System** 💬
- **API**: `comments`, `commentThreads`
- Post new comments (requires OAuth)
- Reply to comments
- Like/dislike comments
- Sort by top/newest first
- Pagination for large comment sections

### 3. **Video Upload** 📤
- **API**: `videos.insert` (requires OAuth)
- Upload videos with metadata
- Progress bar for uploads
- Thumbnail upload
- Privacy settings (public/unlisted/private)

### 4. **Subscriptions Feed** 📺
- **API**: `activities`, `subscriptions`
- Display subscribed channels' latest videos
- Manage subscriptions (subscribe/unsubscribe)
- Notification bell for new uploads

### 5. **Watch History** 📜
- **API**: Local storage or backend
- Track watched videos
- Resume from last position
- Clear history option

### 6. **Liked Videos** 👍
- **API**: `videos.rate` (requires OAuth)
- Like/dislike videos
- Display liked videos playlist
- Private by default

### 7. **Live Streaming** 🎥
- **API**: `search?eventType=live`
- Discover live streams
- Live chat integration
- Live stream notifications

### 8. **Video Recommendations** 🎯
- **API**: `videos?chart=mostPopular`
- Personalized recommendations
- Trending videos by category
- Related videos algorithm

### 9. **Channel Customization** 🎨
- **API**: `channels.update` (requires OAuth)
- Update channel banner/avatar
- Edit channel description
- Manage channel keywords

### 10. **Search Filters** 🔍
- **API**: `search` with parameters
- Filter by upload date
- Filter by type (video/channel/playlist)
- Filter by duration (short/medium/long)
- Sort by relevance/date/rating/views

### 11. **Closed Captions** 📝
- **API**: `captions`
- Display available captions
- Toggle captions on/off
- Multiple language support

### 12. **Backend Integration** 🔙
- **Database**: Store user data, preferences, history
- **Authentication**: OAuth 2.0 for YouTube API
- **API Proxy**: Cache API responses, rate limiting
- **Analytics**: Track user behavior, popular content

### 13. **Progressive Web App (PWA)** 📱
- Offline video playback (cached)
- Push notifications for new uploads
- Install as native app
- Background sync

### 14. **Advanced Features** 🚀
- **Watch Party**: Synchronized viewing with friends
- **Video Editor**: Trim, add filters, merge clips
- **Analytics Dashboard**: Views, engagement, demographics
- **Monetization**: Ads, memberships, Super Chat
- **Shorts**: Vertical short-form videos (TikTok-style)

---

## 📄 License

This project is for **educational purposes**. YouTube is a trademark of Google LLC.

---

## 👨‍💻 Author

**Amrr Maherr**

- GitHub: [@Amrr-Maherr](https://github.com/Amrr-Maherr)
- Project: [YouTube Clone](https://github.com/Amrr-Maherr/Youtube)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 Acknowledgments

- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Query](https://tanstack.com/query)
- [Radix UI](https://www.radix-ui.com/)
