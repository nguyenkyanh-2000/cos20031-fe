import { Fragment, useCallback, useEffect, useRef, type FC } from "react";

import { differenceInMilliseconds } from "date-fns";

import { BaseChatItem } from "./BaseChatItem";
import { LoadingChatItem } from "./LoadingChatItem";
import { ModelChatItem } from "./ModelChatItem";
import { UserChatItem } from "./UserChatItem";
import { GenkitHistoryItem, GenkitHistoryItemRole } from "./types";
import { ToolResponseChatItem } from "./ToolResponseChatItem";
import { ToolRequestChatItem } from "./ToolRequestChatItem";

export type ChatViewMessagesProps = {
  items: GenkitHistoryItem[];
};

export const ChatViewMessages: FC<ChatViewMessagesProps> = ({ items }) => {
  const renderChatHistoryItem = useCallback(
    (item: GenkitHistoryItem, index: number) => {
      const content = item.content[0] ? item.content[0] : {};
      const previousItem = index > 0 ? items[index - 1] : null;

      const elapsedTime = previousItem
        ? differenceInMilliseconds(
            new Date(item.createdAt),
            new Date(previousItem.createdAt)
          )
        : 0;

      if (item.role === GenkitHistoryItemRole.USER) {
        return (
          // User
          <BaseChatItem
            className="items-end self-end"
            createdAt={new Date(item.createdAt)}
            type="User"
          >
            <UserChatItem text={content.text} />
          </BaseChatItem>
        );
      }

      if (content.toolRequest) {
        // Tool request'
        return (
          <BaseChatItem createdAt={new Date(item.createdAt)} type="Model">
            <ToolRequestChatItem toolRequest={content.toolRequest} />
          </BaseChatItem>
        );
      }

      if (item.role === GenkitHistoryItemRole.TOOL) {
        return (
          // Tool response
          <BaseChatItem createdAt={new Date(item.createdAt)} type="Model">
            <ToolResponseChatItem toolResponse={content.toolResponse} />
          </BaseChatItem>
        );
      }

      if (item.role === GenkitHistoryItemRole.MODEL) {
        if (item.id.startsWith("loading_")) {
          return <LoadingChatItem />;
        }

        return (
          // Model
          <BaseChatItem
            createdAt={new Date(item.createdAt)}
            elapsedTime={elapsedTime}
            type="Model"
          >
            <ModelChatItem text={content.text} />
          </BaseChatItem>
        );
      }

      return null;
    },
    [items]
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat when the messages change
  useEffect(() => {
    if (items.length > 0) {
      if (!scrollContainerRef.current) {
        return;
      }

      const lastMessageId = items[items.length - 1].id;

      const messageEl = scrollContainerRef.current.querySelector(
        `[id="${lastMessageId}"]`
      );

      messageEl?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [items]);

  if (!items.length) return;

  return (
    <div
      className="relative flex flex-col gap-0 h-[80vh] overflow-auto py-2 pb-6 pr-3 [scrollbarColor:rgba(0,0,0,0.2)_transparent] flex-grow"
      id={`scrollableMessages}`}
      ref={scrollContainerRef}
    >
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <div id={item.id}>{renderChatHistoryItem(item, index)}</div>
        </Fragment>
      ))}
    </div>
  );
};
