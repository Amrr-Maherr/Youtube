import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { timeAgo } from "@/lib/video";
import type { CommentThread } from "@/types/Comment";
import Avatar from "@/components/Avatar";

interface VideoCommentsProps {
  commentCount: string;
  comments?: CommentThread[];
}

export function VideoComments({ commentCount, comments }: VideoCommentsProps) {
  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-lg font-semibold">
          {commentCount} Comments
        </h2>
      </div>

      <AddComment />

      {comments && comments.length > 0 ? (
        <div className="space-y-4 mt-6">
          {comments.map((commentThread: CommentThread) => {
            const comment = commentThread.snippet.topLevelComment;
            return (
              <div key={comment.id} className="flex gap-3">
                <Avatar
                  src={comment.snippet.authorProfileImageUrl}
                  alt={comment.snippet.authorDisplayName}
                  size="md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {comment.snippet.authorDisplayName}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {timeAgo(comment.snippet.publishedAt)}
                    </span>
                  </div>
                  <div
                    className="mt-1 text-sm text-foreground"
                    dangerouslySetInnerHTML={{ __html: comment.snippet.textDisplay }}
                  />
                  <div className="mt-2 flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                      <ThumbsUp className="size-3" />
                      {comment.snippet.likeCount}
                    </button>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                      <ThumbsDown className="size-3" />
                    </button>
                    <button className="text-xs font-medium hover:text-foreground">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          <p>No comments yet. Be the first to comment!</p>
        </div>
      )}
    </div>
  );
}

function AddComment() {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="mb-6 flex gap-3">
      <Avatar size="md" alt="User" />
      <div className="flex-1">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          className="w-full resize-none rounded-lg border border-input bg-background p-3 text-sm outline-none focus:border-ring min-h-[100px]"
        />
        <div className="mt-2 flex justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCommentText("")}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            disabled={!commentText.trim()}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
