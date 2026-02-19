import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Separator } from "../../components/ui/separator"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import {
  User,
  Bell,
  PlayCircle,
  Shield,
  Smartphone,
  CreditCard,
  Settings2,
  Camera,
  Mail,
  Key,
  Globe,
  Sun,
  Moon,
  Monitor,
  Pencil,
} from "lucide-react"
import { cn } from "../../lib/utils"

type SettingsSection =
  | "account"
  | "notifications"
  | "playback"
  | "privacy"
  | "connected"
  | "billing"
  | "advanced"

interface SettingsMenuItem {
  id: SettingsSection
  label: string
  icon: React.ElementType
}

const settingsMenuItems: SettingsMenuItem[] = [
  { id: "account", label: "Account", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "playback", label: "Playback and performance", icon: PlayCircle },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "connected", label: "Connected apps", icon: Smartphone },
  { id: "billing", label: "Billing and payments", icon: CreditCard },
  { id: "advanced", label: "Advanced settings", icon: Settings2 },
]

export default function Settings() {
  const [activeSection, setActiveSection] = useState<SettingsSection>("account")
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [language, setLanguage] = useState("en")

  const renderAccountSection = () => (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
        <p className="text-muted-foreground text-sm">
          Manage your account settings and preferences
        </p>
      </div>

      <Separator />

      {/* Profile Section */}
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

      {/* Email Section */}
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

      {/* Password Section */}
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

      {/* Language Section */}
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
            <Select value={language} onValueChange={setLanguage}>
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

      {/* Theme Section */}
      <section>
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
              onValueChange={(value) =>
                setTheme(value as "light" | "dark" | "system")
              }
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
      </section>
    </div>
  )

  const renderPlaceholderSection = (title: string, description: string) => (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Separator />
      <Card className="border-dashed">
        <CardContent className="flex min-h-[300px] items-center justify-center p-8">
          <div className="flex max-w-sm flex-col items-center gap-4 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
              <Settings2 className="size-6 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <p className="font-medium">Coming soon</p>
              <p className="text-muted-foreground text-sm">
                This section is under development and will be available soon.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return renderAccountSection()
      case "notifications":
        return renderPlaceholderSection(
          "Notifications",
          "Manage your notification preferences"
        )
      case "playback":
        return renderPlaceholderSection(
          "Playback and performance",
          "Adjust playback settings and performance options"
        )
      case "privacy":
        return renderPlaceholderSection(
          "Privacy",
          "Control your privacy settings and data"
        )
      case "connected":
        return renderPlaceholderSection(
          "Connected apps",
          "Manage apps connected to your account"
        )
      case "billing":
        return renderPlaceholderSection(
          "Billing and payments",
          "View and manage your payment information"
        )
      case "advanced":
        return renderPlaceholderSection(
          "Advanced settings",
          "Advanced configuration options"
        )
      default:
        return renderAccountSection()
    }
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto p-4 sm:p-6 lg:p-8">
        {/* Tabs Navigation */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {settingsMenuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "gap-2",
                    !isActive && "font-normal"
                  )}
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.label.split(" ")[0]}</span>
                </Button>
              )
            })}
          </div>
        </div>

        {renderContent()}
      </div>
    </main>
  )
}
