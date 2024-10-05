import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { database } from "../../api/auth/firebaseConfig";
import { filterLocalStorage } from "../../utils/filterLocalStorage";
import { useParams } from "react-router-dom";
import Message from "./message.jsx";

const InputChat = () => {
    const [send, setSend] = useState("");
    const { user } = useParams(); // Destructure user from useParams
    const [messages, setMessages] = useState([]);
    const currentUserId = filterLocalStorage(); // Get the current user's ID

    const handleSend = async (e) => {
        e.preventDefault();
        if (send.length === 0) {
            toast.warn("Bạn không thể để trống khi gửi");
        } else {
            const messageListRef = ref(database, 'messages');
            try {
                await push(messageListRef, {
                    text: send,
                    idUserSend: currentUserId,
                    idUserGet: user, // ID of the recipient
                    timestamp: new Date().toISOString(),
                    isSent: true // Mark the message as sent
                });
                toast.success("Gửi thành công");
                setSend("");
            } catch (error) {
                toast.error("Gửi thất bại: " + error.message);
            }
        }
    };

    useEffect(() => {
        const messageListRef = ref(database, 'messages');
        const unsubscribe = onValue(messageListRef, (snapshot) => {
            const data = snapshot.val();
            const loadedMessages = [];
            for (let key in data) {
                loadedMessages.push({ id: key, ...data[key] });
            }
            setMessages(loadedMessages);
        });

        // Clean up the listener on unmount
        return () => {
            unsubscribe();
        };
    }, []);

    const filteredMessages = messages.filter(message =>
        (message.idUserGet === currentUserId && message.idUserSend === user) ||
        (message.idUserSend === currentUserId && message.idUserGet === user)
    );

    return (
        <>
            <Message messages={filteredMessages} currentUserId={currentUserId} />

            <form className="p-4 bg-white shadow-md flex items-center space-x-2" onSubmit={handleSend}>
                <input
                    value={send}
                    onChange={(e) => setSend(e.target.value)}
                    type="text"
                    placeholder="Write Something..."
                    className="flex-1 p-2 border rounded"
                />
                <button className="p-2 bg-blue-500 text-white rounded" type="submit">Send</button>
            </form>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default InputChat;
