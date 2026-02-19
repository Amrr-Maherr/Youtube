import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    // TODO: Implement actual registration
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="flex items-center px-6 py-4 border-b">
        <button
          onClick={() => navigate("/signin")}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          <ArrowLeft className="size-5" />
        </button>
        <div className="ml-4">
          <svg viewBox="0 0 90 20" className="h-5 w-auto">
            <g>
              <path
                fill="#FF0000"
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
              />
              <path
                fill="#FFFFFF"
                d="M11.4253 12.8527L18.7024 10.0001L11.4253 7.14746V12.8527Z"
              />
            </g>
            <g>
              <path
                fill="currentColor"
                d="M34.6024 19.3987H36.7844V10.2627H34.6024V19.3987ZM35.6934 8.90369C36.3764 8.90369 36.9344 8.36969 36.9344 7.69769C36.9344 7.02569 36.3764 6.49169 35.6934 6.49169C35.0104 6.49169 34.4524 7.02569 34.4524 7.69769C34.4524 8.36969 35.0104 8.90369 35.6934 8.90369Z"
              />
              <path
                fill="currentColor"
                d="M41.8583 19.3987H44.0403V14.5067C44.0403 12.8987 44.9143 12.0727 46.1623 12.0727C47.3623 12.0727 48.0453 12.8507 48.0453 14.2847V19.3987H50.2273V13.2067C50.2273 11.2667 49.1363 10.2627 47.4083 10.2627C46.2563 10.2627 45.4783 10.7967 44.9623 11.5267V10.4667H42.7803V10.7487V19.3987H41.8583Z"
              />
              <path
                fill="currentColor"
                d="M54.5944 19.3987H56.7764V14.5067C56.7764 12.8987 57.6504 12.0727 58.8984 12.0727C60.0984 12.0727 60.7814 12.8507 60.7814 14.2847V19.3987H62.9634V13.2067C62.9634 11.2667 61.8724 10.2627 60.1444 10.2627C58.9924 10.2627 58.2144 10.7967 57.6984 11.5267V10.4667H55.5164V10.7487V19.3987H54.5944Z"
              />
              <path
                fill="currentColor"
                d="M66.9338 19.3987H69.1158V10.2627H66.9338V19.3987ZM68.0248 8.90369C68.7078 8.90369 69.2658 8.36969 69.2658 7.69769C69.2658 7.02569 68.7078 6.49169 68.0248 6.49169C67.3418 6.49169 66.7838 7.02569 66.7838 7.69769C66.7838 8.36969 67.3418 8.90369 68.0248 8.90369Z"
              />
              <path
                fill="currentColor"
                d="M75.925 10.2627C74.245 10.2627 72.859 11.2187 72.859 13.0907V13.3407H78.067C78.019 14.9007 76.867 16.0047 75.037 16.0047C73.357 16.0047 71.923 14.9967 71.923 13.0907V12.8407H69.741V13.0907C69.741 15.9527 71.875 17.8587 74.989 17.8587C77.755 17.8587 80.227 16.0527 80.227 13.0427V10.2627H75.925ZM72.907 11.9427C73.051 10.9827 73.877 10.2127 75.029 10.2127C76.133 10.2127 76.955 10.9347 77.051 11.9427H72.907Z"
              />
              <path
                fill="currentColor"
                d="M83.0851 19.3987H85.2671V10.2627H83.0851V19.3987ZM84.1761 8.90369C84.8591 8.90369 85.4171 8.36969 85.4171 7.69769C85.4171 7.02569 84.8591 6.49169 84.1761 6.49169C83.4931 6.49169 82.9351 7.02569 82.9351 7.69769C82.9351 8.36969 83.4931 8.90369 84.1761 8.90369Z"
              />
            </g>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-normal mb-2">Create your Google Account</h1>
            <p className="text-muted-foreground">
              to continue to YouTube
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-normal">
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-normal">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-normal">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="h-11"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-normal">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="h-11 pr-10"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-normal">
                Confirm password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-11 pr-10"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-4 pt-4">
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => navigate("/signin")}
              >
                Sign in instead
              </Button>
            </div>
          </form>

          <Separator className="my-6" />

          <p className="text-xs text-muted-foreground text-center">
            This page is for demonstration purposes only.
            <br />
            No actual account will be created.
          </p>
        </div>
      </main>
    </div>
  );
}
