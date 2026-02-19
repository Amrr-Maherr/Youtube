import { Menu, Search, Video, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/shared/Logo";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className=" dark:bg-background dark:text-foreground w-full">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        {/* Left Section - Logo & Menu */}
        <div className="flex items-center gap-1">
          <SidebarTrigger>
            <Button variant="ghost" size="icon" className="hover:bg-gray-800">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SidebarTrigger>
          <Logo/>
        </div>

        {/* Center Section - Search */}
        <SearchBar className="hidden md:flex" />

        {/* Right Section - Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-gray-800"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800 hidden sm:flex"
          >
            <Video className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800 relative"
          >
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-800">
            <User className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar className="flex" />
      </div>

      {/* Categories Bar */}
      <Categories />
    </header>
  );
}
