# YouTube Clone 🎬

A modern, full-featured YouTube clone built with React 19, TypeScript, and the YouTube Data API v3. Features a sleek dark-themed interface, real-time search, video playback, channel pages, and comprehensive category filtering.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Amrr-Maherr/Youtube)

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

This YouTube clone is a production-ready video platform interface that replicates the core functionality and design of YouTube. Built with modern web technologies and best practices, it provides:

- **Real-time video search** with autocomplete suggestions
- **Category-based browsing** with dynamic filtering
- **Full video playback** with YouTube embed
- **Channel pages** with complete profile information
- **Responsive design** for all device sizes
- **Dark theme** optimized for video consumption
- **SEO optimization** with dynamic meta tags

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

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | [React](https://react.dev/) | 19.2 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5.9 |
| **Build Tool** | [Vite](https://vitejs.dev/) | 7.3 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4.1 |

### State & Data

| Category | Technology | Version |
|----------|------------|---------|
| **Server State** | [TanStack Query](https://tanstack.com/query) | 5.90 |
| **Client State** | [Redux Toolkit](https://redux-toolkit.js.org/) | 2.11 |
| **HTTP Client** | [Axios](https://axios-http.com/) | 1.13 |

### Routing & Forms

| Category | Technology | Version |
|----------|------------|---------|
| **Routing** | [React Router](https://reactrouter.com/) | 7.13 |
| **Forms** | [React Hook Form](https://react-hook-form.com/) | 7.71 |

### UI & Animation

| Category | Technology | Version |
|----------|------------|---------|
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) | Latest |
| **Icons** | [Lucide React](https://lucide.dev/) | 0.574 |
| **Animations** | [Motion](https://motion.dev/) | 12.34 |

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

- **Server State:** TanStack Query (React Query) for API caching and synchronization
- **Client State:** Redux Toolkit for global UI state

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
