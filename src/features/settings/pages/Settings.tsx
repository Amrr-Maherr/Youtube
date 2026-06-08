import { useState, memo, lazy, Suspense, useCallback } from "react";
import { Button } from "../../../shared/components/ui/button";
import { Separator } from "../../../shared/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../shared/components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../../shared/components/ui/radio-group";
import {
  User,
  Bell,
  PlayCircle,
  Shield,
  Smartphone,
  CreditCard,
  Settings2,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import { cn } from "../../../shared/lib/utils";

// Lazy-load individual settings sections
const AccountSection = lazy(() => import("./settings/AccountSection"));
const NotificationsSection = lazy(() => import("./settings/NotificationsSection"));
const PlaybackSection = lazy(() => import("./settings/PlaybackSection"));
const PrivacySection = lazy(() => import("./settings/PrivacySection"));
const ConnectedSection = lazy(() => import("./settings/ConnectedSection"));
const BillingSection = lazy(() => import("./settings/BillingSection"));
const AdvancedSection = lazy(() => import("./settings/AdvancedSection"));

type SettingsSection =
  | "account"
  | "notifications"
  | "playback"
  | "privacy"
  | "connected"
  | "billing"
  | "advanced";

interface SettingsMenuItem {
  id: SettingsSection;
  label: string;
  icon: React.ElementType;
}

const settingsMenuItems: SettingsMenuItem[] = [
  { id: "account", label: "Account", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "playback", label: "Playback and performance", icon: PlayCircle },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "connected", label: "Connected apps", icon: Smartphone },
  { id: "billing", label: "Billing and payments", icon: CreditCard },
  { id: "advanced", label: "Advanced settings", icon: Settings2 },
];

const SettingsSectionSkeleton = memo(() => (
  <div className="flex flex-col gap-6">
    <div className="space-y-1">
      <div className="h-7 w-32 animate-pulse rounded bg-muted" />
      <div className="h-4 w-64 animate-pulse rounded bg-muted" />
    </div>
    <Separator />
    <Card className="border-dashed">
      <CardContent className="flex min-h-[300px] items-center justify-center p-8">
        <div className="flex max-w-sm flex-col items-center gap-4">
          <div className="size-12 animate-pulse rounded-full bg-muted" />
          <div className="space-y-2 text-center">
            <div className="h-5 w-32 animate-pulse rounded bg-muted" />
            <div className="h-4 w-48 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
));

SettingsSectionSkeleton.displayName = "SettingsSectionSkeleton";

const SettingsMenuItem = memo(({
  item,
  isActive,
  onClick,
}: {
  item: SettingsMenuItem;
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = item.icon;
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      onClick={onClick}
      className={cn("gap-2", !isActive && "font-normal")}
    >
      <Icon className="size-4" />
      <span className="hidden sm:inline">{item.label}</span>
      <span className="sm:hidden">{item.label.split(" ")[0]}</span>
    </Button>
  );
});

SettingsMenuItem.displayName = "SettingsMenuItem";

const SectionLoader = memo(({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<SettingsSectionSkeleton />}>
    {children}
  </Suspense>
));

SectionLoader.displayName = "SectionLoader";

const ThemeSection = memo(({
  theme,
  onThemeChange,
}: {
  theme: "light" | "dark" | "system";
  onThemeChange: (value: "light" | "dark" | "system") => void;
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Appearance</CardTitle>
      <CardDescription>
        Customize how YouTube looks on your device
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex items-center gap-2">
          <Sun className="size-5 text-muted-foreground dark:hidden" />
          <Moon className="hidden size-5 text-muted-foreground dark:block" />
        </div>
        <div className="space-y-1">
          <p className="font-medium">Theme</p>
          <p className="text-muted-foreground text-sm">
            Choose between Light, Dark, or System default
          </p>
        </div>
      </div>
      <RadioGroup
        value={theme}
        onValueChange={(value) => onThemeChange(value as "light" | "dark" | "system")}
        className="flex gap-2"
      >
        <label className="flex items-center gap-2 cursor-pointer">
          <RadioGroupItem value="light" />
          <Sun className="size-4" />
          <span className="text-sm">Light</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <RadioGroupItem value="dark" />
          <Moon className="size-4" />
          <span className="text-sm">Dark</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <RadioGroupItem value="system" />
          <Monitor className="size-4" />
          <span className="text-sm">System</span>
        </label>
      </RadioGroup>
    </CardContent>
  </Card>
));

ThemeSection.displayName = "ThemeSection";

export default memo(function Settings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("account");
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [language, setLanguage] = useState("en");

  const handleSectionChange = useCallback((section: SettingsSection) => {
    setActiveSection(section);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <SectionLoader>
            <AccountSection language={language} onLanguageChange={setLanguage} />
          </SectionLoader>
        );
      case "notifications":
        return <SectionLoader><NotificationsSection /></SectionLoader>;
      case "playback":
        return <SectionLoader><PlaybackSection /></SectionLoader>;
      case "privacy":
        return <SectionLoader><PrivacySection /></SectionLoader>;
      case "connected":
        return <SectionLoader><ConnectedSection /></SectionLoader>;
      case "billing":
        return <SectionLoader><BillingSection /></SectionLoader>;
      case "advanced":
        return <SectionLoader><AdvancedSection /></SectionLoader>;
      default:
        return <SectionLoader><AccountSection language={language} onLanguageChange={setLanguage} /></SectionLoader>;
    }
  };

  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {settingsMenuItems.map((item) => (
              <SettingsMenuItem
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => handleSectionChange(item.id)}
              />
            ))}
          </div>
        </div>

        {renderContent()}

        <div className="mt-6">
          <ThemeSection theme={theme} onThemeChange={setTheme} />
        </div>
      </div>
    </main>
  );
});
