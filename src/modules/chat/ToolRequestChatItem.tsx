import type { FC } from "react";

import { Badge } from "@/modules/ui/badge";

export type ToolRequestChatItemProps = {
  toolRequest: {
    name: string;
    input: Record<string, string>;
  };
};

export const ToolRequestChatItem: FC<ToolRequestChatItemProps> = ({
  toolRequest,
}) => {
  return (
    <div className="w-fit max-w-[500px] whitespace-pre-wrap rounded-sm bg-orange-200 p-3">
      <p className="mb-1 font-semibold text-orange-600">
        Tool:{" "}
        <Badge className="bg-orange-600 text-sm hover:bg-orange-600/80">
          {toolRequest.name}
        </Badge>
      </p>
      <p className="mb-1 font-semibold text-orange-600">Parameters:</p>
      <div className="ml-4 whitespace-pre-wrap rounded-sm bg-orange-100 p-2">
        <code className="text-base text-gray-500">
          {JSON.stringify(toolRequest.input, null, 2)}
        </code>
      </div>
    </div>
  );
};
