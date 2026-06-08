import { memo } from "react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Camera, Mail, Key, Globe, Pencil } from "lucide-react";

interface AccountSectionProps {
  language: string;
  onLanguageChange: (value: string) => void;
}

export default memo(function AccountSection({
  language,
  onLanguageChange,
}: AccountSectionProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences
        </p>
      </div>

      <Separator />

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Update your profile picture and channel information
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-semibold">
                JD
              </div>
              <div className="space-y-1">
                <p className="font-medium">John Doe</p>
                <p className="text-muted-foreground text-sm">@johndoe</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              <Camera className="mr-2 size-4" />
              Change
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Contact information</CardTitle>
            <CardDescription>
              Manage your email address and contact details
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 text-muted-foreground" />
              <div className="space-y-1">
                <p className="font-medium">Email address</p>
                <p className="text-muted-foreground text-sm">
                  john.doe@example.com
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              <Pencil className="mr-2 size-4" />
              Edit
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password to keep your account secure
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Key className="mt-0.5 size-5 text-muted-foreground" />
              <div className="space-y-1">
                <p className="font-medium">Password</p>
                <p className="text-muted-foreground text-sm">
                  Last changed 3 months ago
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              Change password
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Language</CardTitle>
            <CardDescription>
              Select your preferred language for the interface
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 size-5 text-muted-foreground" />
              <div className="space-y-1">
                <p className="font-medium">Interface language</p>
                <p className="text-muted-foreground text-sm">
                  Choose from available languages
                </p>
              </div>
            </div>
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </section>
    </div>
  );
});
