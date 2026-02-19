import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Users,
  History,
  Newspaper,
  Lightbulb,
  Shirt,
  Settings,
  Flag,
  HelpCircle,
  MessageSquare,
  Clapperboard,
  Gamepad2,
  Music2,
  Trophy,
  Sparkles,
  BookOpen,
  Dumbbell,
  Car,
  UtensilsCrossed,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { FetchCategories } from "@/queries/FetchCategories";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import type { VideoCategory } from "@/types/Category";
import { useNavigate } from "react-router-dom";

const mainItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Shorts", href: "/shorts" },
  { icon: PlaySquare, label: "Subscriptions", href: "/subscriptions" },
];

const libraryItems = [
  { icon: Users, label: "Your channel", href: "/profile" },
  { icon: History, label: "History", href: "/history" },
  { icon: PlaySquare, label: "Your videos", href: "/videos" },
  { icon: Clock, label: "Watch later", href: "/watch-later" },
  { icon: ThumbsUp, label: "Liked videos", href: "/liked" },
];

const exploreItems = [
  { icon: Newspaper, label: "News", href: "/news" },
  { icon: Lightbulb, label: "Learning", href: "/learning" },
  { icon: Shirt, label: "Fashion & Beauty", href: "/fashion" },
];

const settingsItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Flag, label: "Report history", href: "/report" },
  { icon: HelpCircle, label: "Help", href: "/help" },
  { icon: MessageSquare, label: "Send feedback", href: "/feedback" },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Film & Animation": Clapperboard,
  "Autos & Vehicles": Car,
  "Music": Music2,
  "Pets & Animals": Sparkles,
  "Sports": Trophy,
  "Gaming": Gamepad2,
  "People & Blogs": Sparkles,
  "Comedy": Sparkles,
  "Entertainment": Clapperboard,
  "News & Politics": Newspaper,
  "Howto & Style": Sparkles,
  "Education": BookOpen,
  "Science & Technology": Sparkles,
  "Travel & Events": Sparkles,
  "Food": UtensilsCrossed,
  "Fitness": Dumbbell,
};

export function YouTubeSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const categoryId = useSelector((state: RootState) => state.category.value);
  const { data: categories } = FetchCategories();

  const isActive = (href: string) => location.pathname === href;

  const getCategoryIcon = (title: string) => {
    return categoryIcons[title] || Sparkles;
  };

  const handleCategoryClick = (id: string) => {
    navigate(`/category?id=${id}`);
  };

  return (
    <Sidebar className="border-none dark:bg-background py-2">
      <style>{`
        .sidebar-scroll {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        }
        .sidebar-scroll:hover {
          scrollbar-color: #71717a transparent;
        }
        .sidebar-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 3px;
          transition: background-color 0.2s;
        }
        .sidebar-scroll:hover::-webkit-scrollbar-thumb {
          background-color: #71717a;
        }
        .sidebar-scroll:hover::-webkit-scrollbar-thumb:hover {
          background-color: #a1a1aa;
        }
      `}</style>
      <SidebarContent className="sidebar-scroll max-h-screen">
        {/* Main Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                    className="data-[active=true]:dark:bg-active font-medium"
                  >
                    <Link
                      to={item.href}
                      className="flex items-center gap-5 text-[14px] font-normal px-3 py-2"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />

        {/* Library Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {libraryItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                    className="data-[active=true]:bg-gray-800 data-[active=true]:font-medium"
                  >
                    <Link to={item.href} className="flex items-center gap-5">
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />

        {/* Explore Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {exploreItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                    className="data-[active=true]:bg-gray-800 data-[active=true]:font-medium"
                  >
                    <Link to={item.href} className="flex items-center gap-5">
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />

        {/* Categories Section (from API) */}
        {categories && categories.length > 0 && (
          <>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                    Categories
                  </div>
                  {categories.slice(0, 15).map((category: VideoCategory) => {
                    const Icon = getCategoryIcon(category.snippet.title);
                    return (
                      <SidebarMenuItem key={category.id}>
                        <SidebarMenuButton
                          isActive={categoryId === category.id}
                          className="data-[active=true]:bg-gray-800 data-[active=true]:font-medium cursor-pointer"
                          onClick={() => handleCategoryClick(category.id)}
                        >
                          <div className="flex items-center gap-5">
                            <Icon className="h-5 w-5" />
                            <span className="text-sm truncate">
                              {category.snippet.title}
                            </span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <Separator />
          </>
        )}

        {/* Settings Section */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                    className="data-[active=true]:bg-gray-800 data-[active=true]:font-medium"
                  >
                    <Link to={item.href} className="flex items-center gap-5">
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
