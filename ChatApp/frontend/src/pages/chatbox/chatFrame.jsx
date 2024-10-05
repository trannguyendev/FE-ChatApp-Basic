import { io } from "socket.io-client";
import Sidebar from "../../component/chat/sideBar";
import ContactList from "../../component/chat/contactList";
import HeaderChat from "../../component/chat/header";
import Message from "../../component/chat/message";
import InputChat from "../../component/chat/inputChat";
import ProfileSection from "../../component/profile/profileSection";
import EditProfile from "../../component/chat/editProfile.jsx";
const ChatFrame = () => {
  const socket = io();
  socket.on("connect", () => {
    console.log(socket.id);
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex text-center w-3/4  border-2 rounded-xl border-indigo-500 p-4">
        <div className="w-1/4 flex flex-col bg-white shadow-lg">
          <Sidebar />
          <ContactList />
          <EditProfile/>
        </div>

        <div className="flex-1 flex flex-col">
          <HeaderChat />

          <InputChat />
        </div>
        <ProfileSection />
      </div>
    </div>
  );
};

export default ChatFrame;
