import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import Logo from "@/components/shared/Logo";

export default function AuthHeader() {
  const navigate = useNavigate();

  return (
    <header className="dark:bg-background dark:text-foreground w-full border-b">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800"
            onClick={() => navigate("/")}
          >
            <Menu className="h-5 w-5 text-white" />
          </Button>
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <Logo />
          </div>
        </div>

        {/* Center - Empty for auth pages */}
        <div className="flex-1" />

        {/* Right Section - Sign In Button */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-800"
            onClick={() => navigate("/signin")}
          >
            <User className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}
