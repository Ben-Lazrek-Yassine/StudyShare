import { useState, useEffect, useRef } from 'react';
import bot from '../../assets/components/about/bot.svg';
import user from '../components/about/user.svg';
import "daisyui/dist/full.css";

function ChatContainer({ messages }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-container p-4" ref={chatContainerRef}>
      {messages.map((message) => (
        <div className={message.isAi? "bg-gray-600" : "bg-slate-700"} key={message.id}>
          <div className="chat px-11">
            <div className="profile px-1">
              <img src={message.isAi ? bot : user}  alt={message.isAi ? 'bot' : 'user'} />
            </div>
            <div className="message bg-gray-700">{message.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Form({ onAddMessage }) {
  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    // add user's message to chat container
    onAddMessage(false, data.get('prompt'));

    e.target.reset();

    // add bot's message to chat container
    const response = await fetch('https://hiram.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: data.get('prompt'),
      }),
    });

    if (response.ok) {
      const { bot } = await response.json();

      onAddMessage(true, bot.trim());
    } else {
      const err = await response.text();

      onAddMessage(true, 'Something went wrong');
      alert(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between my-4">
      <input type="text" name="prompt" placeholder="Type something..." className="mr-2 p-2 rounded-lg w-screen" />
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function Chatgpt() {
  const [messages, setMessages] = useState([]);

  function addMessage(isAi, value) {
    setMessages((prevMessages) => [
      ...prevMessages,
      { isAi, value, id: generateUniqueId() },
    ]);
  }

  return (
    <div className="p-6">
      <ChatContainer messages={messages} />
      <Form onAddMessage={addMessage} />
    </div>
  );
}

export default Chatgpt;
