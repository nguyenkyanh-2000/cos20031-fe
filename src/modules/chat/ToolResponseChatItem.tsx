import type { FC } from "react";

import { Badge } from "@/modules/ui/badge";

export type ToolRequestChatItemProps = {
  toolResponse: {
    name: string;
    output: Record<string, string>;
  };
};

export const ToolResponseChatItem: FC<ToolRequestChatItemProps> = ({
  toolResponse,
}) => {
  return (
    <div className="w-fit max-w-[500px] whitespace-pre-wrap rounded-sm bg-orange-200 p-3">
      <p className="mb-1 font-semibold text-orange-600">
        Tool:{" "}
        <Badge className="bg-orange-600 text-sm hover:bg-orange-600/80">
          {toolResponse.name}
        </Badge>
      </p>
      <p className="mb-1 font-semibold text-orange-600">Output:</p>
      <div className="ml-4 whitespace-pre-wrap rounded-sm bg-orange-100 p-2">
        <code className="text-base text-gray-500">
          {JSON.stringify(toolResponse.output, null, 2)}
        </code>
      </div>
    </div>
  );
};
