import React from "react";

interface Message {
    premium: boolean;
    sender: string;
    text: string;
  }

interface MessagesProps {
  messages: Array<Message>;
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <>
      <h2>Messages</h2>
      {messages.reverse().map((message, i) => (
        <p key={i} className={message.premium ? "is-premium" : ""}>
          <strong>{message.sender}</strong>:<br />
          {message.text}
        </p>
      ))}
    </>
  );
};

export default Messages;
