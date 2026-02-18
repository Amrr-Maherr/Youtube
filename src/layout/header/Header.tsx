import { Menu, Search, Mic, Video, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/shared/Logo";
import Categories from "./Categories";

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
        <div className="flex-1 max-w-2xl mx-4 hidden md:flex items-center gap-2">
          <div className="flex flex-1 items-center">
            <div className="flex flex-1 items-center bg-[#121212] border border-gray-700 rounded-l-full px-4 py-2 focus-within:border-blue-500">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <Input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-none h-auto p-0"
              />
            </div>
            <Button className="bg-gray-800 hover:bg-gray-700 rounded-l-none rounded-r-full px-5">
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <Mic className="h-4 w-4 text-white" />
          </Button>
        </div>

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
        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center bg-[#121212] border border-gray-700 rounded-full px-4 py-2">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <Input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-none h-auto p-0"
            />
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <Mic className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>

      {/* Categories Bar */}
      <Categories />
    </header>
  );
}
