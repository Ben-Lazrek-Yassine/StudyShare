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


  const  AVATARS = [
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Overall&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Blank&hatColor=PastelBlue&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=ScreamOpen&skinColor=Light"
  ]

  const { currentUser } = UserAuth();
  const [color, setColor] = useState(COLORS.map((color) => color)[Math.floor(Math.random() * COLORS.length)]);
  
  if (!message.avatar) {
    const randomAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
    const name = message.email ? message.email.split("@")[0] : "Anonymous";
    message = { ...message, avatar: randomAvatar, name };
  }

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