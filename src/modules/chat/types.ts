import { components } from "@/api/types";

export type GenkitHistoryItem = components["schemas"]["GenkitHistoryItem"];
export enum GenkitHistoryItemRole {
  USER = "USER",
  SYSTEM = "SYSTEM",
  MODEL = "MODEL",
  TOOL = "TOOL",
}
