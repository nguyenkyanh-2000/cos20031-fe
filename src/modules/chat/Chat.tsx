import { FC } from "react";
import { useLLMChatHistoryItems } from "./useLLMChatHistoryItems";
import { ChatViewMessages } from "./ChatViewMessages";
import { ChatViewInput } from "./ChatViewInput";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";

const Chat: FC = () => {
  const { userId } = useParams<{ userId: string }>();

  if (!userId) {
    return (
      <div>
        <p className="text-red-500">User ID is required</p>
      </div>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: response, isLoading, error } = useLLMChatHistoryItems(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !response) {
    return <div>Error!</div>;
  }

  const items = response.data?.history || [];

  return (
    <div className="h-full">
      <Button className="text-red-600 bg-white hover:bg-white/10">
        Clear chat
      </Button>
      <ChatViewMessages items={items} />
      {items.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-400">No messages yet</p>
        </div>
      )}
      <ChatViewInput />
    </div>
  );
};

export default Chat;
