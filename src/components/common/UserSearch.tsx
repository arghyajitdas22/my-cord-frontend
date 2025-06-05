import * as React from "react";
import { TUserState } from "../../validators/user.validator";
import { useUserSearch } from "../../hooks/useUserSearch";
import debounce from "lodash.debounce";
import { DiscordLogo } from "@phosphor-icons/react";

interface IUserSearchProps {
  onSelect: (user: TUserState) => void;
  inputStyles: string;
}

const UserSearch: React.FunctionComponent<IUserSearchProps> = ({
  onSelect,
  inputStyles,
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [showDropdown, setShowDropdown] = React.useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useUserSearch(searchTerm);

  const observer = React.useRef<IntersectionObserver | null>(null);
  const lastUserRef = React.useRef<HTMLDivElement | null>(null);

  const handleObserver = React.useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
      lastUserRef.current = node;
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  const debouncedSearch = React.useCallback(
    debounce((val: string) => {
      setSearchTerm(val);
      refetch();
    }, 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    setShowDropdown(true);
    debouncedSearch(val);
  };

  const handleSelect = (user: TUserState) => {
    setInputValue(user.username);
    setShowDropdown(false);
    onSelect(user);
  };

  const users = React.useMemo(
    () => data?.pages.flatMap((page) => page.users) || [],
    [data]
  );
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search user by username"
        className={inputStyles}
      />

      {showDropdown && searchTerm.trim() && (
        <div
          className={`absolute mt-1 w-full h-fit max-h-60 overflow-auto p-2 border-2 border-gray-500 rounded-md flex flex-col gap-y-2 bg-black z-40`}
        >
          {isLoading && <p className="text-gray-500 text-center">Loading...</p>}
          {!isLoading && users.length === 0 && (
            <p className="text-gray-500 text-center">No users found</p>
          )}

          {users.map((user, index) => {
            const isLast = index === users.length - 1;
            return (
              <div
                key={user._id}
                onClick={() => handleSelect(user)}
                ref={isLast ? handleObserver : null}
                className="px-3 py-2 rounded-md bg-[#2f3136] cursor-pointer"
              >
                {/* icon display name and username */}
                <div className="flex items-center gap-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#ed5555] flex items-center justify-center">
                    <DiscordLogo size={20} weight="fill" color="white" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <span className="text-sm text-white">
                      {user?.displayName}
                    </span>
                    <span className="text-xs text-gray-300">
                      {user?.username}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {isFetchingNextPage && (
            <p className="text-gray-500 text-center">Loading more...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserSearch;
