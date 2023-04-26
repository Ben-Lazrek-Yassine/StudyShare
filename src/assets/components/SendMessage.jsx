import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState,useEffect } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../config/config";
import EmojiPicker from 'emoji-picker-react';
import Polls from './Polls';
import { useRef } from "react";


const SendMessage = () => {
  const [value, setValue] = useState(() => localStorage.getItem('inputValue') || "");
  const { currentUser } = UserAuth();
  const [showEmoji, setShowEmoji] = useState(false);
  const [openPoll,setOpenPoll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null);
  const inputRef = useRef(null);

  const handleModalClose = () => {
    setShowModal(false);
    setErrorMessage("");
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const onEmojiClick = (event, emojiObject) => {
    setValue(value + emojiObject.emoji);
    inputRef.current.focus();
  };

  const handlePoll = () => {
    setOpenPoll(!openPoll);
    setShowEmoji(false);
  }

  const handleEmoji = () => {
    setShowEmoji(!showEmoji);
    setOpenPoll(false);
    inputRef.current.focus();
  };

  const handleEmojiPicker = () => {
    setShowEmoji(!showEmojiPicker);
    setOpenPoll(false);
    inputRef.current.focus();
  };



  const AVATARS = [
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Overall&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Blank&hatColor=PastelBlue&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=ScreamOpen&skinColor=Light"
  ];

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      setShowModal(true);
      return;
    }


    try {
      const { uid, displayName, photoURL } = currentUser; 
      let avatar = currentUser.photoURL === null ? AVATARS[Math.floor(Math.random() * AVATARS.length)] : currentUser.photoURL;
      let name = currentUser.displayName === null ? currentUser.email.split("@")[0] : currentUser.displayName;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: name,
        email: currentUser.email,
        avatar,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch(error) {
      console.log(error);
    }

    setValue("");
  };

   return (
    <div className="fixed bottom-0 w-full py-10 shadow-lg">
        {openPoll && <Polls />}
        {showEmoji && <EmojiPicker height={500} width={400}  onEmojiClick={onEmojiClick} ref={inputRef} />}
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" placeholder="Enter a message..." />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
        <button onClick={handleEmoji} className="w-auto px-1">😊</button>
        <button onClick={handlePoll} className="w-auto px-1">📊</button>
      </form>
      
    </div>
  )
}

export default SendMessage