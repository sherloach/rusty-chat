import InputForm from "./InputForm";
import MessageList from "./MessageList";
import UserList from "./UserList";

const Feed = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b">Feed</div>

      <div className="flex w-full flex-1 flex-col border-b">
        <div className="flex-1 flex">
          <div className="w-40 p-5 border-r">
            <div className="mb-3">Users</div>
            <UserList />
          </div>

          <div className="flex flex-1 p-5 flex-col-reverse gap-6">
            <MessageList />
          </div>
        </div>

        <div className="p-2">
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default Feed;
