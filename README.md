# YouTube Clone 🎬

> **A production-ready, full-featured video streaming platform** built with React 19, TypeScript, and the YouTube Data API v3. This project replicates YouTube's core functionality with a modern, sleek dark-themed interface, featuring real-time search, video playback, channel management, and intelligent category-based content discovery.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Amrr-Maherr/Youtube)

---

## 🎯 Project Description

### What is This Project?

This is **not just a simple clone** - it's a comprehensive video streaming platform that demonstrates enterprise-level React development practices. Built from the ground up with modern web technologies, it showcases:

- **Real-world API integration** with YouTube Data API v3
- **Production-grade architecture** with clean separation of concerns
- **Type-safe development** with comprehensive TypeScript coverage
- **Performance-optimized** data fetching with React Query
- **Accessible UI components** following industry best practices
- **Responsive design** that works seamlessly across all devices

### Why This Project Exists

This project serves multiple purposes:

1. **Learning Resource** - Demonstrates modern React patterns and best practices
2. **Portfolio Piece** - Showcases full-stack development capabilities
3. **Starter Template** - Provides a solid foundation for video-based applications
4. **Technical Exploration** - Explores complex UI/UX challenges in video platforms

### Who Is This For?

- **Developers** looking to learn modern React ecosystem
- **Companies** building video-centric platforms
- **Students** studying web application architecture
- **Open Source Contributors** interested in video technologies

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Environment Setup](#-environment-setup)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)
- [License](#-license)

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

### Live Demo

🔗 [https://youtube-clone-your-domain.vercel.app](https://youtube-clone-your-domain.vercel.app)

---

## ✨ Features

### 🔍 Search & Discovery

| Feature | Description |
|---------|-------------|
| **Real-time Search** | Instant search results as you type with debouncing |
| **Search Suggestions** | Autocomplete powered by Google Suggestions API |
| **Search Results Page** | Dedicated page with filtered video results |
| **Keyboard Navigation** | Arrow keys support in search dropdown |

### 📺 Video Features

| Feature | Description |
|---------|-------------|
| **Video Playback** | Embedded YouTube player with full controls |
| **Video Details Page** | Complete video information, stats, and metadata |
| **Like/Dislike System** | Interactive engagement buttons with state management |
| **Share Functionality** | Web Share API or clipboard copy fallback |
| **Expandable Description** | Show more/less functionality with smooth transitions |
| **Duration Badge** | Video duration overlay on thumbnails (ISO 8601 parsing) |
| **View Count & Publish Date** | Real-time formatted statistics |

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
| **Related Videos** | Sidebar with related content from same category |

### 🏷️ Categories & Navigation

| Feature | Description |
|---------|-------------|
| **Dynamic Categories** | Real-time data fetched from YouTube API |
| **Category Filter Bar** | Horizontal scrollable category chips |
| **Active State Highlighting** | Visual feedback for selected category |
| **Sidebar Navigation** | Collapsible navigation with multiple sections |

### 🎨 UI/UX

| Feature | Description |
|---------|-------------|
| **Dark Theme** | YouTube-inspired dark color scheme |
| **Responsive Design** | Mobile-first approach with Tailwind breakpoints |
| **Smooth Animations** | Transitions and hover effects |
| **Loading States** | Progress bar loader and skeleton screens |
| **Error Handling** | Graceful error states with recovery options |
| **Custom Scrollbars** | Thin, styled scrollbars |

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

### Utilities & Optimization

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Class Names** | [clsx](https://github.com/lukeed/clsx) | 2.1 | Conditional class names |
| **Tailwind Merge** | [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.4 | Merge Tailwind classes efficiently |
| **SEO** | [React Helmet](https://github.com/nfl/react-helmet) | 6.1 | Dynamic meta tags and SEO |

---

## 💡 Technical Highlights

### Architecture Patterns

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

### Key Technical Decisions

| Decision | Technology | Rationale |
|----------|------------|-----------|
| **Server State** | TanStack Query | Automatic caching, background refetching, optimistic updates |
| **Type Safety** | TypeScript | Catch errors at compile time, better DX, self-documenting code |
| **Styling** | Tailwind CSS | Rapid development, consistent design system, small bundle |
| **Component Library** | shadcn/ui | Copy-paste components, full control, no runtime dependency |
| **Build Tool** | Vite | Instant HMR, fast builds, modern ES modules |

### Code Quality Features

- ✅ **Strict TypeScript** configuration with no implicit any
- ✅ **ESLint** with React hooks and best practices rules
- ✅ **Memoization** with React.memo and useMemo/useCallback
- ✅ **Custom Hooks** for reusable logic (useVideoActions, etc.)
- ✅ **Utility Functions** for consistent formatting (dates, numbers, durations)
- ✅ **Error Boundaries** for graceful error handling
- ✅ **Loading States** with skeleton loaders and progress indicators

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
- Automatic caching with configurable stale time
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
- Time-travel debugging
- Predictable state updates
- Easy to test

---

## 📁 Project Structure

```
youtube/
├── src/
│   ├── api/                    # API integration layer
│   ├── components/
│   │   ├── Avatar/             # Avatar component
│   │   ├── PageHeader/         # SEO meta tags component
│   │   ├── ShortCard/          # Shorts video card
│   │   ├── shared/             # Reusable shared components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── VideoCard/          # Video card (modular)
│   │   └── VideosSection/      # Video grid section
│   ├── layout/
│   │   ├── header/
│   │   ├── MainLayout/
│   │   └── sideBar/
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Page components
│   ├── providers/              # App providers
│   ├── queries/                # React Query hooks
│   ├── routes/                 # Route configuration
│   ├── store/                  # Redux store
│   ├── types/                  # TypeScript types
│   └── App.tsx                 # Root component
├── .env                        # Environment variables
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
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

---

## 🚀 Installation

### Prerequisites

- **Node.js** 18+ and **npm**
- **YouTube Data API v3** key

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

---

## ⚙️ Environment Setup

### Required Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_YOUTUB_API_KEY` | YouTube Data API v3 key | ✅ Yes |

### Getting YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Library**
4. Search for **"YouTube Data API v3"** and enable it
5. Go to **Credentials** → **Create Credentials** → **API Key**
6. Copy the generated key to your `.env` file

---

## 💻 Usage

### Development

```bash
# Start development server
npm run dev
```

### Building

```bash
# Build for production
npm run build
```

### Deployment

#### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

#### Manual Hosting

```bash
npm run build
# Upload dist/ folder to any static hosting
```

---

## 🔌 API Reference

### YouTube Data API v3 Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/videoCategories` | GET | Fetch all video categories |
| `/videos` | GET | Get video details by ID |
| `/videos?chart=mostPopular` | GET | Get popular videos by category |
| `/search` | GET | Search videos by query |
| `/channels` | GET | Get channel details by ID |
| `/commentThreads` | GET | Get video comments |

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🔮 Future Enhancements

### Planned Features

- [ ] User Authentication (OAuth 2.0)
- [ ] Video Upload
- [ ] Playlist Management
- [ ] Watch History
- [ ] Comments System
- [ ] Subscriptions Feed
- [ ] PWA Support (Offline Mode)
- [ ] Dark/Light Theme Toggle

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **MIT License**.

**Disclaimer:** YouTube is a trademark of Google LLC. This project is for educational purposes only and is not affiliated with or endorsed by Google.

---

## 👨‍💻 Author

**Amrr Maherr**

- GitHub: [@Amrr-Maherr](https://github.com/Amrr-Maherr)
- Project: [YouTube Clone](https://github.com/Amrr-Maherr/Youtube)

---

## 🙏 Acknowledgments

- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [TanStack Query](https://tanstack.com/query)

---

<div align="center">

**Made with ❤️ using React, TypeScript, and Tailwind CSS**

⭐ Star this repo if you find it helpful!

</div>
