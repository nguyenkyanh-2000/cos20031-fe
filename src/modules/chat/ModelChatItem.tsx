import { type FC } from "react";

import Markdown from "markdown-to-jsx";

export type ModelChatItemProps = {
  text: string;
};

export const ModelChatItem: FC<ModelChatItemProps> = ({ text }) => {
  return (
    <div className="mb-0.5 w-fit max-w-[900px] text-wrap whitespace-pre-wrap rounded-sm bg-blue-400 px-3 py-2">
      <Markdown>{text}</Markdown>
    </div>
  );
};
