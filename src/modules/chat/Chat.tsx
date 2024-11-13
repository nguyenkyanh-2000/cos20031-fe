import { FC } from "react";
import { useLLMChatHistoryItems } from "./useLLMChatHistoryItems";
import { ChatViewMessages } from "./ChatViewMessages";
import { ChatViewInput } from "./ChatViewInput";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { paths } from "@/api/types";
import createClient from "openapi-fetch";

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

  const handleClearChat = async () => {
    const fetchClient = createClient<paths>({
      baseUrl: `${import.meta.env.VITE_BACKEND_API_URL}`,
    });

    await fetchClient.GET("/api/genkit/customer-service/{userId}/finish", {
      params: {
        path: {
          userId,
        },
      },
    });
  };

  return (
    <div className="flex flex-col">
      <Button
        className="text-red-600 bg-white hover:bg-white/10 w-fit"
        onClick={handleClearChat}
      >
        Clear chat
      </Button>
      <ChatViewMessages items={items} />
      {items.length === 0 && (
        <div className="flex justify-center items-center h-[80vh] flex-grow">
          <p className="text-gray-400">No messages yet</p>
        </div>
      )}
      <ChatViewInput />
    </div>
  );
};

export default Chat;
