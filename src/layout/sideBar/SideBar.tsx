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
import Logo from "@/components/shared/Logo";

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

export function YouTubeSidebar() {
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <Sidebar className="border-none dark:bg-background py-2">
      <SidebarContent>
        <Logo/>
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
