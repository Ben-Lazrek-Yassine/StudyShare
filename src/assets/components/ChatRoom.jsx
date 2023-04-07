import Navbar from './Navbar';
import Chatbox from './Chatbox';
import SendMessage from './SendMessage';

  const ChatRoom = () => {
  return (
    <div>
      <Navbar />
      <Chatbox/>
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
