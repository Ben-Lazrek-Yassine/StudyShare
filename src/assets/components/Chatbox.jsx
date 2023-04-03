import React from "react";
import Message from "./Message";

const Chatbox = () => {
    const messages = [
        {
            id: 1,
            text: "Hello",
        },
        {
            id: 2,
            text: "YOOO",
        },
    ];

    return (
        <div className="pb-44 pt-20">{messages.map(message => (
            <Message key={message.id} message={message} />  
        )
        )}
        </div>
    );
};

export default Chatbox;