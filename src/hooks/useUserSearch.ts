import { useInfiniteQuery } from "@tanstack/react-query";
import { searchUser } from "../services/user.service";

export const useUserSearch = (searchTerm: string) => {
  return useInfiniteQuery({
    queryKey: ["searched-users", searchTerm],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      return searchUser(pageParam, searchTerm);
    },
    enabled: searchTerm.trim().length > 0,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
  });
};
