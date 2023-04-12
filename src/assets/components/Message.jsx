import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const COLORS = [
    "chat-bubble bg-orange-900 text-white",
    "chat-bubble bg-orange-800 text-white",
    "chat-bubble bg-orange-700 text-white",
    "chat-bubble bg-orange-600 text-white",
    "chat-bubble bg-orange-500 text-white",
    "chat-bubble bg-orange-400 text-white",
    "chat-bubble bg-orange-300 text-white",
  ];

  const { currentUser } = UserAuth();
  const [color, setColor] = useState(COLORS.map((color) => color)[Math.floor(Math.random() * COLORS.length)]);

  return (
    <div> 
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
        </div>
        <div className={color}>{message.text}</div>
      </div>
    </div>
  );
};


export default Message;