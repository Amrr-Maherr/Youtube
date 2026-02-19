import { useState } from "react"
import { Search } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Separator } from "../../components/ui/separator"
import {
  Wrench,
  PlayCircle,
  UserCog,
  ShieldAlert,
  Video,
  BookOpen,
} from "lucide-react"
import { cn } from "../../lib/utils"

interface HelpTopic {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

const helpTopics: HelpTopic[] = [
  {
    id: "fix-problem",
    title: "Fix a problem",
    description: "Troubleshoot common issues and errors",
    icon: Wrench,
  },
  {
    id: "watch-videos",
    title: "Watch videos",
    description: "Learn about playback and video features",
    icon: PlayCircle,
  },
  {
    id: "manage-account",
    title: "Manage your account",
    description: "Settings, preferences, and account management",
    icon: UserCog,
  },
  {
    id: "policies-safety",
    title: "Policies and safety",
    description: "Community guidelines and safety tools",
    icon: ShieldAlert,
  },
  {
    id: "creator-help",
    title: "Creator help",
    description: "Resources for content creators",
    icon: Video,
  },
  {
    id: "community-guidelines",
    title: "Community guidelines",
    description: "Rules and policies for the community",
    icon: BookOpen,
  },
]

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTopics = helpTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Help</h1>
          <p className="text-muted-foreground text-sm">
            Find answers and get support
          </p>
        </div>

        <Separator className="my-6" />

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11"
          />
        </div>

        {/* Help Topics Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTopics.map((topic) => {
            const Icon = topic.icon
            return (
              <Card
                key={topic.id}
                className={cn(
                  "cursor-pointer transition-colors hover:bg-accent/50"
                )}
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-muted">
                    <Icon className="size-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {filteredTopics.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="flex min-h-[200px] flex-col items-center justify-center p-8 text-center">
              <div className="space-y-2">
                <h3 className="font-medium">No results found</h3>
                <p className="text-muted-foreground text-sm">
                  Try searching for something else
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
