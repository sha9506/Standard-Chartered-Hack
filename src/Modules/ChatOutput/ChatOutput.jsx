import React from "react";
import "./ChatOutput.css";

const ChatOutput = ({ completedConversation = [] }) => {
  return (
    <div id="convo" data-from="Sonu Joshi">
      <ul className="chat-thread">
        {completedConversation
          .slice() // Create a copy of the array to avoid mutating the original
          .reverse() // Reverse the copied array
          .map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        <li>Click on Mic button to Start</li>
      </ul>
    </div>
  );
};

export default ChatOutput;
