import { memo } from "react";
import { Menu, Search, Video, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/shared/Logo";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const HeaderActionButton = memo(({
  onClick,
  icon: Icon,
  label,
  badge,
  className
}: {
  onClick?: () => void;
  icon: React.ElementType;
  label: string;
  badge?: boolean;
  className?: string;
}) => (
  <Button
    variant="ghost"
    size="icon"
    onClick={onClick}
    className={`hover:bg-gray-800 relative ${className || ''}`}
    aria-label={label}
  >
    <Icon className="h-5 w-5 text-white" />
    {badge && (
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
    )}
  </Button>
));

HeaderActionButton.displayName = "HeaderActionButton";

const HeaderContent = memo(({ navigate }: { navigate: ReturnType<typeof useNavigate> }) => (
  <>
    <div className="flex items-center justify-between px-4 py-2 h-14">
      <div className="flex items-center gap-1">
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="hover:bg-gray-800">
            <Menu className="h-5 w-5 text-white" />
          </Button>
        </SidebarTrigger>
        <Logo />
      </div>

      <SearchBar className="hidden md:flex" />

      <div className="flex items-center gap-2">
        <HeaderActionButton
          icon={Search}
          label="Search"
          className="md:hidden"
        />
        <HeaderActionButton
          icon={Video}
          label="Create"
          className="hidden sm:flex"
        />
        <HeaderActionButton
          icon={Bell}
          label="Notifications"
          badge
          onClick={() => navigate("/notifications")}
        />
        <HeaderActionButton
          icon={User}
          label="Account"
          onClick={() => navigate("/signin")}
        />
      </div>
    </div>

    <div className="md:hidden px-4 pb-3">
      <SearchBar className="flex" />
    </div>

    <Categories />
  </>
));

HeaderContent.displayName = "HeaderContent";

export default memo(function Header() {
  const navigate = useNavigate();

  return (
    <header className="dark:bg-background dark:text-foreground w-full">
      <HeaderContent navigate={navigate} />
    </header>
  );
});
