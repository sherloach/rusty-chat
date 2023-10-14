interface IMessageList {}

const MessageList: React.FC<IMessageList> = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="font-medium dark:text-white">
        <div className="flex gap-2 items-center">
          <div>Jese Leos</div>
          <div className="text-xs text-gray-400">10/08/2023 8:39 PM</div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          This is a sample message!
        </div>
      </div>
    </div>
  );
};

export default MessageList;
