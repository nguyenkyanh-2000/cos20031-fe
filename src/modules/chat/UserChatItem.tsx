import { type FC } from "react";

import Markdown from "markdown-to-jsx";

export type UserChatItemProps = {
  text: string;
};

export const UserChatItem: FC<UserChatItemProps> = ({ text }) => {
  return (
    <div className="w-fit max-w-[500px] whitespace-pre-wrap rounded-sm bg-green-600 px-3 py-2 text-white">
      <Markdown>{text}</Markdown>
    </div>
  );
};
