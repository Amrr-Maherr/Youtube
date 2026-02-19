# YouTube Clone

A modern, responsive YouTube clone web application built with React, TypeScript, and Tailwind CSS. Features a sleek dark theme interface with dynamic category filtering and YouTube Data API v3 integration.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)

## 🚀 Features

- **Modern UI/UX** - Clean, YouTube-inspired dark theme interface
- **Responsive Design** - Fully responsive layout for desktop, tablet, and mobile
- **YouTube Data API v3** - Integration with YouTube's official API for categories and video data
- **Dynamic Categories** - Horizontal scrollable category bar with real-time API data
- **Collapsible Sidebar** - Navigation sidebar with smooth animations
- **Type-Safe** - Full TypeScript support for better development experience
- **State Management** - React Query for efficient server state management
- **Component Library** - Built with shadcn/ui components
- **Smooth Animations** - Powered by Framer Motion
- **Routing** - React Router v7 for navigation

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19.2 |
| **Language** | TypeScript 5.9 |
| **Build Tool** | Vite 7.3 |
| **Styling** | Tailwind CSS 4.1 |
| **UI Components** | shadcn/ui, Radix UI |
| **Routing** | React Router DOM 7.1 |
| **State Management** | Redux Toolkit, React Query 5.9 |
| **HTTP Client** | Axios 1.13 |
| **Icons** | Lucide React |
| **Animations** | Motion (Framer Motion) |
| **Forms** | React Hook Form 7.7 |
| **Slider** | Swiper 12.1 |

## 🏗️ Project Structure

```
src/
├── api/                    # API integration layer
│   └── Categories.ts       # YouTube API categories endpoint
├── components/
│   ├── shared/             # Reusable shared components
│   │   ├── loader.tsx      # Progress bar loader
│   │   ├── Logo.tsx        # YouTube logo component
│   │   └── Slider.tsx      # Swiper slider wrapper
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       └── tooltip.tsx
├── hooks/                  # Custom React hooks
├── layout/
│   ├── header/
│   │   ├── Categories.tsx  # Category filter bar
│   │   └── Header.tsx      # Main header with search
│   ├── MainLayout/
│   │   └── MainLayout.tsx  # App layout wrapper
│   └── sideBar/
│       └── SideBar.tsx     # Navigation sidebar
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── pages/
│   ├── HomePage/
│   │   └── HomePage.tsx    # Home page component
│   └── Profile/
│       └── Profile.tsx     # User profile page
├── provider/
│   └── Provider.tsx        # React Query provider
├── queries/
│   └── FetchCategories.ts  # React Query hook for categories
├── routes/
│   └── AppRoutes.tsx       # Application routes configuration
├── store/                  # Redux store (empty - for future use)
├── types/
│   ├── Category.ts         # YouTube category TypeScript types
│   └── ChildrenTypes.ts    # Children prop type definition
├── App.tsx                 # Root component
├── App.css                 # Global styles & CSS variables
├── index.css               # Base styles & scrollbar utilities
├── main.tsx                # Application entry point
└── vite-env.d.ts           # Vite type declarations
```

## 🛠️ Installation

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
   
   Create a `.env` file in the root directory:
   ```env
   # YouTube API Key
   VITE_YOUTUB_API_KEY=your_api_key_here

   # YouTube Data API v3 Base URL
   YOUTUBE_API_BASE_URL=https://www.googleapis.com/youtube/v3

   # Video Categories Endpoint
   VITE_ENDPOINT_VIDEO_CATEGORIES_LIST_BY_REGION=/videoCategories?part=snippet&regionCode={regionCode}
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_YOUTUB_API_KEY` | YouTube Data API v3 key | `AIzaSy...` |
| `YOUTUBE_API_BASE_URL` | YouTube API base URL | `https://www.googleapis.com/youtube/v3` |
| `VITE_ENDPOINT_VIDEO_CATEGORIES_LIST_BY_REGION` | Categories endpoint | `/videoCategories?part=snippet&regionCode={regionCode}` |

### Getting YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable YouTube Data API v3
4. Create credentials → API Key
5. Copy the key to your `.env` file

## 🎨 UI Components

### Header
- Logo and menu toggle
- Search bar with voice input button
- Action buttons (create, notifications, profile)
- Responsive mobile search bar

### Categories Bar
- Horizontal scrollable category chips
- Dynamic data from YouTube API
- Active/inactive state styling
- Drag-to-scroll functionality
- Hidden scrollbar for clean look

### Sidebar
- Main navigation (Home, Shorts, Subscriptions)
- Library section (Channel, History, Videos, Watch Later, Liked)
- Explore section (News, Learning, Fashion)
- Settings section (Settings, Report, Help, Feedback)
- Active state highlighting
- Collapsible with smooth animations

### Loader
- Top progress bar animation
- YouTube red gradient colors
- Fixed positioning at top of page

## 📱 Responsive Breakpoints

| Breakpoint | Width | Slides Per View |
|------------|-------|-----------------|
| Mobile | < 640px | 3 categories |
| Tablet | 640px - 768px | 2 categories |
| Desktop | 768px - 1024px | 3 categories |
| Large | > 1024px | 10 categories |

## 🚦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Vercel

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

**Environment Variables on Vercel:**
- Go to Project Settings → Environment Variables
- Add all variables from `.env` file

## 📄 License

This project is for educational purposes. YouTube is a trademark of Google LLC.

## 👨‍💻 Author

**Amrr Maherr**

- GitHub: [@Amrr-Maherr](https://github.com/Amrr-Maherr)
- Project: [YouTube Clone](https://github.com/Amrr-Maherr/Youtube)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 Acknowledgments

- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Query](https://tanstack.com/query)
