import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import AuthHeader from "./AuthHeader";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // TODO: Implement actual authentication
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, redirect to home
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AuthHeader />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-normal mb-2">Sign in</h1>
            <p className="text-muted-foreground">
              to continue to YouTube
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-normal">
                Email or phone
              </Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
                required
                autoFocus
              />
              <p className="text-xs text-muted-foreground">
                Not your computer? Use Guest mode to sign in privately.
              </p>
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
                disabled={isLoading || !email.trim()}
              >
                {isLoading ? "Signing in..." : "Next"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
            </div>
          </form>

          <Separator className="my-6" />

          <div className="flex justify-between items-center text-sm">
            <a
              href="#"
              className="text-primary hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Create account
            </a>
            <a
              href="#"
              className="text-primary hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Forgot email?
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
