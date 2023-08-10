import getApiData from '../utils/getApiData';
import { ApiData } from '../types/ApiData';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useApiData() {
  const queryClient = useQueryClient();
  const queryKey = ['location'];

  const { data, error, isLoading } = useQuery<ApiData>(
    queryKey,
    () => getApiData(),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const mutation = useMutation(getApiData, {
    onSuccess: (newData) => {
      // Update the query data manually after mutation
      queryClient.setQueryData(queryKey, newData);
    },
  });

  const updateData = (query?: string) => {
    // Trigger the mutation
    mutation.mutate(query);
  };

  return {
    data,
    isLoading,
    error,
    updateData,
  };
}
