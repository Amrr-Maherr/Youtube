# YouTube Clone 🎬

> **A production-ready, full-featured video streaming platform** built with React 19, TypeScript, and the YouTube Data API v3. This project replicates YouTube's core functionality with a modern, sleek dark-themed interface, featuring real-time search, video playback, channel management, and intelligent category-based content discovery.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

[![Deploy with Vercel](https://vercel.com/button)](https://youtube-omega-gilt-35.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [State Management](#-state-management)
- [Key Components](#-key-components)
- [Routing](#-routing)
- [PWA Features](#-pwa-features)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

This YouTube clone is a **production-ready video platform interface** that replicates the core functionality and design of YouTube. Built with modern web technologies and industry best practices, it provides a complete solution for video content discovery, playback, and channel management.

### 🌟 Key Highlights

- **Real-time video search** with autocomplete suggestions powered by Google Suggestions API
- **Intelligent category-based browsing** with dynamic filtering from YouTube API
- **Full video playback** with embedded YouTube player and complete controls
- **Comprehensive channel pages** with profile information, statistics, and video libraries
- **Responsive design** with mobile-first approach for all device sizes
- **Dark theme** optimized for extended video consumption sessions
- **SEO optimization** with dynamic meta tags and semantic HTML
- **Type-safe codebase** with comprehensive TypeScript coverage
- **Performance-optimized** with React Query caching and background refetching
- **PWA support** for installable, offline-capable experience

---

## 🔗 Live Demo

🔗 **[https://youtube-omega-gilt-35.vercel.app/](https://youtube-omega-gilt-35.vercel.app/)**

---

## ✨ Features

### 🔍 Search & Discovery

| Feature | Description |
|---------|-------------|
| **Real-time Search** | Instant search results as you type with debouncing |
| **Search Suggestions** | Autocomplete powered by Google Suggestions API (JSONP) |
| **Search Results Page** | Dedicated page with filtered video results |
| **Keyboard Navigation** | Arrow keys support in search dropdown |
| **Clear Button** | Quick clear search input with X button |

### 📺 Video Features

| Feature | Description |
|---------|-------------|
| **Video Playback** | Embedded YouTube player with full controls |
| **Video Details Page** | Complete video information, stats, and metadata |
| **Like/Dislike System** | Interactive engagement buttons with Redux state management |
| **Share Functionality** | Web Share API or clipboard copy fallback |
| **Expandable Description** | Show more/less functionality with smooth transitions |
| **Duration Badge** | Video duration overlay on thumbnails (ISO 8601 parsing) |
| **View Count & Publish Date** | Real-time formatted statistics |
| **Related Videos** | Sidebar with related content from same category |

### 👥 Channel Features

| Feature | Description |
|---------|-------------|
| **Channel Profile Page** | Complete channel information and branding |
| **Channel Banner** | Custom banner image with graceful fallback |
| **Channel Avatar** | Profile picture with verified badge support |
| **Subscribe Button** | Toggle subscription with visual feedback |
| **Channel Stats** | Subscribers, total views, video count (formatted) |
| **Channel Tabs** | Videos, Shorts, Playlists, Community, About |
| **Channel Details** | Email extraction, country, join date, keywords |

### 🏷️ Categories & Navigation

| Feature | Description |
|---------|-------------|
| **Dynamic Categories** | Real-time data fetched from YouTube API |
| **Category Filter Bar** | Horizontal scrollable category chips |
| **Active State Highlighting** | Visual feedback for selected category |
| **Sidebar Navigation** | Collapsible navigation with multiple sections |
| **Category Videos Page** | Dedicated page for browsing videos by category |

### 📱 PWA Features

| Feature | Description |
|---------|-------------|
| **Installable App** | Can be installed on Android, iOS, and Desktop |
| **Offline Support** | Works without internet connection (cached resources) |
| **Auto-Update** | Service Worker automatically updates |
| **App Shortcuts** | Quick access to Home, Shorts, Subscriptions, Library |
| **Manifest** | Complete PWA manifest with icons and metadata |
| **Theme Color** | YouTube red (#FF0000) themed status bars |

### 🎨 UI/UX

| Feature | Description |
|---------|-------------|
| **Dark Theme** | YouTube-inspired dark color scheme |
| **Responsive Design** | Mobile-first approach with Tailwind breakpoints |
| **Smooth Animations** | Transitions and hover effects with Motion |
| **Loading States** | Progress bar loader and skeleton screens |
| **Error Handling** | Error boundaries with graceful error states |
| **Custom Scrollbars** | Thin, styled scrollbars |
| **Tooltips** | Accessible tooltips using Radix UI |

### 💝 User Interactions

| Feature | Description |
|---------|-------------|
| **Liked Videos Library** | Dedicated page for liked videos |
| **Disliked Videos** | Track disliked videos separately |
| **Mutual Exclusion** | Like automatically removes dislike and vice versa |
| **Timestamps** | Track when you interacted with videos |
| **Subscription Management** | Subscribe/unsubscribe from channels |
| **Subscriptions Feed** | View content from subscribed channels |

---

## 🛠️ Tech Stack

### Core Technologies

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | [React](https://react.dev/) | 19.2 | UI library with latest features |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.9 | Type safety and developer experience |
| **Build Tool** | [Vite](https://vitejs.dev/) | 7.3 | Fast build tooling and dev server |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Utility-first CSS framework |

### State & Data Management

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Server State** | [TanStack Query](https://tanstack.com/query) | 5.90 | API caching, sync, and background updates |
| **Client State** | [Redux Toolkit](https://redux-toolkit.js.org/) | 2.11 | Global UI state management |
| **HTTP Client** | [Axios](https://axios-http.com/) | 1.13 | API requests and interceptors |

### Routing & Forms

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Routing** | [React Router](https://reactrouter.com/) | 7.13 | Client-side routing and navigation |
| **Forms** | [React Hook Form](https://react-hook-form.com/) | 7.71 | Performant form handling |

### UI & Animation

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) | Latest | Accessible, customizable components |
| **Icons** | [Lucide React](https://lucide.dev/) | 0.574 | Tree-shakable icon library |
| **Animations** | [Motion](https://motion.dev/) | 12.34 | Smooth animations and transitions |
| **Radix UI** | [Radix](https://www.radix-ui.com/) | 1.4 | Unstyled, accessible primitives |

### Utilities & Optimization

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Class Names** | [clsx](https://github.com/lukeed/clsx) | 2.1 | Conditional class names |
| **Tailwind Merge** | [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.4 | Merge Tailwind classes efficiently |
| **SEO** | [React Helmet](https://github.com/nfl/react-helmet) | 6.1 | Dynamic meta tags and SEO |
| **Error Handling** | [React Error Boundary](https://github.com/bvaughn/react-error-boundary) | 6.1 | Graceful error recovery |
| **Virtualization** | [React Virtuoso](https://virtuoso.dev/) | 4.18 | Efficient list rendering |
| **PWA** | [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) | 1.2 | Service Worker and manifest generation |
| **Minification** | [Terser](https://terser.org/) | 5.46 | Production build optimization |

---

## 🏗️ Architecture

### Architecture Pattern: Feature-Based + Layered

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
│  Pages (Features) → Layouts → Components (UI/Shared)        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    Business Logic Layer                      │
│  Custom Hooks → Providers → State Management                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    Data Access Layer                         │
│  React Query → API Functions → YouTube Data API             │
└─────────────────────────────────────────────────────────────┘
```

### State Management Strategy

The application uses a **dual state management approach**:

#### Server State (React Query)
```typescript
// Automatic caching, background refetching, and loading states
const { data: video, isLoading, error } = FetchVideoDetails(videoId);
```

**Benefits:**
- Automatic caching with configurable stale time (5 minutes)
- Background refetching for fresh data
- Built-in loading and error states
- Request deduplication
- Optimistic updates support

#### Client State (Redux Toolkit)
```typescript
// Global UI state
const categoryId = useSelector((state) => state.category.value);
dispatch(SetCategory(categoryId));
```

**Benefits:**
- Centralized state management
- Predictable state updates via slices
- Easy to test and debug
- Persistent across sessions

---

## 📁 Project Structure

```
youtube/
├── src/
│   ├── api/                    # API integration layer
│   │   ├── Categories.ts       # Category API functions
│   │   ├── Channel.ts          # Channel API functions
│   │   ├── Search.ts           # Search API functions
│   │   └── VideoDetails.ts     # Video details API functions
│   │
│   ├── components/             # React components
│   │   ├── Avatar/             # Avatar component with fallback
│   │   ├── ErrorBoundaryWrapper/  # Error boundary HOC
│   │   ├── PageHeader/         # SEO meta tags component
│   │   ├── shared/             # Reusable shared components
│   │   │   ├── Logo.tsx        # YouTube logo
│   │   │   ├── Loader.tsx      # Loading spinner
│   │   │   └── Error.tsx       # Error display
│   │   ├── ShortCard/          # Shorts video card
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx      # Button variants
│   │   │   ├── card.tsx        # Card component
│   │   │   ├── input.tsx       # Input field
│   │   │   ├── sidebar.tsx     # Sidebar layout
│   │   │   ├── skeleton.tsx    # Loading skeleton
│   │   │   └── tooltip.tsx     # Tooltip component
│   │   ├── VideoCard/          # Video card (modular)
│   │   │   ├── ChannelAvatar.tsx
│   │   │   ├── index.tsx
│   │   │   ├── MoreOptionsButton.tsx
│   │   │   ├── VideoInfo.tsx
│   │   │   └── VideoThumbnail.tsx
│   │   └── VideosSection/      # Video grid section
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.ts       # Mobile detection hook
│   │   ├── usePWA.ts           # PWA installation hook
│   │   ├── useSubscribe.ts     # Subscription management
│   │   └── useVideoInteractions.ts  # Like/dislike logic
│   │
│   ├── layout/                 # Layout components
│   │   ├── header/
│   │   │   ├── Categories.tsx  # Category filter bar
│   │   │   ├── Header.tsx      # Main header
│   │   │   └── SearchBar.tsx   # Search with suggestions
│   │   ├── MainLayout/
│   │   │   └── MainLayout.tsx  # App shell layout
│   │   └── sideBar/
│   │       └── SideBar.tsx     # Navigation sidebar
│   │
│   ├── lib/                    # Utility functions
│   │   ├── useVideoActions.ts  # Video action helpers
│   │   ├── utils.ts            # cn() utility for classes
│   │   └── video.ts            # Video formatting utilities
│   │
│   ├── pages/                  # Page components (features)
│   │   ├── Auth/               # Sign in/up pages
│   │   ├── CategoryVideos/     # Category browsing page
│   │   ├── ChannelDetails/     # Channel profile page
│   │   ├── Help/               # Help page
│   │   ├── HomePage/           # Home feed page
│   │   ├── Library/            # Liked videos page
│   │   ├── LoadTimeout/        # Timeout error page
│   │   ├── NotFound/           # 404 page
│   │   ├── Notifications/      # Notifications page
│   │   ├── Profile/            # User profile page
│   │   ├── ReportHistory/      # Report history page
│   │   ├── SearchResults/      # Search results page
│   │   ├── SendFeedback/       # Feedback page
│   │   ├── Settings/           # Settings page
│   │   ├── Shorts/             # Shorts feed page
│   │   ├── Subscriptions/      # Subscriptions feed
│   │   └── VideoDetails/       # Video watch page
│   │
│   ├── providers/              # App providers
│   │   └── providers.tsx       # Redux + Query client
│   │
│   ├── queries/                # React Query hooks
│   │   ├── Channel.ts          # Channel queries
│   │   ├── FetchCategories.ts  # Category queries
│   │   ├── Search.ts           # Search queries
│   │   ├── Shorts.ts           # Shorts queries
│   │   └── VideoDetails.ts     # Video queries
│   │
│   ├── routes/                 # Route configuration
│   │   └── AppRoutes.tsx       # Main routing setup
│   │
│   ├── store/                  # Redux store
│   │   ├── CategorySlice.ts    # Category state
│   │   ├── Store.ts            # Store configuration
│   │   ├── SubscribeSlice.ts   # Subscription state
│   │   └── VideoInteractionsSlice.ts  # Like/dislike state
│   │
│   ├── types/                  # TypeScript types
│   │   ├── Category.ts         # Category types
│   │   ├── Channel.ts          # Channel types
│   │   ├── ChildrenTypes.ts    # Children prop types
│   │   ├── Comment.ts          # Comment types
│   │   ├── Search.ts           # Search types
│   │   └── Video.ts            # Video types
│   │
│   ├── App.css                 # Global styles
│   ├── App.tsx                 # Root component
│   ├── index.css               # Base styles
│   └── main.tsx                # Entry point
│
├── public/                     # Static assets
│   └── vite.svg                # App icon
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── components.json             # shadcn/ui config
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tsconfig.app.json           # App TypeScript config
├── tsconfig.node.json          # Node TypeScript config
├── vercel.json                 # Vercel deployment config
├── vite.config.ts              # Vite configuration
└── README.md                   # Documentation
```

---

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/home.png)
*Home page with category filter and video grid*

### Video Details
![Video Details](./screenshots/video-details.png)
*Video playback page with comments and related videos*

### Channel Page
![Channel Page](./screenshots/channel.png)
*Channel profile with tabs and videos*

### Search Results
![Search Results](./screenshots/search.png)
*Search results with suggestions dropdown*

### Shorts Feed
![Shorts](./screenshots/shorts.png)
*Short-form vertical videos feed*

### Library (Liked Videos)
![Library](./screenshots/library.png)
*User's liked videos collection*

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** for version control

### Step-by-Step Guide

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

   Create a `.env` file in the root directory:
   ```env
   VITE_YOUTUB_API_KEY=your_youtube_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

---

## ⚙️ Environment Setup

### Required Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_YOUTUB_API_KEY` | YouTube Data API v3 key | ✅ Yes | `AIzaSyD...` |

### Getting YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Library**
4. Search for **"YouTube Data API v3"** and enable it
5. Go to **Credentials** → **Create Credentials** → **API Key**
6. Copy the generated key to your `.env` file

> ⚠️ **Important:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

### API Quota Limits

The YouTube Data API has daily quota limits:

| Quota Type | Default Limit |
|------------|---------------|
| Daily quota | 10,000 units |
| Read operations | ~1-50 units each |
| Write operations | ~50-1600 units each |

**Cost Examples:**
- `videos.list` - 1 unit
- `search.list` - 100 units
- `channels.list` - 1 unit

---

## 💻 Usage

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

### Building for Production

```bash
# Create optimized production build
npm run build

# Output: dist/ folder with minified assets
```

### Deployment

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Manual Hosting

```bash
# Build the project
npm run build

# Upload dist/ folder to any static hosting:
# - Netlify
# - GitHub Pages
# - AWS S3 + CloudFront
# - Firebase Hosting
```

---

## 🔌 API Reference

### YouTube Data API v3 Endpoints Used

| Endpoint | Method | Description | Quota Cost |
|----------|--------|-------------|------------|
| `/videoCategories` | GET | Fetch all video categories | 1 unit |
| `/videos` | GET | Get video details by ID | 1 unit |
| `/videos?chart=mostPopular` | GET | Get popular videos by category | 1 unit |
| `/search` | GET | Search videos by query | 100 units |
| `/channels` | GET | Get channel details by ID | 1 unit |
| `/commentThreads` | GET | Get video comments | 1 unit |

### API Functions

#### Categories API (`src/api/Categories.ts`)

```typescript
// Get all video categories
GetAllCategories(): Promise<Category[]>

// Get videos by category ID
GetVideosByCategory(categoryId: string): Promise<Video[]>
```

#### Videos API (`src/api/VideoDetails.ts`)

```typescript
// Get video details
GetVideoDetails(videoId: string): Promise<Video>

// Get related videos
GetRelatedVideos(videoId: string, maxResults?: number): Promise<Video[]>

// Get video comments
GetVideoComments(videoId: string, maxResults?: number): Promise<Comment[]>
```

#### Channels API (`src/api/Channel.ts`)

```typescript
// Get channel details
GetChannelDetails(channelId: string): Promise<Channel>

// Get channel videos
GetChannelVideos(channelId: string, maxResults?: number): Promise<Video[]>
```

#### Search API (`src/api/Search.ts`)

```typescript
// Search videos
SearchVideos(query: string, maxResults?: number): Promise<SearchItem[]>

// Get search suggestions (Google Suggestions API)
GetSearchSuggestions(query: string): Promise<string[]>
```

### Request/Response Examples

#### Get Video Details

**Request:**
```
GET https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=dQw4w9WgXcQ&key=YOUR_API_KEY
```

**Response:**
```json
{
  "kind": "youtube#videoListResponse",
  "items": [
    {
      "id": "dQw4w9WgXcQ",
      "snippet": {
        "title": "Video Title",
        "description": "Video description...",
        "thumbnails": {
          "high": {
            "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelId": "UC...",
        "channelTitle": "Channel Name",
        "publishedAt": "2024-01-01T00:00:00Z"
      },
      "contentDetails": {
        "duration": "PT3M32S",
        "definition": "hd"
      },
      "statistics": {
        "viewCount": "1000000",
        "likeCount": "50000"
      }
    }
  ]
}
```

---

## 🗄️ State Management

### Redux Slices

#### Category Slice (`src/store/CategorySlice.ts`)

Manages the currently selected video category.

```typescript
interface CategoryState {
  value: string; // Selected category ID
}
```

**Actions:**
- `SetCategory(categoryId: string)` - Set active category

#### Subscribe Slice (`src/store/SubscribeSlice.ts`)

Manages user subscriptions to channels.

```typescript
interface Subscription {
  channelId: string;
  channelName: string;
  channelAvatar?: string;
  isSubscribed: boolean;
  subscribedAt?: string;
}

interface SubscribeState {
  subscriptions: Subscription[];
  subscribedChannelIds: Record<string, boolean>;
}
```

**Actions:**
- `subscribe(subscription: Subscription)` - Subscribe to channel
- `unsubscribe(channelId: string)` - Unsubscribe from channel
- `toggleSubscribe(subscription: Subscription)` - Toggle subscription
- `setSubscriptions(subscriptions: Subscription[])` - Bulk set

#### Video Interactions Slice (`src/store/VideoInteractionsSlice.ts`)

Manages liked and disliked videos.

```typescript
interface VideoInteraction {
  videoId: string;
  videoTitle: string;
  videoThumbnail?: string;
  channelName: string;
  channelId: string;
  isLiked: boolean;
  isDisliked: boolean;
  interactedAt?: string;
}

interface VideoInteractionsState {
  likedVideos: VideoInteraction[];
  dislikedVideos: VideoInteraction[];
  likedVideoIds: Record<string, boolean>;
  dislikedVideoIds: Record<string, boolean>;
}
```

**Actions:**
- `likeVideo(video: VideoInteraction)` - Like a video
- `unlikeVideo(videoId: string)` - Remove like
- `dislikeVideo(video: VideoInteraction)` - Dislike a video
- `removeDislike(videoId: string)` - Remove dislike
- `toggleLike(video: VideoInteraction)` - Toggle like status
- `toggleDislike(video: VideoInteraction)` - Toggle dislike status

### Custom Hooks

#### useVideoInteractions

```typescript
const {
  likedVideos,
  dislikedVideos,
  likedVideoIds,
  dislikedVideoIds,
  toggleLike,
  toggleDislike,
  isLiked,
  isDisliked,
} = useVideoInteractions();
```

#### useSubscribe

```typescript
const {
  subscriptions,
  subscribedChannelIds,
  subscribe,
  unsubscribe,
  toggleSubscribe,
  isSubscribed,
} = useSubscribe();
```

---

## 🧩 Key Components

### Layout Components

#### MainLayout
The main application shell containing the header and sidebar.

```tsx
<SidebarProvider>
  <YouTubeSidebar />
  <SidebarInset>
    <Header />
    <Outlet />
  </SidebarInset>
</SidebarProvider>
```

#### Header
Top navigation bar with logo, search, and user actions.

**Features:**
- Collapsible sidebar trigger
- Search bar with suggestions
- Notifications bell
- User profile button

#### SideBar
Navigation sidebar with main links, library, explore, and categories.

**Sections:**
- Main (Home, Shorts, Subscriptions)
- Library (Your channel, History, Liked videos)
- Explore (News, Learning, Fashion)
- Categories (Dynamic from API)
- Settings (Settings, Help, Feedback)

### Feature Components

#### VideoCard
Modular video card component with thumbnail, title, channel info, and duration.

**Sub-components:**
- `VideoThumbnail` - Thumbnail with duration badge
- `ChannelAvatar` - Channel avatar with name
- `VideoInfo` - Title, views, publish date
- `MoreOptionsButton` - Options menu trigger

#### SearchBar
Search input with real-time suggestions.

**Features:**
- Debounced input
- Google Suggestions API integration
- Keyboard navigation (Arrow keys, Enter, Escape)
- Clear button
- Mobile responsive

#### VideosSection
Grid section for displaying videos.

**Features:**
- Responsive grid layout
- Virtual scrolling support
- Loading skeletons

---

## 🛣️ Routing

### Route Configuration (`src/routes/AppRoutes.tsx`)

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Main feed with category filter |
| `/shorts` | Shorts | Short-form videos feed |
| `/subscriptions` | Subscriptions | Subscribed channels feed |
| `/library` | Library | Liked videos collection |
| `/results` | SearchResults | Search results page |
| `/watch` | VideoDetails | Video watch page |
| `/channel` | ChannelDetails | Channel profile page |
| `/category` | CategoryVideos | Category browsing page |
| `/profile` | Profile | User profile page |
| `/settings` | Settings | Settings page |
| `/notifications` | Notifications | Notifications page |
| `/report` | ReportHistory | Report history page |
| `/help` | Help | Help page |
| `/feedback` | SendFeedback | Send feedback page |
| `/signin` | SignIn | Sign in page |
| `/signup` | SignUp | Sign up page |
| `*` | NotFound | 404 page |

### Lazy Loading

All routes use React.lazy() with Suspense for code splitting:

```tsx
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

<Suspense fallback={<LoadingFallback />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</Suspense>
```

---

## 📱 PWA Features

### Configuration (`vite.config.ts`)

```typescript
VitePWA({
  registerType: 'autoUpdate',
  injectRegister: 'auto',
  manifest: {
    name: 'YouTube Clone - Video Streaming Platform',
    short_name: 'YouTube',
    theme_color: '#FF0000',
    background_color: '#0F0F0F',
    display: 'standalone',
    icons: [...],
    shortcuts: [
      { name: 'Home', url: '/' },
      { name: 'Shorts', url: '/shorts' },
      { name: 'Subscriptions', url: '/subscriptions' },
      { name: 'Library', url: '/library' }
    ]
  }
})
```

### Features

- **Auto-update**: Service Worker updates automatically
- **Offline support**: Cached resources work offline
- **App shortcuts**: Right-click app icon for quick actions
- **Installable**: Add to home screen on mobile/desktop

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git fork https://github.com/Amrr-Maherr/Youtube.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow existing code style
   - Add TypeScript types
   - Test your changes

4. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

### Contribution Guidelines

- Use meaningful commit messages (Conventional Commits)
- Write clear, concise code with proper TypeScript types
- Test your changes thoroughly
- Update documentation if needed
- Be respectful and constructive in discussions

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Amrr Maherr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**Disclaimer:** YouTube is a trademark of Google LLC. This project is for educational purposes only and is not affiliated with or endorsed by Google.

---

## 🙏 Acknowledgments

- [YouTube Data API v3](https://developers.google.com/youtube/v3) - Video content API
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful, accessible UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [React Router](https://reactrouter.com/) - Declarative routing
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Motion](https://motion.dev/) - Animation library

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/Amrr-Maherr/Youtube/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Amrr-Maherr/Youtube/discussions)

---

<div align="center">

**Made with ❤️ using React, TypeScript, and Tailwind CSS**

⭐ Star this repo if you find it helpful!

[Report a Bug](https://github.com/Amrr-Maherr/Youtube/issues) · [Request Feature](https://github.com/Amrr-Maherr/Youtube/issues) · [Discussions](https://github.com/Amrr-Maherr/Youtube/discussions)

</div>
