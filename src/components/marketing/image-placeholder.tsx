import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  description?: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  description = "実際の画面・キャラクター画像を後から差し替え",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative grid min-h-64 overflow-hidden rounded-xl border border-dashed border-black/20 bg-white/60 p-6 shadow-line backdrop-blur",
        className,
      )}
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,189,7,0.16),transparent_42%),linear-gradient(rgba(17,17,17,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.035)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]" />
      <div className="relative z-10 flex h-full min-h-20 flex-col items-center justify-center rounded-lg border border-white/80 bg-white/46 text-center sm:min-h-52">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/18 text-foreground sm:mb-4 sm:h-12 sm:w-12">
          <ImageIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="mt-2 hidden max-w-56 text-xs leading-6 text-muted-foreground sm:block">
          {description}
        </p>
      </div>
    </div>
  );
}
