import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "@/api/types";

const fetchClient = createFetchClient<paths>({
  baseUrl: `${import.meta.env.VITE_BACKEND_API_URL}`,
});

const client = createClient(fetchClient);

export const useLLMChatHistoryItems = (userId: string) => {
  return client.useQuery(
    "get",
    "/api/genkit/customer-service/{userId}",
    {
      params: {
        path: {
          userId,
        },
      },
    },
    // Hacky way to force refetch every 100ms
    { refetchInterval: 100 }
  );
};
