import { useState, type FC } from "react";

import { Send } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useSendLLMMessage } from "./useSendLLMMessage";
import { useParams } from "react-router-dom";

type ChatViewInputProps = object;

export const ChatViewInput: FC<ChatViewInputProps> = () => {
  const { userId } = useParams<{ userId: string }>();
  const [value, setValue] = useState("");

  const { mutate } = useSendLLMMessage();

  if (!userId) {
    return (
      <div>
        <p className="text-red-500">User ID is required</p>
      </div>
    );
  }

  const sendMessage = (message: string) => {
    mutate({
      body: {
        userId,
        query: message,
      },
    });
  };

  return (
    <div className="flex min-h-12 w-full items-center justify-between gap-2 rounded-sm bg-white pr-2 shadow-sm">
      <Input
        className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Send a message"
        value={value}
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            sendMessage(value);
            setValue("");
          }
        }}
      />
      <Button
        className="text-green-600 hover:bg-transparent hover:text-green-600/60"
        size="sm"
        variant="ghost"
        onClick={() => {
          sendMessage(value);
          setValue("");
        }}
      >
        <Send className="size-5" />
      </Button>
    </div>
  );
};
