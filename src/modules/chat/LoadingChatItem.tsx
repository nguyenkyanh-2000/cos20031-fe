import type { FC } from "react";

import { Ellipsis } from "lucide-react";

export const LoadingChatItem: FC = () => {
  return (
    <div className="w-fit max-w-[500px] whitespace-pre-wrap rounded-sm bg-gray-200 px-3 py-2">
      <Ellipsis className="h-4 w-4 animate-pulse" />
    </div>
  );
};
