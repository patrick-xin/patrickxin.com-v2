import Avatar from "boring-avatars";
import { formatDistanceToNow, parseISO } from "date-fns";

const CommentBox = ({
  username,
  isAdmin,
  createdAt,
  by,
}: {
  username: string;
  isAdmin: boolean;
  createdAt: string;
  by?: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <Avatar size={30} name={isAdmin ? by : username} variant="beam" />
      </div>
      <div
        className={`flex w-full items-center justify-between space-x-2 rounded-md border-b border-gray-200 p-2 text-xs dark:border-gray-900/50 md:justify-start md:space-x-6 lg:text-sm ${
          isAdmin
            ? "bg-[#4dcead]/60 dark:bg-[#e59500]/60 "
            : "bg-[#e59500]/60 dark:bg-[#4dcead]/30 "
        }`}
      >
        <div className="font-semibold">{isAdmin ? by : username}</div>

        <div className="text-xs italic tracking-tighter dark:text-white/40">
          {formatDistanceToNow(parseISO(createdAt), {
            addSuffix: true,
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
