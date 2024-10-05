import { useParams } from "react-router-dom";
import { userData } from "../../api/users/getUser.jsx";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const HeaderChat = () => {
  const { user } = useParams();
  const [userMessage, setUserMessage] = useState(null);

  useEffect(() => {
    async function getDataMessage() {
      try {
        const userID = await userData(user);
        const userMessageData = userID.data.data;

        setUserMessage(userMessageData);
      } catch (err) {}
    }
    getDataMessage();
  }, [user]);

  return (
    <>
      {!userMessage ? (
        <div className="p-4 bg-white shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-2">Loading</div>
        </div>
      ) : (
        <div className="p-4 bg-white shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {userMessage && (
              <div className="flex items-center space-x-2">
                <img
                  src={userMessage.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full bg-gray-300 gap-3"
                />
                <div className="flex flex-col items-start">
                  <div className="font-bold">{userMessage.displayName}</div>
                  <div className="text-sm text-gray-600">
                    {userMessage.role}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-blue-500 text-white rounded">Chat</button>
            <button className="p-2 bg-blue-500 text-white rounded">
              Video Call
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderChat;
