import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NotFoundProps {
  message?: string;
  description?: string;
  onGoHome?: () => void;
}

export function NotFound({
  message = "Video not found",
  description = "The video you're looking for doesn't exist or has been removed",
  onGoHome,
}: NotFoundProps) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center gap-4 p-4">
      <div className="text-center">
        <h3 className="text-lg font-medium">{message}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Button onClick={handleGoHome}>Go Home</Button>
    </div>
  );
}
