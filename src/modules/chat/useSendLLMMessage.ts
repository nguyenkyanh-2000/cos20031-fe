import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "@/api/types";
import { useQueryClient } from "@tanstack/react-query";

const fetchClient = createFetchClient<paths>({
  baseUrl: `${import.meta.env.VITE_BACKEND_API_URL}`,
});

const client = createClient(fetchClient);

export const useSendLLMMessage = () => {
  const queryClient = useQueryClient();
  return client.useMutation("post", "/api/genkit/customer-service", {
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
};
