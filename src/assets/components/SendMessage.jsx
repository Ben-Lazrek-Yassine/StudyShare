import { useState } from 'react';


const SendMessage = () => {
    const [value, setValue] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log(value);
        setValue('');
        
    }

    return (
      <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
        <form onSubmit={handleSendMessage} className="flex items-center mx-10">
          <input
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="input w-full focus:outline-none bg-gray-100 rounded-l-md px-5 py-3 "
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="w-auto bg-gray-500 text-white rounded-full px-5 py-3 text-sm rounded-l-none">
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default SendMessage;
  