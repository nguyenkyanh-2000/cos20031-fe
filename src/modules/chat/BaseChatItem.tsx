import type { ReactNode } from "react";
import { type FC } from "react";

import { cn } from "@/lib/utils";

export type BaseChatItemProps = {
  createdAt?: Date;
  children: ReactNode;
  elapsedTime?: number;
  type: "User" | "Model" | "System" | "Tool Response" | "Tool Request";
  className?: string;
};

export const BaseChatItem: FC<BaseChatItemProps> = ({
  createdAt,
  children,
  type,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <p className="text-sm font-semibold text-gray-400">{type}</p>
      {children}
      {createdAt && (
        <div className="flex items-center gap-1 text-xs text-gray-500 first-letter:capitalize">
          {createdAt.toLocaleDateString([], {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          {createdAt.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      )}
    </div>
  );
};
