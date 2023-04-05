import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const COLORS = [
    "chat-bubble chat-bubble-primary",
    "chat-bubble chat-bubble-secondary",
    "chat-bubble chat-bubble-accent",
    "chat-bubble chat-bubble-info",
    "chat-bubble chat-bubble-success",
    "chat-bubble chat-bubble-warning",
    "chat-bubble chat-bubble-error"
  ];

  const { currentUser } = UserAuth();
  const [color, setColor] = useState(COLORS[Math.floor(Math.random() * COLORS.length)]);

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
