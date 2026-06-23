import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "font-sans font-black tracking-[-0.02em] text-foreground",
        className,
      )}
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      selmo<span className="text-primary-hover">.</span>
    </span>
  );
}
