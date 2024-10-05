import React, { useEffect, useRef } from 'react';

const Message = ({ messages, currentUserId}) => {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
        }
    }, [messages])

    return (
        <div className="flex-col overflow-y-auto h-96 p-4">
            <div className="space-y-4">
                {messages
                    .filter(message => message.idUserGet === currentUserId || message.idUserSend === currentUserId)
                    .map((message) => (
                        <div key={message.id}
                             className={`flex ${message.idUserSend === currentUserId ? 'justify-end' : ''}`}>
                            <div
                                className={`p-2 rounded-lg max-w-xs ${message.idUserSend === currentUserId ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                {message.text}
                            </div>
                        </div>
                    ))}
                <div ref={messagesEndRef}/>
                {/* Phần tử để cuộn đến */}
            </div>
        </div>

    );
};

export default Message;
