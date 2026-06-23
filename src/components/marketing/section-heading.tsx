import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-hover">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-balance text-2xl font-semibold tracking-normal sm:text-4xl", titleClassName)}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 whitespace-pre-line text-sm leading-7 text-muted-foreground sm:text-lg sm:leading-8", descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
