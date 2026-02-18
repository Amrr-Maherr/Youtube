import { Search, Mic} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <header className=" dark:bg-background dark:text-foreground border-b border-gray-800 w-full">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        {/* Left Section - Logo & Menu */}
        <div className="flex items-center gap-4">
          <SidebarTrigger>
            <Button variant="ghost" size="icon" className="hover:bg-gray-800">
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </SidebarTrigger>
          <a href="/" className="flex items-center gap-1">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              YouTube
            </span>
          </a>
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
    </header>
  );
}
