// ChatBar.jsx
import React, { useEffect, useState } from "react";
import "./ChatWindow.css";
import CircleAnimation from "../CircleAnimation/CircleAnimation";

const ChatBar = ({ setMessage = () => {} }) => {
  const [isActive, setIsActive] = useState(false);
  const [bop, setBop] = useState(false);
  const [drop, setDrop] = useState(false);

  const toggle = () => {
    if (isActive) {
      setDrop(true);
      setIsActive(false);
      setTimeout(() => setDrop(false), 600);
    } else {
      setBop(true);
      setIsActive(true);
      setTimeout(() => setBop(false), 600);
    }
  };

  //   useEffect(() => {
  //     if (!isActive) {
  //       listen();
  //     }
  //   }, [isActive]);

  return (
    <div
      id="js-chatbar"
      className={`chat-bar ${isActive ? "--is-active" : ""} ${
        bop ? "--bop" : ""
      } ${drop ? "--drop" : ""}`}
    >
      <div id="js-toggle" className="chat-bar__toggle" onClick={toggle}>
        <i className="material-icons">mic</i>
      </div>
      {/* <div className="chat-bar__message">
        <input
          className="chat-bar__input"
          type="text"
          placeholder="Listening..."
          disabled
        />
      </div>
      <div className="chat-bar__buttons">
        <input
          className="chat-bar__input"
          type="text"
          placeholder="Message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setMessage(e.target.value);
            }
          }}
        />
      </div> */}
    </div>
  );
};

export default ChatBar;
