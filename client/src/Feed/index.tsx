import InputForm from "./InputForm";
import MessageList from "./MessageList";
import UserList from "./UserList";

const Feed = () => {
  return (
    <div className="w-full h-full">
      <div className="border-b">Feed</div>

      <div className="flex w-full h-full border-b">
        {/* Sidebar */}
        <div className="w-40 p-5 border-r">
          <div className="mb-3">Users</div>
          <UserList />
        </div>

        {/* Message List */}
        <div className="flex flex-1 p-5 flex-col-reverse gap-6">
          <MessageList />
        </div>
      </div>

      {/* Input Form */}
      <div className="p-2">
        <InputForm />
      </div>
    </div>
  );
};

export default Feed;
