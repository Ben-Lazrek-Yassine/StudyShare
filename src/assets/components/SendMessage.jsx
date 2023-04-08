import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { db } from "../config/config";
import { useEffect } from "react";
const SendMessage = () => {
  const [value, setValue] = useState(() => localStorage.getItem('inputValue') || "");
  const { currentUser } = UserAuth();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('inputValue', value);
  }, [value]);

   const  AVATARS = [
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Overall&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Blank&hatColor=PastelBlue&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=ScreamOpen&skinColor=Light"
    ]

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      setShowModal(true);
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        email: currentUser.email,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setValue("");
  }

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
      {showModal &&
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white w-96 p-6 rounded-lg shadow-xl">
              <h2 className="text-lg font-medium mb-4">Error</h2>
              <p className="mb-4">{value.trim() === "" ? "Please enter a message" : "Unknown error occurred"}</p>
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-medium">Close</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default SendMessage